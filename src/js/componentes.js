
import '../css/estyles.css';
// import  logaso from '../assets/img/webpack-logo.png'

export const saludar =  (nombre) => {

    console.log( 'crando etiqueta h1' );
    
    const h1 =  document.createElement('h1');
    h1.innerText = `Hola ${nombre} !asdsa!`;
    document.body.append(h1);



    // console.log( logaso );
    
    // const imagen = document.createElement('img');
    // imagen.src = logaso;
    // document.body.append(imagen);

}