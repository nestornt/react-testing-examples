import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {

    test('Debe de retornar un heroe por ID', () => {

        const id = 1;
        const heroe = getHeroeById( id );
        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );  
        
    });
    test('Debe de retornar undefined si un heroe no existiera', () => {

        const id = 11;
        const heroe = getHeroeById( id );

        // Usar toBe para datos primitivos de js
        expect( heroe ).toBe( undefined );  
        
    });
    test('Debe de retornar un array de heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter( h => h.owner === owner );
        //console.log(getHeroesByOwner(owner));

        expect( heroes ).toEqual( heroesData); 
    })
    test('Debe de retornar un array de heroes de Marvel de longitud 2', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe( 2 );
    })
})
