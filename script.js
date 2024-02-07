function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var button = document.getElementById('noButton');
    var style = window.getComputedStyle(button);
    var marginLeft = parseFloat(style.marginLeft);
    var marginRight = parseFloat(style.marginRight);
    var marginTop = parseFloat(style.marginTop);
    var marginBottom = parseFloat(style.marginBottom);

    var x = Math.random() * (window.innerWidth - button.offsetWidth - marginLeft - marginRight);
    var y = Math.random() * (window.innerHeight - button.offsetHeight - marginTop - marginBottom);

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '💗';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 5000);
}
  
setInterval(createHeart, 250);