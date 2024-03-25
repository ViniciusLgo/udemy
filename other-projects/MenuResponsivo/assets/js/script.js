function menuShow() {
    let menu = document.querySelector('.mobile-menu');
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menu.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}
