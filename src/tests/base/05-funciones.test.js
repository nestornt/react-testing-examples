import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas en 05-funciones ', () => {

  test('getUSer debe de retornar un objeto ', () => {

    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    //! toEqual para comparar objetos o arrays
    // en toBe === daría falso al residir
    // en distintas direcciones de memoria
    expect( user ).toEqual( userTest);
  })
  test('getUsuarioActivo Debe de retornar un objeto ', () => {
    
    const nombre = 'Nestor'

    const userTest = {
      uid: 'ABC567',
      username: nombre
    }

    expect( userTest ).toEqual( getUsuarioActivo(nombre) );
  })
})
