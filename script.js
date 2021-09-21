const list = document.querySelector('ul');
const listElements = document.querySelectorAll('li');
const btn = document.querySelector('button');

let fontSize = 16;

showList = () => {
       list.style.display = "none" ? list.style.display = "block" : "";
       
       
  

    //    for (let i = 0; i < listElements.length; i++) {
     
    //         listElements[i].style.fontSize = fontSize + "px";
    //    }

    listElements.forEach(item => item.style.fontSize = fontSize + "px")
       fontSize++;
      
}

btn.addEventListener("click", showList);
