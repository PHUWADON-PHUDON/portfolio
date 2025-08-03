const ua = navigator.userAgent;
const h1 = document.querySelector("h1");

if (/android/i.test(ua) || /iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    setTimeout(() => {
        window.location.href = "mobile.html";
    },800);
}
else {
    setTimeout(() => {
        window.location.href = "pc.html";
    },800);
}