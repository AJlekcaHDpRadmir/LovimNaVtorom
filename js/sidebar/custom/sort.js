function search() {
        var busuness = Array.from(document.querySelectorAll('.busuness'));
        var owner = busuness.map(item => item.querySelector('.Owner').innerHTML);
        let input = document.getElementById("inputSearch");
        let filter = input.value.toUpperCase();
        
        owner.forEach(function(item, i) {
            if (item === filter) {
                busuness[i].style.display = "";
            } else {
                busuness[i].style.display = "none";
                console.log(input)
                console.log(typeof input)
                console.log(typeof owner);
            }
        });
    }
document.addEventListener('keyup', search);