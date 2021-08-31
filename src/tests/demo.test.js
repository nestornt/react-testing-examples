describe('\n Pruebas en el archivo demo.test.js \n', () => {

  test('deben de ser iguales las strings', () => {
    //1. Inicialización
    const mensaje = 'Hola mundo';
  
    //2. Estímulo
    const mensaje2 = `Hola mundo`;
  
    // 3.Observa el comportamiento
    expect( mensaje).toBe( mensaje2 ); // ===
  
  })

})
 

