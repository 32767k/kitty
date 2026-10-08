let iframe = document.getElementById('iframe');
let fullscreenButton = document.getElementById('fullscreen');
let aboutBlankButton = document.getElementById('aboutBlank');

function fullscreen() {
    if (!document.fullscreenElement) {
        iframe.requestFullscreen();
    } else {
        iframe.exitFullscreen();
    }
}

fullscreenButton.addEventListener('click', fullscreen);

document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        iframe.style = 'border-radius: 0px;';
    } else {
        iframe.style = 'border-radius: 15px;';
    }
})

function aboutBlank() {
    let blank = window.open('about:blank', "_blank");

    blank.document.body.style.padding = '0';
    blank.document.body.style.margin = '0';
    blank.document.body.style.overflow = 'hidden';

    let newFrame = blank.document.createElement('iframe');

    newFrame.src = iframe.src;
    newFrame.style.width = '100vw';
    newFrame.style.height = '100vh';
    newFrame.style.border = 'none';
    newFrame.style.margin = 'none';
    newFrame.style.display = 'block';

    blank.document.body.appendChild(newFrame);
}

aboutBlankButton.addEventListener('click', aboutBlank);