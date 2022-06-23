const axios = require("axios");
const {obtenerToken} = require("../challenge");

jest.mock('axios'); //Comentar para usar la API real

describe('Pruebas para el challenge usando MOCKS', ()=> {

  test('Obteniendo token con mocks para correo mgoscar@gmail.com', async () => {
    const mockToken = {token: 'a7387677-054b-4fa2-96c7-42480220234a'};
    // const mockToken = {token: 'mock-token'};
    const resp = {data: mockToken};
    
    axios.get.mockResolvedValue(resp); //Comentar para usar la API real
    let token = await obtenerToken('mgoscar@gmail.com');  
    
    expect(token).toBe('a7387677-054b-4fa2-96c7-42480220234a');
  });
});