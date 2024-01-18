import React, { useState } from 'react';
import Nota from './Nota';
import '../style/Agregar.css';

function Agregar() {
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');

    const agregarNota = () => {
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
    };

    return (
        <div className='contenedor-principal'>
            <div className='b'>
            <input
                className="input"
                type="text"
                value={nuevaNota}
                onChange={(e) => setNuevaNota(e.target.value)}
            />
            <button className='boton' onClick={agregarNota}>Agregar</button>
            </div>
            <div className='a'>
            <input
                className="input"
                type="text"
            />
            <p>....</p>
            <input
                className="input"
                type="text"
            />
            </div>
            {notas.map((nota) => (
                <Nota
                    key={nota.id}
                    nota={nota}
                />
            ))}
        </div>
    );
}

export default Agregar;