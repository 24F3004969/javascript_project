const h1 = document.querySelector("body");

// Optional: offset so the cursor isn't on top of the text
const offsetX = 10;
const offsetY = 10;

// Move with mouse
window.addEventListener("mousemove", (e) => {
    // e.clientX/Y are relative to viewport (good since we used position: fixed)
    const x = e.clientX + offsetX;
    const y = e.clientY + offsetY;
    h1.style.transform = `translate(${x}px, ${y}px)`;
}, { passive: true });

