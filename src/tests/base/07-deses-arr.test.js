import { retornaArreglo } from '../../base/07-deses-arr'

describe('Pruebas en 07-deses-arr.js', () => {

  test('Debe de retornar una string y un numero', () => {

    const [letras, numeros] = retornaArreglo(); // return ['ABC', 123];

    //expect( arr ).toEqual( ['ABC', 123] );
    console.log(typeof numeros);
    console.log(typeof letras);

    expect( letras ).toBe('ABC');
    expect( typeof letras ).toBe('string');

    expect( numeros ).toBe(123);
    expect( typeof numeros ).toBe('number');
    
  })
  
  
})
