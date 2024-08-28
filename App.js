const inputBox =document.querySelector('#input-box');
const addBtn = document.querySelector('#add-btn');
const listContainer = document.querySelector('#list-container');

const addTask = () =>{
    if(inputBox.value === ''){
        alert("You Must Write Something . . .")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

let saveData = () =>{
    localStorage.setItem('data',listContainer.innerHTML);
}

let showData = () =>{
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();