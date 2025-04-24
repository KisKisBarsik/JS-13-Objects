let biler = [

    {
        Model: "Ferrari F40",
        Kategori: "Sport bil",
        Fart: "324 km/t",
        Pris: "1 500 000 - 2 500 000 NOK",
        Bildet: "https://www.amalgamcollection.com/cdn/shop/files/Wideedit_44fe4a82-c08b-449e-87e3-5380099e6329_grande.jpg?v=1706017250"

    },

    {

        Model: "Porsche 911",
        Kategori: "Sport bil",
        Fart: "250-290 km/t",
        Pris: "400 000 - 1 200 000 NOK",
        Bildet: "https://images-porsche.imgix.net/-/media/0B3F90A75B0141FF8BED694C3C1A323B_7C02423B08CB49C8801E208B2D16A51E_CZ25W18OX0004-911-gt3-white-side?w=2560&h=1440&q=45&crop=faces%2Centropy%2Cedges&auto=format"

    },

    {

        Model: "Lamborghini Countach",
        Kategori: "Sport bil",
        Fart: "295 km/t",
        Pris: "2 000 000 - 5 000 000 NOK",
        Bildet: "https://hips.hearstapps.com/hmg-prod/images/lamborghini-countach-lpi-800-4-111-1628616858.jpg"

    },

    {

        Model: "Porsche 911 Turbo S",
        Kategori: "Sport bil",
        Fart: "330 km/t",
        Pris: "2 500 000 - 3 000 000 NOK",
        Bildet: "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmHlCgI7Zl2dioCLafQDcFGDTMYnfurnN65yPewFb2CvNzxUGqA7fQrmeOJUPYDImTB8VuyY0oVk0DBRl2vzpQNqjdtAsvyJ5I"

    },

    {

        Model: "McLaren 720S",
        Kategori: "Sport bil",
        Fart: "341 km/t",
        Pris: "3 500 000 - 4 500 000 NOK",
        Bildet: "https://mclaren.scene7.com/is/image/mclaren/720S-Coupe_hero:crop-16x9?wid=1920&hei=1080"

    }

]

function søkSubmit() {
 
    console.log(biler);
 
    var søkSystem = document.querySelector(".inputForBiler").value
 
    var displayNone = document.querySelector(".displayNone")
 
    var bildetAvBil = document.querySelector(".bildetAvBil")
    var modelP = document.querySelector(".model")
    var kategoriP = document.querySelector(".kategori")
    var fartP = document.querySelector(".fart")
    var prisP = document.querySelector(".pris")
 
    var displayFeil = document.querySelector(".displayFeil")
 
    var funnet = false;
    displayNone.style.display = "none";
    displayFeil.style.display = "none";
 
    biler.forEach(element => {
 
        if (søkSystem === element.Model) {
            funnet = true;
            displayNone.style.display = "block"
 
            bildetAvBil.src = element.Bildet
            modelP.textContent = element.Model
            kategoriP.textContent = element.Kategori
            fartP.textContent = element.Fart
            prisP.textContent = element.Pris
           
        }
 
    });
    if (funnet === false) {
        displayFeil.style.display = "block"
        displayNone.style.display = "none"
    }
}

var searchSystem = document.querySelector(".inputForBiler")

searchSystem.addEventListener('keypress', function(event){

    if (event.key === 'Enter') {
        
        console.log("test");
        
        søkSubmit();
        
    }

})