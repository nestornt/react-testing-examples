// Ejemplo de testing sobre promesas
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {

  // "done" es una función callback que indica a jest cuando debe de terminar la prueba async
  test('getHeroeByIdAsync debe de retornar un Heroe async', ( done ) => {
    const id = 1;
    
    getHeroeByIdAsync(id)
      .then( heroe => {

        expect( heroe ).toBe( heroes[0] );
        done(); 
      })
  });
  test('Debe de obtener un error si el heroe asociado al ID no existe ', ( done ) => {
    const id = 20;

    getHeroeByIdAsync(id)
      .catch( error => {

        expect( error ).toBe('No se pudo encontrar el héroe');
        done();

      }) 
  })
})