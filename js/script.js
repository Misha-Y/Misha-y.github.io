window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    callBack = document.quarySelector('.callback'),
    btn = document.querySelectorAll('button');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

    modal.forEach(btn => {
        if(btn.target !== callBack){
        btn.addEventListener('click', () => {
            btn.classList.style.add('show');
            btn.classList.style.remove('hidden');
            document.body.style.overflow = '';
        });
        }
    });
})