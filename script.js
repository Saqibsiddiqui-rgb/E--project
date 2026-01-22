function downloadPDF1() {
    const element = document.querySelector(".mdl-1");
    html2pdf().from(element).save("school-info.pdf");
}
function downloadPDF2() {
    const element = document.querySelector(".mdl-2");
    html2pdf().from(element).save("school-info.pdf");
}
function downloadPDF3() {
    const element = document.querySelector(".mdl-3");
    html2pdf().from(element).save("school-info.pdf");
}
function downloadPDF4() {
    const element = document.querySelector(".mdl-4");
    html2pdf().from(element).save("school-info.pdf");
}
function downloadPDF5() {
    const element = document.querySelector(".mdl-5");
    html2pdf().from(element).save("school-info.pdf");
}
function downloadPDF6() {
    const element = document.querySelector(".mdl-6");
    html2pdf().from(element).save("school-info.pdf");
}


    let selectedboard = document.getElementById("boardFilter");
    let selectedfaci = document.getElementById("facilityFilter");
    let selectedloc = document.getElementById("locationFilter");
    let box = document.querySelector(".srch-result");

    let cards = document.querySelectorAll(".rslt");

function searchSchool() {

        let board = selectedboard.value;
        let faci = selectedfaci.value;
        let loc = selectedloc.value;
    cards.forEach(card => {

        let cardBoard = card.getAttribute("data-board");
        let cardFaci = card.getAttribute("data-faci");
        let cardloc = card.getAttribute("data-location");

        if(board === cardBoard || faci === cardFaci || loc === cardloc) {
            card.style.display = "block";
            box.style.display = "block";
        }else{
            card.style.display = "none";
            box.style.display = "none";
        }

        if(board !== cardBoard){
            card.style.display = "none";
            box.style.display = "none";
        }
        else if(loc !== cardloc){
            card.style.display = "none";
            box.style.display = "none";
        }
        else{
            card.display.style = "block";
            box.display.style = "block";
        }
    })
        
}