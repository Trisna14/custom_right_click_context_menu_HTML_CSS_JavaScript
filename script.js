const contextMenu = document.querySelector('.wrapper');
const shareMenu = document.querySelector('.share-menu');

document.addEventListener('contextmenu', e => {
    console.log('right btn');

    e.preventDefault(); // mematikan aksi bawaan

    let x = e.offsetX;
    let y = e.offsetY;
    // console.log(x);
    // console.log(y);
    console.log(shareMenu.offsetWidth); // lebar element share-menu

    let winWidth = window.innerWidth,
        winHeight = window.innerHeight,
        cmWidth = contextMenu.offsetWidth,
        cmHeight = contextMenu.offsetHeight;

    if (x > (winWidth -cmWidth - shareMenu.offsetWidth)) {
        shareMenu.style.left = '-200px';
    } else {
        shareMenu.style.left = '';
        shareMenu.style.right = '-200px';
    }

    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

    // console.log(x);
    // console.log(y);
    // console.log(cmWidth +'lebar contextmenu');
    // console.log(winWidth + 'lebar window');
    // console.log(winHeight);

    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = y + 'px';

    contextMenu.style.visibility = 'visible';
});