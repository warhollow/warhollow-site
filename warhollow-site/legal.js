function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function appendTextWithEmail(element, text) {
  const emailPattern = /([\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g;
  let cursor = 0;
  for (const match of text.matchAll(emailPattern)) {
    element.append(document.createTextNode(text.slice(cursor, match.index)));
    const link = document.createElement("a");
    link.href = `mailto:${match[0]}`;
    link.textContent = match[0];
    element.append(link);
    cursor = match.index + match[0].length;
  }
  element.append(document.createTextNode(text.slice(cursor)));
}

function isListBlock(block, priorBlock) {
  const lines = block.split("\n").filter(Boolean);
  if (lines.length < 2) return false;
  const punctuated = lines.filter((line) => /[;.]$/.test(line.trim())).length;
  return priorBlock.trim().endsWith(":") || punctuated >= Math.ceil(lines.length * .6);
}

async function renderLegalDocument() {
  const root = document.querySelector("[data-legal-document]");
  if (!root) return;
  const source = root.dataset.source;
  const toc = document.querySelector("[data-legal-toc]");
  try {
    const response = await fetch(source);
    if (!response.ok) throw new Error(`Unable to load ${source}`);
    const raw = (await response.text()).replace(/\r\n/g, "\n").trim();
    const blocks = raw.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
    const contentBlocks = blocks.slice(2);
    contentBlocks.forEach((block, index) => {
      const prior = contentBlocks[index - 1] || "";
      const sectionMatch = block.match(/^(\d+)\.\s+(.+)$/);
      if (sectionMatch && !block.includes("\n")) {
        const heading = document.createElement("h2");
        heading.id = slugify(block);
        heading.textContent = block;
        root.append(heading);
        if (toc) {
          const link = document.createElement("a");
          link.href = `#${heading.id}`;
          link.textContent = block;
          toc.append(link);
        }
      } else if (!block.includes("\n") && block.length < 55 && /^[A-Z][A-Za-z’' &-]+$/.test(block) && !/[.:;]$/.test(block)) {
        const heading = document.createElement("h3");
        heading.textContent = block;
        root.append(heading);
      } else if (isListBlock(block, prior)) {
        const list = document.createElement("ul");
        block.split("\n").filter(Boolean).forEach((line) => {
          const item = document.createElement("li");
          appendTextWithEmail(item, line);
          list.append(item);
        });
        root.append(list);
      } else {
        const paragraph = document.createElement("p");
        if (block === block.toUpperCase() && block.length > 80) paragraph.className = "legal-caps";
        appendTextWithEmail(paragraph, block.replace(/\n/g, " "));
        if (/^Email:/.test(block) || /^privacy@/.test(block)) paragraph.classList.add("legal-contact");
        root.append(paragraph);
      }
    });
  } catch (error) {
    root.innerHTML = `<div class="legal-noscript">The legal document could not be displayed. <a href="${source}">Open the approved text version.</a></div>`;
  }
}

renderLegalDocument();
