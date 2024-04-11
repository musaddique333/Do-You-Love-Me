function clickYesButton() {
    var content = '<p id="second-p" style="font-size: 24px; color: #FF5678;">I love you too Simran</p>';
    content += '<img id="second-img" src="https://media.tenor.com/9uprlTXW3kUAAAAi/cute-love.gif" alt="Love" style="margin-top: 20px;">';
    document.body.innerHTML = content;
}


//move button on hover
function hoverNoButton() {
    // random from 0 to 1, then multiply with screen size
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    document.getElementById('no-button').style.left = x + 'px';
    document.getElementById('no-button').style.top = y +'px';
    
}

function touchNoButton() {
    // Ensuring compatibility with both desktop and mobile by checking if touch is supported
    if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
        let x = Math.random() * (window.innerWidth - this.offsetWidth);
        let y = Math.random() * (window.innerHeight - this.offsetHeight);
        
        document.getElementById('no-button').style.position = 'absolute';
        document.getElementById('no-button').style.left = x + 'px';
        document.getElementById('no-button').style.top = y + 'px';
    }
}

document.getElementById('no-button').ontouchstart = touchNoButton;

function handleNoButtonEvent() {
    let x = Math.random() * (window.innerWidth - this.offsetWidth);
    let y = Math.random() * (window.innerHeight - this.offsetHeight);
    
    document.getElementById('no-button').style.position = 'absolute';
    document.getElementById('no-button').style.left = x + 'px';
    document.getElementById('no-button').style.top = y + 'px';
}

// Setting up both events
const noButton = document.getElementById('no-button');
noButton.onmouseover = handleNoButtonEvent;
noButton.ontouchstart = handleNoButtonEvent;
