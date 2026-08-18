const tools = [
  {
    name: "GLB Viewer",
    description: "View and inspect 3D models directly in your browser.",
    link: "#"
  },
  {
    name: "Flight Planning Tool",
    description: "Simple tools for planning drone missions and checking flight parameters.",
    link: "#"
  },
{
    name: "KML Splitter",
    description: "Split multi-polygon KML files into individual pieces.",
    link: "#"
  },
  {
    name: "KML / GeoJSON Converter",
    description: "Convert between KML and GeoJSON formats.",
    image: "images/KMLGeojson.png",
    link: "#"
  }
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

    <a class="tool-button" href="${tool.link}">
      Launch Tool
    </a>
  `;

  toolsGrid.appendChild(card);
});