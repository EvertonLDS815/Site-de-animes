let headerPage = document.getElementById("uk-header");
let pagina = document.getElementById("pagina");
let faws = document.getElementsByClassName("faws");
let titlePage = document.getElementById("uk-name");
let retornarMenu = document.getElementById("return-page");

function removeMenu(idTab) {
    let idPage = document.getElementById(idTab);
    retornarMenu.style.display = 'none';
    if (headerPage.style.marginLeft === '200px') {
        headerPage.style.marginLeft = '0';
        for(i = 0; i < faws.length; i++) {
            faws[i].style.marginLeft = '0px';
            faws[i].style.zIndex = '1';
        };
        idPage.style.zIndex = '3';
    } else {
        addMenu()
    }
}
function addMenu() {
    headerPage.style.marginLeft = '200px'
    retornarMenu.style.display = 'block';
    for(i = 0; i < faws.length; i++) {
        faws[i].style.marginLeft = '200px';
    }
}
function removeByPage() {
    headerPage.style.marginLeft = '0';
    for(i = 0; i < faws.length; i++) {
        faws[i].style.marginLeft = '0';
    }
    retornarMenu.style.display = 'none';
}
/* function addMenu() {
    headerPage.style.marginLeft = '200px';
    for(i = 0; i < faws.length; i++) {
        faws[i].style.marginLeft = '200px';
    }
    retornarMenu.style.display = 'block';
}
function removeMenu(idTab, contentName) {
    headerPage.style.marginLeft = '0';
    let idPage = document.getElementById(idTab);
    for(i = 0; i < faws.length; i++) {
        faws[i].style.marginLeft = '0px';
        faws[i].style.zIndex = '1';
    };
    idPage.style.zIndex = '3';
    titlePage.innerHTML = contentName;
    retornarMenu.style.display = 'none';
}
*/