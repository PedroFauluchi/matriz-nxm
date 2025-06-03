function handleSubmit(event){
    event.preventDefault();
    let f=document.event.target('filas').value;
    let c=document.event.target('columnas').value;
    let filas=0;
    while(filas<f){
        for(i=0;i<c;i++){
         let div=document.createElement('div');
        event.target.append(div);
        div.classList.add('square');
        div.textContent(i+1);
        div.style.gridTemplate=`repeat(${f}, 1fr)/repeat(${c}, 1fr)`
        }
        filas++;
    }
}
