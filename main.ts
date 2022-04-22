import { Serie } from "./serie.js";
import { Data } from "./data.js";

const seriesTBody: HTMLElement = document.getElementById('body')!; // Nodo tbody que tiene el id="body"
let avgSeasons : HTMLElement = document.getElementById("avgSeasons")!;
let infoSerie: HTMLElement = document.getElementById('infoSerie')!; //

renderDataInTable(Data);

avgSeasons.innerHTML = seasonsAverageCalculator(Data).toString();

function renderDataInTable(serie: Serie[]): void {
    console.log('Desplegando series');
    serie.forEach(d => {
    let trElement = document.createElement("tr");
    trElement.setAttribute("class", "clickable");
    trElement.onclick = function () {
            loadCard(d);
        };
    trElement.innerHTML = `<td>${d.num}</td>
                           <td><a href="#Card ${d.name}">${d.name}</a></td>
                           <td>${d.channel}</td>
                           <td>${d.seasons}</td>
                           <td>${d.description}</td>
                           <td>${d.linkWebPage}</td>
                           <td>${d.linkImage}</td>`;
                           seriesTBody.appendChild(trElement);
  });
}

function seasonsAverageCalculator(serie: Serie[]) : number {
    let suma : number = 0;
    serie.forEach((serie) => {
        suma += serie.seasons;});
    let promedio : number = suma / (serie.length);
    return promedio;
}

function loadCard(serie: Serie): void {
    infoSerie.innerHTML = `
    <div class="card" style="width: 19rem;">
        <img class="card-img-top" src="${serie.linkImage}">
        <div class="card-body">
            <h5 class="card-title">${serie.name}</h5>
            <div class="card-content">
                <p>${serie.description}</p>
            </div>
            <div class="card-action">
                <a href="${serie.linkWebPage}" target="_blank">${serie.linkWebPage}</a>
            </div>
        </div>
    </div>`;
}