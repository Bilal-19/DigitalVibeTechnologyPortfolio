import { portfolioImages, serviceData, skillIconImages, pricePackage, frequentlyAskedQA } from "./data.mjs";


const serviceEl = document.getElementById("service")
const skillEl = document.getElementById("skills-icon")
const portfolioEl = document.getElementById("portfolio")
const displayYearEl = document.getElementById("year")
const priceEl = document.getElementById("price-package")
const FAQ_El = document.getElementById("accordionFAQ")

serviceData.map((item) => {
    serviceEl.innerHTML +=
        `
    <div class="col-md-4" id="service-el">
        <div class="card card-size">
            <img src="${item.imgAddress}" class="card-img-top set-img-size" alt="frontend_thumbnail">
            <div class="card-body">
                <h5 class="card-title">${item.titleText}</h5>
                <p class="card-text">Web Technologies: ${item.titleDescription}</p>
            </div>
        </div>
    </div>
    `
})

skillIconImages.map((key, val) => {
    skillEl.innerHTML += `<img src="./media/Icons/${key}" alt="${key}" class="img-icon m-3">`
})

portfolioImages.map(val => {
    portfolioEl.innerHTML +=
        `
    <div class="col-md-6 mx-auto mt-2">
        <img src="./media/${val.imageSrc}" class="img-fluid shadow portfolio-img" alt="${val.imageSrc}">
        <h5 class="text-center mt-1 text-light mb-5">${val.displayText}</h5>
    </div>
    `
})


displayYearEl.innerText += new Date().getFullYear();

pricePackage.map(item => {
    priceEl.innerHTML +=
        `
      <div class="col-md-4">
        <div class="card card-package shadow" style="background-color: #03586d; color: white;">
            <h4 class="text-center mt-2">${item.packageName}</h4>
            <p class="price-style">Price: ${item.packagePrice}</p>
            <div class="card-body">
                <p class="card-text fw-bold">What's Included ?</p>
                        <ul class="list-group">
                        ${item.packageFeatures.map(val =>
            `
                            <li class="list-group-item"><i class="fa-solid fa-circle-check" style="color: #06bc1b;"></i>
                                ${val}
                            </li>
                           `
        ).join('')}
                           
                        </ul>
                    </div>
                </div>
            </div>
    `
})

frequentlyAskedQA.map(item => {
    FAQ_El.innerHTML +=
        `
        <div class="accordion-item mb-2 shadow" style="border: none;">
            <h2 class="accordion-header ">
                <button class="accordion-button bg-light" style="color: #03586d" type="button" data-bs-toggle="collapse" data-bs-target="#${item.collapseID}" aria-expanded="true" aria-controls="${item.collapseID}">
                   <b >${item.questionText}</b>
                </button>
            </h2>
            <div id="${item.collapseID}" class="accordion-collapse collapse hide" data-bs-parent="#accordionFAQ">
                <div class="accordion-body">${item.answerText}</div>
            </div>
        </div>
    `
})

document.addEventListener("contextmenu", (event) => event.preventDefault())