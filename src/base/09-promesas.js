import { getHeroeById } from './08-imp-exp'

export const getHeroeByIdAsync = ( id ) => {
    // Retorna una promesa que al segundo y medio si el id existe lo devuelve
    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            // Si el ID existe lo resuelve
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 1500 ) // Segundo y medio
    
    });


}


/* getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn ); */