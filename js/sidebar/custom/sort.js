function search() {
    let input = document.getElementById("inputSearch");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("map");
    let busuness = ul.getElementsByClassName("busuness");
    // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
    for (let i = 0; i < busuness.length; i++) {
        let a = busuness[i].getElementsByClassName("Owner")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1)  {
            /*busuness[i].classList.add('a_a');*/
            busuness[i].style.display = "";
        } else {
            /*busuness[i].classList.remove('a_a');*/
            busuness[i].style.display = "none";
        }
    }
}
document.addEventListener('keyup', search);