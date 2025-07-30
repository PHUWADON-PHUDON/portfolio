const ua = navigator.userAgent;
const h1 = document.querySelector("h1");

if (/android/i.test(ua) || /iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    setTimeout(() => {
        h1.innerHTML = "phone"
    },800);
    console.log(1)
}
else {
    setTimeout(() => {
        h1.innerHTML = "pc"
    },800);
    console.log(2)
}