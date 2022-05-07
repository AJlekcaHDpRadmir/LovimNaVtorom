// скрипт за инфу по бизам
const users = Array.from(document.querySelectorAll('.blip'));
const triggers = users.map(item => item.querySelector('.trigger')); 

triggers.forEach((item, i) => { // проходимся по каждому тригеру
  item.addEventListener('click', (e) => { // ставим на него слушатель события клика
    users[i].classList.toggle('active'); // что-то делаем   
  });
});

function CloseMenuBusiness() {
    const busuness = Array.from(document.querySelectorAll('.busuness'));

    busuness.forEach((item, i) => { // проходимся по каждому тригеру
        busuness[i].classList.toggle('active_button_busuness'); // что-то делаем   
    });
}