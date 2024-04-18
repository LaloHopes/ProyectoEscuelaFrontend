import React, { useState, useEffect } from 'react';
import './ReprobadosComponent.css';

function ReprobadosComponent({ userId }) {
  const [calificaciones, setCalificaciones] = useState([]);

  useEffect(() => {
    async function fetchCalificaciones() {
      try {
        const response = await fetch(`http://localhost:3000/calificaciones?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Error al obtener las calificaciones');
        }
        const data = await response.json();
        setCalificaciones(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchCalificaciones();
  }, [userId]);

  return (
    <section style={{
      backgroundImage: 'url("https://cdn.pixabay.com/photo/2022/12/01/04/40/backpacker-7628303_1280.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
    }} className="bg-gray-50 dark:bg-gray-900">
      <div>
        <div className="nav flex justify-between items-center mb-4">
          <h1 className="texto-bienvenida"></h1>
          <button className="out" onClick={() => window.location.href = '/'}>Cerrar Sesión</button>
        </div>
        <h1 className="texto-bienvenida">Estas son las calificaciones</h1>
        <div className="container">
          <table className="relative overflow-x-auto text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Usuario
                </th>
                <th scope="col" className="px-6 py-3">
                  Materia
                </th>
                <th scope="col" className="px-6 py-3">
                  Calificación
                </th>
              </tr>
            </thead>
            <tbody>
              {calificaciones.map((calificacion, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700" : "bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700"}>
                  <td className={`px-6 py-4 ${calificacion.calificacion < 80 ? 'reprobado' : ''}`}>{calificacion.userId}</td>
                  <td className={`px-6 py-4 ${calificacion.calificacion < 80 ? 'reprobado' : ''}`}>{calificacion.materiaId}</td>
                  <td className={`px-6 py-4 ${calificacion.calificacion < 80 ? 'reprobado' : ''}`}>{calificacion.calificacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ReprobadosComponent;
