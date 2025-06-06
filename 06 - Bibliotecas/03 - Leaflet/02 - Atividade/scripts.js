let mercados = [];
let postos = [];
let restaurantes = [];

fetch("pontos.json")
.then((response) => {
    if (!response.ok) {
        throw new Error("Erro ao carregar Pontos");
    }
    return response.json();
})
.then((pontos) => {
    let icons = {
        mercado: L.icon({
            iconUrl: "./img/mercado.png",
            iconSize: [30, 30],
        }),
        restaurante: L.icon({
            iconUrl: "./img/restaurante.png",
            iconSize: [30, 30],
        }),
        posto: L.icon({
            iconUrl: "./img/posto.png",
            iconSize: [30, 30],
        }),
    };
    
    pontos.forEach((ponto) => {
        let marker = L.marker([ponto.lat, ponto.lng], {
            icon: icons[String(ponto.categoria)],
        }).bindPopup(`
        <b>${ponto.nome}</b>`);
        if (ponto.categoria === "restaurante")
        return restaurantes.push(marker);
    if (ponto.categoria === "mercado") return mercados.push(marker);
    if (ponto.categoria === "posto") return postos.push(marker);
});


let LayerMercados = L.layerGroup(mercados)
let LayerRestaurantes = L.layerGroup(restaurantes)
let LayerPostos = L.layerGroup(postos)

const map = L.map("map", {
  layers: [LayerMercados, LayerRestaurantes, LayerPostos  ]
}).setView(["-26.915", "-49.070"], 14);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  ).addTo(map);

  let layerControl = L.control.layers().addTo(map)

  layerControl.addOverlay(LayerPostos, "postos");
  layerControl.addOverlay(LayerRestaurantes, "restaurantes");
  layerControl.addOverlay(LayerMercados, "mercados");
})
.catch((error) => {
  console.log();
  console.log("deu ruim", error);
});
