const gallery = document.getElementById("gallery");

const folder = "./2026-sebu/";
const prefix = "sebu_";
const total = 583; // 사진 개수

for (let i = 1; i <= total; i++) {

    const num = String(i).padStart(5, "0");

    const file = folder + prefix + num + ".jpg";

    const a = document.createElement("a");
    a.href = file;

    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = file;

    a.appendChild(img);
    gallery.appendChild(a);
}

document.getElementById("loading").style.display = "none";

lightGallery(gallery, {
    selector: 'a',
    speed: 300,
    download: true,
    zoom: true
});