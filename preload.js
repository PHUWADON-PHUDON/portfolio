const ua = navigator.userAgent;

if (/android/i.test(ua) || /iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    setTimeout(() => {

    },800);
}
else {
    setTimeout(() => {
        window.location.href = "index.html";
    },800);
}