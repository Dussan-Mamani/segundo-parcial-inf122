import React, { useState } from 'react';
import '../img/check-circle 1.png';
import '../img/trash 1.png';
import '../style/Nota.css';
function Nota({ nota, onDelete, onEdit }) {
    const [editando, setEditando] = useState(false);
    const [nuevoTexto, setNuevoTexto] = useState(nota.texto);

    const handleGuardar = () => {
        onEdit(nota.id, nuevoTexto);
        setEditando(false);
    };

    return (
        <div>
            {editando ? (
                <div className='editar-nota'>
                    <textarea
                        value={nuevoTexto}
                        onChange={(e) => setNuevoTexto(e.target.value)}
                    />
                    <button onClick={handleGuardar}></button>
                </div>
            ) : (
                <div className='contenedor-nota'>
                    <p className='nota'>{nota.texto} <img src='trash 1.png'alt='a'/><img src='check-circle 1.png' alt='b'/></p>
                </div>
            )}
        </div>
    );
}

export default Nota;