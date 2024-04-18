import React, { useState } from 'react';
import "./RegistroComponent.css"; 

function RegistroComponent() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [edad, setEdad] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEdadChange = (event) => {
    setEdad(event.target.value);
  };

  const saludarUsuario = (message) => {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(message);
    utterThis.lang = "es-ES";
    synth.speak(utterThis);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let error = false;
  
      if (nombre.length < 6) {
        error = true;
        saludarUsuario("Tu nombre debe ser mayor a 6 caracteres. Corrígelo por favor");
      }
  
      if (password.length < 8) {
        error = true;
        saludarUsuario("La contraseña debe tener al menos 8 caracteres. Corrígela por favor");
      }
  
      if (!error) {
        const response = await fetch('http://localhost:3000/usuarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ Nombre: nombre, Email: email, Pass: password, Edad: edad }),
        });
        if (response.ok) {
          // Mostrar mensaje emergente de éxito
          alert('Registro exitoso!');
          // Limpiar el formulario después del registro exitoso
          setNombre('');
          setEmail('');
          setPassword('');
          setEdad('');
          // Llamar a la función saludarUsuario después del registro exitoso
          saludarUsuario("Bienvenido" + nombre +"a la pagina");
        } else {
          console.error('Error al registrar usuario:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error al conectar con el backend:', error);
    }
  };
  
  

  return (
    <section style={{ 
      backgroundImage: 'url("https://cdn.pixabay.com/photo/2024/04/02/09/20/woman-8670414_1280.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
    }} className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://www.svgrepo.com/show/420329/anime-away-face.svg" alt="logo" />
          Anime University
        </a>
        <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-slate-900 dark:border-gray-800">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Ingresa tus datos
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre completo</label>
                <input type="text" name="nombre" id="nombre" value={nombre} onChange={handleNombreChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre completo" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="edad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edad</label>
                <input type="number" name="edad" id="edad" value={edad} onChange={handleEdadChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Edad" required />
              </div>
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">Registrarse</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Ya tienes una cuenta?  <a href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={() => window.scrollTo(0, 0)}>Identificate aqui</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistroComponent;
