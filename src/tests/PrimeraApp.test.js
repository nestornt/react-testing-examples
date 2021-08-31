import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
//import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimeraApp />', () => {

  /*test('Debe de mostrar el mensjae "Hola"', () => {
    
    const saludo = "Hola";
    // Para usar jsx y mezcla de componentes hay que importar react
    //const wrapper = render( <PrimeraApp saludo={saludo}/> );
    const { getByText } = render( <PrimeraApp saludo={saludo}/> );

    expect(getByText(saludo)).toBeInTheDocument();
  })*/

  test('Debe de mostrar <PrimeraApp /> correctamente', () => {

    const saludo = "Hola";
    const wrapper = shallow( <PrimeraApp saludo={saludo}/>);
    // Desde la consola de jest usar tecla "u" para actualizar el snapshot en caso de hacer cambios
    expect(wrapper).toMatchSnapshot();
    
  });
  test('Debe de mostrar la prop "subtitulo" enviada al componente', () => {

    const saludo = 'Hola';
    const subTitulo = 'Soy un subtitulo'
    const wrapper = shallow( 
      <PrimeraApp
        saludo={ saludo }
        subtitulo={ subTitulo }
      />
    );

    // Sería como un document.querySelector() de js
    const textoParrafo = wrapper.find('p').text();
    
    expect( textoParrafo ).toBe( subTitulo );
    
  }) 
})
