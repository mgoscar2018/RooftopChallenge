const axios = require("axios");

const API_GET_TOKEN = 'https://rooftop-career-switch.herokuapp.com/token?email=';
const API_GET_BLOCK = 'https://rooftop-career-switch.herokuapp.com/blocks?token=';
const API_CHECK = 'https://rooftop-career-switch.herokuapp.com/check?token=';

const obtenerToken = async(email) => {
    let res = await axios.get(API_GET_TOKEN+email);  
    return res.data.token;    
}

const obtenerBloques = async(token) => {
  const resp = await axios.get(API_GET_BLOCK+token);
  const {data} = resp.data;
  return data;
}

const revisarConsecutivos = async(bloque1,bloque2,token) => {  
  const resp = await axios.post(API_CHECK+token,{
    blocks: [bloque1,bloque2]
    });
  const {message} = resp.data;  
  return message;    
}

const finalCheck = async(cadenaOrdenada,token) => {
  //let body = {"encoded": cadenaOrdenada };
  const resp = await axios.post(API_CHECK+token, {
      encoded: cadenaOrdenada
      });
    const {message} = resp.data;  
  return message;    
}

const check = async(blocks, token) => {
  //Desarrollar aquí dentro el algoritmo que ordene los bloques, usando
  // la API "/check".
  //IMPORTANTE: observar que está recibiendo un parámetro "token". El
  // mismo es para usarlo en la llamada a la API.
  
  let arrayOrdenado = [];
  let b1 = blocks.splice(0,1); 
  arrayOrdenado.push(b1);    
  
  do {
      let encontrado = false;   
      process.stdout.write("*");     
      for(let i=0; (i<blocks.length && !encontrado); i++) {
         encontrado = await revisarConsecutivos(b1,blocks[i],token);
         if (encontrado) {
             b1 = blocks.splice(i,1);
             arrayOrdenado.push(b1);
         }
      }        
  } while (blocks.length>0);
  
  return arrayOrdenado;
}

module.exports.obtenerToken = obtenerToken;
module.exports.obtenerBloques = obtenerBloques;
module.exports.check = check;
module.exports.finalCheck = finalCheck;