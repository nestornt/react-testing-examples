


const nombre   = 'Nestor';
const apellido = 'Navarro';


// const nombreCompleto = nombre + ' ' + apellido;
//const nombreCompleto = `${ nombre } ${ apellido }`;

//console.log( nombreCompleto );


export function getSaludo(nombre = 'John') {
    return 'Hola ' + nombre;
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );