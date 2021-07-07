function navfunc(){
    document.getElementsByClassName('bgVideo-dialog')[0].classList.remove('bg');
    document.getElementsByClassName('bgVideo-phne')[0].classList.add('bg');
    document.getElementsByClassName('bgVideo-phne')[0].classList.remove('not-bg');
    document.getElementsByClassName('bgVideo-dialog')[0].classList.add('not-bg');


    document.getElementById('phne-display').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    src = document.getElementById('phne-display').getAttribute('src');
    
    document.getElementById('phne-display').setAttribute('src',src);
    document.getElementById('dialog').parentNode.classList.add('active');
    document.getElementById('phne').parentNode.classList.remove('active');
    document.getElementById('phne-display').classList.add('container-dialog');
    document.getElementById('dialog-display').classList.remove('container-dialog');
    document.getElementsByTagName('h1')[0].style.color='#F27DBF';
}
function navfuncRev(){
    document.getElementsByClassName('bgVideo-phne')[0].classList.remove('bg');
    document.getElementsByClassName('bgVideo-dialog')[0].classList.add('bg');
    document.getElementsByClassName('bgVideo-dialog')[0].classList.remove('not-bg');
    document.getElementsByClassName('bgVideo-phne')[0].classList.add('not-bg');


    document.getElementById('dialog-display').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    src = document.getElementById('dialog-display').getAttribute('src');

    document.getElementById('dialog-display').setAttribute('src',src);
    document.getElementById('dialog').parentNode.classList.remove('active');
    document.getElementById('phne').parentNode.classList.add('active');
    document.getElementById('phne-display').classList.remove('container-dialog');
    document.getElementById('dialog-display').classList.add('container-dialog');
    document.getElementsByTagName('h1')[0].style.color='#fff';
}


botaoD = document.getElementById('dialog');
botaoD.addEventListener('click',navfunc);
botaoP = document.getElementById('phne');
botaoP.addEventListener('click',navfuncRev);


navfunc();

