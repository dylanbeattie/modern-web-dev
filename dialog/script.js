const button = document.querySelector("button#customise-button");
button.addEventListener("click", e => {
    const dialog = document.getElementById("customise-dialog");
    dialog.showModal();
});

const borderRadiusInput = document.getElementById('border-radius-input');
borderRadiusInput.addEventListener("input", e => {
    const radius = borderRadiusInput.value + 'px';
    document.documentElement.style.setProperty('--border-radius', radius);    
});


const fontSizeInput = document.getElementById('font-size-input');
fontSizeInput.addEventListener("change", e => {
    const fontSize = fontSizeInput.value + 'px';
    document.documentElement.style.setProperty('--font-size', fontSize);    
});