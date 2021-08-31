import { getImagen } from '../../base/11-async-await'

describe('Pruebas con async-await y fetch', () => {
  test('Debe de retornar la URL de la imagen', async () => {

    const url = await getImagen();
    // Se fuerza el error cambiando la API key
    expect( url.includes( 'https://' )).toBe( true ); 
  })
})
