const list = document.querySelector('ul');
const btn = document.querySelector('button');

showList = () => {
        list.style.display = "none" ? list.style.display = "block" : "już jest gotowe";
}

btn.addEventListener("click", showList);
