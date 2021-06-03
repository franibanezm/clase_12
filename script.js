//El scroll
var secundario = document.getElementById("secundario").offsetHeight;
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);

    if (scroll > secundario + 10) {
        document.getElementById("principal").classList.add("fixed-top");
    } else {
        document.getElementById("principal").classList.remove("fixed-top");
    }
});
//La API
fetch("https://sheet.best/api/sheets/c607e0db-d28c-4002-b7b1-182073500afc")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    var portfolio = data;
    portfolio.forEach(function (trabajo) {
        if (trabajo.tipo.includes("graphic")) {
        especialidad = ' data-especialidad="grafica" ';
        } else {
        especialidad = ' data-especialidad="otra" ';
        }
        document.getElementById("portfolio").innerHTML +=
            '<div class="col-sm-6 col-lg-4 col-xxl-3"'+
            especialidad
            +'><div class="card shadow-sm"><img src="' +
            trabajo.image +
            '" class="card-img-top" alt="' +
            trabajo.title +
            '"><div class="card-body"><h5 class="card-title">' +
            trabajo.title +
            '</h5><p class="card-text">' +
            trabajo.text +
            "</p></div></div></div>";
        });
    })



.catch((err) => {
    document.querySelector('section').innerHTML = '<div class= error>   Lo siento, ha habido un error.</div><div class=error2>  Por favor, vuelve a intentarlo.</div>';
    console.log("Pucha, algo falló", err);
});