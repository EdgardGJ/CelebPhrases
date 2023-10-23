import '../hojas-de-estilo/Testimonio.css';
import React from 'react';

function Testimonio(props) {
  return (
  <div className='contenedor-testimonio'>
    <img 
    className='imagen-testimonio'
    src={require(`../imagenes/testimonio-${props.imagen}.jpeg`)}
    alt='Foto de Katiel' />
    <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'>
        <strong>{props.nombre}</strong> from {props.pais}
        </p>
      <p className='cargo-testimonio'>
        {props.cargo} of <strong>{props.empresa}</strong>
        </p>
      <p className='texto-testimonio'>"{props.testimonio}"</p>
    </div>
  </div>
 );
}

export default Testimonio;
