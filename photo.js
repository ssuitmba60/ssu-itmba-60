const gallery = document.getElementById("gallery");
const images = Array.from(gallery.querySelectorAll("img"));

let loaded = 0;
const total = images.length;

const loadingCount = document.getElementById("loading-count");
loadingCount.textContent = `0 / ${total}`;

const showAfter = Math.max(5, total * 0.3);

// 동시에 로딩할 개수
const CONCURRENT = 10;

let index = 0;

function loadNext() {

    if (index >= total) return;

    const img = images[index];
    const temp = new Image();

    temp.src = img.src;

    temp.onload = () => {

        loaded++;

        const percent = Math.floor((loaded / total) * 100);
        loadingCount.textContent = `${loaded} / ${total} (${percent}%)`;

        if (loaded >= showAfter) {
            document.getElementById("loading").style.display = "none";
            gallery.style.display = "grid";
        }

        loadNext();
    };

    index++;
}

// 최초 병렬 로딩 시작
for (let i = 0; i < CONCURRENT; i++) {
    loadNext();
}

lightGallery(gallery, {
    speed: 300,
    download: true,
    zoom: true
});