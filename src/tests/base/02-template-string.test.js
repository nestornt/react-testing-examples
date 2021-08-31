import { getSaludo } from '../../base/02-template-string';
// Para importar el autocompletado de jest
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string.js', () => {

  test('getSaludo debe de retornar hola + un nombre', () => {

    const nombre = 'Nestor';

    const saludo = getSaludo( nombre );

    expect( saludo ).toBe( 'Hola ' + nombre);
    
  })
  test('getSaludo debe de retornar hola + John si no hubiera argumentos', () => {

    const saludo = getSaludo();

    expect( saludo ).toBe( 'Hola John');
    
  })
})
