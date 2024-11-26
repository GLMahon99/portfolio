import React from "react";

const Skilss = () => {
  return (
    <div className="container skills-container mt-5">
      <h2 className="mt-5 title">Skills</h2>
      <div className="row row-cols-4 ">
        <div className="col d-flex justify-content-center">
          <div className="d-block">
            <h4 className="subtitle">Frontend</h4>
            <ul className="list-unstyled">
              <li>
                <i class="fa-brands fa-html5"></i> HTML
              </li>
              <li>
                <i class="fa-brands fa-css3-alt"></i> CSS
              </li>
              <li>
                <i class="fa-brands fa-js"></i> JavaScript
              </li>
              <li>
                <i class="fa-brands fa-react"></i> React Js
              </li>
              <li>
                <i class="fa-brands fa-sass"></i> Sass
              </li>
            </ul>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
            <div className="d-block">
            <h4 className="subtitle">Backend</h4>
          <ul className="list-unstyled">
            <li>
              <i class="fa-brands fa-node"></i> Node Js
            </li>
            <li>
              <i class="fa-brands fa-python"></i> Python
            </li>
          </ul>
            </div>
          
        </div>
        <div className="col d-flex justify-content-center">
            <div className="d-block">
            <h4 className="subtitle">Base de datos</h4>
            <ul className="list-unstyled">
                <li>MySql</li>
                <li>Firebase</li>
                <li><i class="fa-brands fa-docker"></i> Docker</li>
            </ul>
            
            </div>
          
        </div>
        <div className="col d-flex justify-content-center">
            <div className="d-block">
            <h4 className="subtitle">Otros</h4>
            <ul className="list-unstyled">
                <li><i class="bi bi-bootstrap"></i> Bootstrap</li>
                <li><i class="fa-brands fa-git"></i> Git</li>
                <li><i class="fa-brands fa-github"></i> Github</li>
                <li><i class="fa-brands fa-figma"></i> Figma</li>
                <li>Visual Studio</li>
            </ul>
            </div>
          
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Skilss;
