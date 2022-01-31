const contextMenu = document.querySelector('.wrapper');

document.addEventListener('contextmenu', e => {
    console.log('right btn');

    e.preventDefault(); // mematikan aksi bawaan

    let x = e.offsetX;
    let y = e.offsetY;
    console.log(x);
    // console.log(y);

    let winWidth = window.innerWidth,
        winHeight = window.innerHeight,
        cmWidth = contextMenu.offsetWidth,
        cmHeight = contextMenu.offsetHeight;

    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

    console.log(x);
    // console.log(y);
    console.log(cmWidth +'lebar contextmenu');
    console.log(winWidth + 'lebar window');
    // console.log(winHeight);

    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = y + 'px';

    contextMenu.style.visibility = 'visible';
});