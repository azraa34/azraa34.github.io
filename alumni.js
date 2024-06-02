function zoomIn(element) {
    element.querySelector('img').style.transform = 'scale(1.1)';
    element.querySelector('p').style.opacity = '1';
}

function zoomOut(element) {
    element.querySelector('img').style.transform = 'scale(1)';
    element.querySelector('p').style.opacity = '0';
}
