import React from "react";
import fotoPerfil from "../assets/foto-perfil.jpg";


const Me = () => {
  return (
    <div className="container me-container">
      <div className="row me-info">
        <div className="col-8">
          <h1 className="title">Gastón Mahon</h1>
          <h2 className="subtitle">Software Developer</h2>
          <p>
            Soy estudiante de la tecnicatura en programación, con formación en
            JavaScript, React JS, Node.js, SQL y Python. A lo largo de mis
            estudios y proyectos personales, he adquirido experiencia en el
            desarrollo de aplicaciones web, incluyendo ecommerce. Me considero
            una persona proactiva, con habilidades para aprender rápidamente y
            trabajar en equipo. Tengo una gran motivación por crecer
            profesionalmente y contribuir con soluciones innovadoras en el
            desarrollo de software.
          </p>
          <a className="btn btn-neon" href="https://drive.google.com/file/d/1IVLGaA8cTGKB6HxfUOtHKG0-v1v0FRfu/view?usp=sharing" target="_blank">
            Descargar CV
          </a>
        </div>
        <div className="col-1 "></div>
        <div className="col-3 align-items-center">
          <img className="rounded img-fluid" src={fotoPerfil} alt="" />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default Me;
