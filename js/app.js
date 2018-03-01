
const galleryImages = document.getElementById("gallery");


const addtagFigure = gallery => {
const images = gallery.getElementsByTagName("img");
//llamando a las los elementos del array en este caso las imagenes
const arrayImages = Array.prototype.slice.call(images);
arrayImages.forEach(function (img) {//Iterando sobres las imagenes
//Añadiendo atributos
const imgSRC = img.getAttribute("src");
const imgALT = img.getAttribute("alt");
//Usando teplate String para concatenar los atributos
let figureTemplate = `<figure><img src=${imgSRC}></img><figcaption>${imgALT}</figcaption></figure>`;
img.outerHTML = figureTemplate;
});
};
addtagFigure(galleryImages);
