let input = document.getElementById("search");
let search = document.querySelector(".searchbox");


input.addEventListener('focus', () => {
    search.classList.add('focsed')
});

input.addEventListener('blur', () => {
    search.classList.remove('focsed')
});