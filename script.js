const tools = [

  {
    name: "Flight Planning Tool",
    description: "Simple tools for planning drone missions and checking flight parameters.",
    image: "images/droneoverlap.png",
    link: "https://droneoverlap.netlify.app"
  },
{
    name: "KML Splitter",
    description: "Split multi-polygon KML files into individual pieces.",
    image: "images/KMLSplitter.png",
    link: "https://thekmlsplitter.netlify.app"
  },
  {
    name: "KML / GeoJSON Converter",
    description: "Convert between KML and GeoJSON formats.",
    image: "images/KMLGeojson.png",
    link: "https://geojsonkml.netlify.app"
  },
  {
    name: "GLB Viewer",
    description: "View and inspect 3D models directly in your browser.",
    image: "images/GLB2.png",
    link: "https://glb2viewer.netlify.app"
  },
  {
    name: "Markdown to PDF Converter",
    description: "Convert Markdown files to PDF format.",
    image: "images/MarkdownToPDF.png",
    link: "https://mdtpdf.netlify.app"
  },
];

const toolsGrid = document.querySelector(".tools-grid");

tools.forEach(tool => {
  const card = document.createElement("div");

  card.className = "tool-card";

  card.innerHTML = `
   <div class="tool-preview">
  ${
    tool.image
      ? `<img src="${tool.image}" alt="${tool.name}">`
      : tool.name
  }
</div>

    <h3>${tool.name}</h3>

    <p>${tool.description}</p>

    <a
      class="tool-button"
      href="${tool.link}"
      target="_blank"
      rel="noopener noreferrer"
    >
      Launch Tool
    </a>
  `;

  toolsGrid.appendChild(card);
});