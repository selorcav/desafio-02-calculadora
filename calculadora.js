init= ()=>{

    const resultado = document.getElementById('resultado');
    const reset = document.getElementById('reset');
    const suma = document.getElementById('suma');
    const resta = document.getElementById('resta');
    const multiplicacion = document.getElementById('multiplicacion');
    const division = document.getElementById('division');
    const igual = document.getElementById('igual');
    const uno = document.getElementById('uno');
    const dos = document.getElementById('dos');
    const tres = document.getElementById('tres');
    const cuatro = document.getElementById('cuatro');
    const cinco = document.getElementById('cinco');
    const seis = document.getElementById('seis');
    const siete = document.getElementById('siete');
    const ocho = document.getElementById('ocho');
    const nueve = document.getElementById('nueve');
    const cero = document.getElementById('cero');

    uno.onclick = (e) =>{
        resultado.innerHTML = resultado.innerHTML + '1';
    }
    dos.onclick = (e) =>{
        resultado.innerHTML = resultado.innerHTML + '2';
    }
    tres.onclick = (e) =>{
        resultado.innerHTML = resultado.innerHTML + '3';
    }
    cuatro.onclick = (e) =>{
        resultado.innerHTML = resultado.innerHTML + '4';
    }
    cinco.onclick = (e) =>{
        resultado.innerHTML = resultado.innerHTML + '5';
    }
    seis.onclick = (e) =>{
        resultado.innerHTML = resultado.innerHTML + '6';
    }
    siete.onclick = (e) =>{
        resultado.innerHTML = resultado.innerHTML + '7';
    }
    ocho.onclick = (e) =>{
        resultado.innerHTML = resultado.innerHTML + '8';
    }
    nueve.onclick = (e) =>{
        resultado.innerHTML = resultado.innerHTML + '9';
    }
    cero.onclick = (e) =>{
        resultado.innerHTML = resultado.innerHTML + '0';
    }

    reset.onclick = (e) =>{
        resetear();
    }

    suma.onclick = (e) =>{
        operandoa = resultado.innerHTML;
        operacion = '+';
        limpiar();
    }
    resta.onclick = (e) =>{
        operandoa = resultado.innerHTML;
        operacion = '-';
        limpiar();
    }
    multiplicacion.onclick = (e) =>{
        operandoa = resultado.innerHTML;
        operacion = '*';
        limpiar();
    }
    division.onclick = (e) =>{
        operandoa = resultado.innerHTML;
        operacion = '/';
        limpiar();
    }

    igual.onclick = (e) =>{
        operandob = resultado.innerHTML;
        resolver();
    }
}

limpiar= ()=>{
    resultado.innerHTML = '';
}

resetear= ()=>{
    resultado.innerHTML = '';
    operandoa = 0;
    operandob = 0;
    operacion = '';
}

resolver= ()=>{
    let res = 0;
    switch(operacion){
        case '+':
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case '-':
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case '*':
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case '/':
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.innerHTML = res;
}