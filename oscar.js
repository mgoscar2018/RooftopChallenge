const {obtenerToken, obtenerBloques, check, finalCheck} = require("./challenge");

const EMAIL = 'mgoscar@gmail.com';

const probando = async() => {
    console.log('Pruebas Oscar');
    let token = await obtenerToken(EMAIL);
    console.log ('['+EMAIL+'] token=> '+token);

    let bloques= await obtenerBloques(token);
    console.log ('Bloques desordenados:\n'+bloques);

    //console.log('Encontrado=>'+await revisarConsecutivos(bloques[0],bloques[3],token));
    console.log ('Ordenando bloques, por favor espere...');
    let resultado = await check(bloques,token);
    console.log ('Bloques ORDENADOS:\n'+resultado);
    
    const resp = await finalCheck(resultado.join(''),token);
    console.log ('Validación de ordenación => '+resp);
}

probando();