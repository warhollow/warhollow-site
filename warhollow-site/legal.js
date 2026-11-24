function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function appendTextWithLinks(element, text) {
  const linkPattern = /([\w.+-]+@[\w.-]+\.[A-Za-z]{2,}|\b(?:https?:\/\/)?(?:www\.)?warhollow\.com\b)/g;
  let cursor = 0;
  for (const match of text.matchAll(linkPattern)) {
    element.append(document.createTextNode(text.slice(cursor, match.index)));
    const link = document.createElement("a");
    link.href = match[0].includes("@")
      ? `mailto:${match[0]}`
      : match[0].startsWith("http") ? match[0] : `https://${match[0]}`;
    link.textContent = match[0];
    element.append(link);
    cursor = match.index + match[0].length;
  }
  element.append(document.createTextNode(text.slice(cursor)));
}

function isSubheading(line) {
  return line.length <= 90
    && /^[A-Z][A-Za-z0-9’'(), &/-]+$/.test(line)
    && !/[.:;!?]$/.test(line);
}

function addSectionHeading(root, toc, line) {
  const heading = document.createElement("h2");
  heading.id = slugify(line);
  heading.textContent = line;
  root.append(heading);
  if (!toc) return;
  const link = document.createElement("a");
  link.href = `#${heading.id}`;
  link.textContent = line;
  toc.append(link);
}

async function renderLegalDocument() {
  const root = document.querySelector("[data-legal-document]");
  if (!root) return;
  const source = root.dataset.source;
  const toc = document.querySelector("[data-legal-toc]");

  try {
    const response = await fetch(source);
    if (!response.ok) throw new Error(`Unable to load ${source}`);
    const lines = (await response.text())
      .replace(/^\uFEFF/, "")
      .replace(/\r\n/g, "\n")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    // The page hero already presents the document title and effective date.
    const content = lines.slice(2);
    for (let index = 0; index < content.length; index += 1) {
      const line = content[index];
      if (/^\d+\.\s+\S/.test(line)) {
        addSectionHeading(root, toc, line);
        continue;
      }
      if (line.startsWith("•")) {
        const list = document.createElement("ul");
        while (index < content.length && content[index].startsWith("•")) {
          const item = document.createElement("li");
          appendTextWithLinks(item, content[index].replace(/^•\s*/, ""));
          list.append(item);
          index += 1;
        }
        index -= 1;
        root.append(list);
        continue;
      }
      if (isSubheading(line)) {
        const heading = document.createElement("h3");
        heading.textContent = line;
        root.append(heading);
        continue;
      }

      const paragraph = document.createElement("p");
      if (line === line.toUpperCase() && line.length > 80) paragraph.className = "legal-caps";
      if (/^(Email|Privacy Contact):/.test(line)) paragraph.classList.add("legal-contact-line");
      appendTextWithLinks(paragraph, line);
      root.append(paragraph);
    }
  } catch (error) {
    root.innerHTML = `<div class="legal-noscript">The legal document could not be displayed. <a href="${source}">Open the approved text version.</a></div>`;
  }
}

renderLegalDocument();
