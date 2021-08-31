import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('Pruebas con el componente Counter App', () => {

  // Se define wrapper en este ámbito también para poder contar con el autocompletado
  // Aunque sea una mala práctica
  let wrapper = shallow(< CounterApp />);

  // Antes de cada test, establace wrapper con los valores originales
  beforeEach(() => {

    wrapper = shallow(< CounterApp />);

  })

  // Tests
  test('Debe de mostrar <CounterApp /> correctamente con sus valores por defecto', () => {
    
    expect(wrapper).toMatchSnapshot();
    
  });
  
  test('Debe de mostrar el valor por defecto de 100', () => {
    
    const value = 100;
    const wrapper = shallow(< CounterApp value={ value } />);
    const counterText = wrapper.find('h2').text().trim();

    expect(parseInt(counterText)).toBe(value);

  });

  test('Debe de incrementar con el botón +1', () => {

    wrapper.find('button').at(0).simulate('click');  // console.log(btn1.html());
    const counterText = wrapper.find('h2').text().trim();

    expect( counterText ).toBe( '11');

  });

  test('Debe de decrementar con el botón -1', () => {

    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    expect( counterText ).toBe('9');
  });

  test('Debe de colocar el valor por defecto con el botón de reset', () => {

    const wrapper = shallow(< CounterApp value={ 105 } />);

    // Botones de suma, click 2 veces
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    // Botón de reset a 105
    wrapper.find('button').at(1).simulate('click');

    const counterText = wrapper.find('h2').text().trim();

    expect( counterText ).toBe('105'); 
  });
})