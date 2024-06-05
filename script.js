let tdItem = document.getElementById('task');
let ul = document.getElementById('list');

tdItem.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        let task = tdItem.value;
        let li = document.createElement('li');
        li.innerHTML = task;
        li.onclick = function(){
            li.style.textDecoration = 'line-through';
        }
        ul.appendChild(li);
        tdItem.value = '';
    }
});
