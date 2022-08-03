function opGerar(){
    const codColor = document.getElementById('select').value;


    if(codColor === 'azul') document.getElementById('color').style.backgroundColor = '#0000ff';
    if(codColor === 'vermelho') document.getElementById('color').style.backgroundColor = '#ff0000';  
    if(codColor === 'verde') document.getElementById('color').style.backgroundColor = '#00ff00';  
    if(codColor === 'amarelo') document.getElementById('color').style.backgroundColor = '#ffff00';  


       

    
    
    //document.documentElement.style.setProperty('--bg color', `#$(colorSwitch)`);


}
document.getElementById('select').addEventListener('change', opGerar);
