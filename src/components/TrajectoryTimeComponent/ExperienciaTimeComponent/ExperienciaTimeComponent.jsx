import React from 'react';
import './TrajectoryTimeComponent.css'; // Importa los estilos CSS aquí

const ExperienciaTimeComponent = () => {
  return (
    <div className="timeline" id="timeline-experiencia">
      <div className="evento-fecha">
        {/* Aquí van las fechas para Experiencia */}
      </div>
      <div className="evento-linea">
        <div className="evento-circulo"></div>
      </div>
      <div className="evento-info">
        <h5>Desarrollador full stack</h5>
        <p>GIROHOSTING GROUP – Girona</p>
        <span className="verDetalles">Ver detalles </span>
        <ul className="details">
          <li>Implementación de conceptos de diseño en la aplicación web.</li>
          <li>Gestión y manipulación de datos en MongoDB.</li>
          <li>Implementación de diseño responsivo para garantizar compatibilidad.</li>
          <li>Trabajo en equipo para facilitar el cumplimiento de objetivos.</li>
        </ul>
      </div>
      <div className="evento-info">
        <h5>Técnico informático</h5>
        <p>FSM Fundació Sanitaria Mollet – Mollet del Vallés</p>
        <span className="verDetalles">Ver detalles </span>
        <ul className="details">
          <li>Instalación, configuración y mantenimiento de los equipos informáticos.</li>
          <li>Supervisión y aseguramiento del rendimiento técnico de los sistemas.</li>
          <li>Soporte técnico a los usuarios internos para resolver incidencias.</li>
        </ul>
      </div>
      <div className="evento-linea">
        <div className="evento-circulo"></div>
      </div>
      <div className="evento-fecha">
        {/* Otras fechas para Experiencia */}
      </div>
    </div>
  );
};

export default ExperienciaTimeComponent;
