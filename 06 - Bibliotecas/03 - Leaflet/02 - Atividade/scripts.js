fetch('pontos.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erro ao carregar Pontos");
        }
        return response.json();
    })
    .then((pontos) => {
        if (!pontos) throw new Error("nenhum dado carregado")
        load(pontos)
    })
    .catch((error) => {
        console.log("deu ruim", error);
    });

let map;

function load(pontos) {
    let mercados = [];
    let postos = [];
    let restaurantes = [];
    let marcadores = [];

    let icons = {
        mercado: L.icon({
            iconUrl: "./img/mercado.png",
            iconSize: [60, 60],
        }),
        restaurante: L.icon({
            iconUrl: "./img/restaurante.png",
            iconSize: [60, 60],
        }),
        posto: L.icon({
            iconUrl: "./img/posto.png",
            iconSize: [60, 60],
        }),
        marcador: L.icon({
            iconUrl: "./img/marcador.png",
            iconSize: [60, 60],
        }),
    };

    pontos.forEach((ponto) => {
        if (!ponto.categoria) ponto.categoria = "marcador"

        console.log(ponto.categoria)

        let marker = L.marker([ponto.lat, ponto.lng], {
            icon: icons[String(ponto.categoria)],
        }).bindPopup(`
        <b>${ponto.nome}</b>`);

        if (ponto.categoria === "restaurante") restaurantes.push(marker);
        if (ponto.categoria === "mercado") mercados.push(marker);
        if (ponto.categoria === "posto") postos.push(marker);

        return marcadores.push(marker)
    });


    let LayerMercados = L.layerGroup(mercados)
    let LayerRestaurantes = L.layerGroup(restaurantes)
    let LayerPostos = L.layerGroup(postos)
    let layerMarkers = L.layerGroup(marcadores)

    if (map) map.remove()
    map = L.map("map", {
        layers: [LayerMercados, LayerRestaurantes, LayerPostos, layerMarkers]
    }).setView(["-26.915", "-49.070"], 14);

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ).addTo(map);

    let layerControl = L.control.layers().addTo(map)

    layerControl.addOverlay(layerMarkers, "marcadores");
    layerControl.addOverlay(LayerPostos, "postos");
    layerControl.addOverlay(LayerRestaurantes, "restaurantes");
    layerControl.addOverlay(LayerMercados, "mercados");
}


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const file = document.querySelector('#file').files[0]

    if (!file) return console.log('nenhum arquivo carregado')

    const reader = new FileReader()

    reader.onload = () => {
        const content = reader.result;

        if (file.name.endsWith(".json")) {
            try {
                const json = JSON.parse(content);
                load(json);
            } catch (e) {
                console.log(e, "Erro ao processar JSON.")
            }
        } else if (file.name.endsWith(".xml")) {
            applyXml(content);
        } else {
            alert("Arquivo inválido. Use apenas .json ou .xml");
        }
    }

    reader.readAsText(file)
})