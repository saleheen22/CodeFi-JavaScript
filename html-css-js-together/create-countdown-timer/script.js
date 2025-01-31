let count = 10;
document.getElementById('btn-strt').addEventListener('click', ()=> {
    
    for(let i = count; i>-1; i--){
        console.log(i);
        document.getElementById('counter').innerText = i;
    }
    
})