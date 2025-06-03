function handleSubmit(event){
    event.preventDefault();
    let f=document.querySelector('#filas').value;
    let c=document.querySelector('#columnas').value;
    let filas=0;
    while(filas<f){
        for(i=0;i<c;i++){
         let div=document.createElement('div');
        event.target.append(div);
        div.classList.add('square');
        }
        filas++;
    }
}