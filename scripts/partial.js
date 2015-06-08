$.get("_heade.html", function (data) {
    $("#header").html(data);

});
$.get("_menu.html", function (data) {
    $("#menu").html(data);

});
$.get("_footer.html", function (data) {
    $("#footer").html(data);

});
$.get("_formpesquisa.html", function (data) {
    $("#formpesquisa").html(data);

});
$.get("_listaanuncios.html", function (data) {
    $("#listaanuncios").html(data);

});
$.get("_paginador.html", function (data) {
    $("#paginador").html(data);

});
$.get("preencher.html", function (data) {
    $("#scripts").html(data);

});
setTimeout(function () {
   

var url = window.location.href;
var menu = url.substring(url.lastIndexOf('/') + 1);
debugger;
if (menu == "index.html") {
    $("#index").parent().addClass("selected")
}
if (menu == "agenda.html") {
    $("#agenda").parent().addClass("selected")
}
if (menu == "galerias.html") {
    $("#galerias").parent().addClass("selected")
}
if (menu == "videos.html") {
    $("#videos").parent().addClass("selected")
}
if (menu == "noticias.html") {
    $("#noticias").parent().addClass("selected")
}
}, 1000);