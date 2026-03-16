const gallery = document.getElementById("gallery");
const images = gallery.querySelectorAll("img");

let loaded = 0;
const total = images.length;
const percent = Math.floor((loaded / total) * 100);
const loadingCount = document.getElementById("loading-count");
//loadingCount.textContent = `0 / ${total}`;
loadingCount.textContent = `${loaded} / ${total} (${percent}%)`;

const showAfter = Math.max(5, total * 0.3);

images.forEach(img => {
    const temp = new Image();
    temp.src = img.src;

    temp.onload = () => {
        loaded++;

        // 로딩 숫자 표시
        loadingCount.textContent = `${loaded} / ${total}`;

        if (loaded >= showAfter) {
            document.getElementById("loading").style.display = "none";
            gallery.style.display = "grid";
        }
    }
});