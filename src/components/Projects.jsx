import React from "react";
import imageEarplugsWeb from "../assets/earplugs-image-web.png";

const Projetcs = () => {
  return (
    <div className="container project-container mt-5">
      <h2 className="mt-5  mb-3 title">Proyectos</h2>
      <div className="row row-cols-3">
        <div className="col">
          <div className="d-block project-item">
            <img className="img-fluid" src={imageEarplugsWeb} alt="" />
            <h5 className="text-center my-3">Integracion MP Checkout Pro</h5>
            <div className="row row-cols-2 d-flex justify-content-center mb-2 container">
              <div className="col ">
                <a
                  href="https://github.com/GLMahon99/integration-mercadopago"
                  target="_blank"
                >
                  <i class="bi bi-github project-links"></i>
                </a>
              </div>
              <div className="col d-flex justify-content-end"><i class="fa-brands fa-node mx-2"></i></div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-block project-item">
            <img className="img-fluid" src={imageEarplugsWeb} alt="" />
            <h5 className="text-center my-3">Earplugs Ecommerce</h5>
            <div className="row row-cols-2 d-flex justify-content-center mb-2 container">
              <div className="col ">
                <a
                  href="https://github.com/GLMahon99/earplugs-ecommerce"
                  target="_blank"
                >
                  <i class="bi bi-github project-links"></i>
                </a>
                <a href="https://earplugs.com.ar" target="_blank">
                  <i class="bi bi-globe2 project-links"></i>
                </a>
              </div>
              <div className="col d-flex justify-content-end d-inline-block">
                <i class="fa-brands fa-html5 mx-2"></i>
                <i class="fa-brands fa-css3-alt mx-2"></i>
                <i class="fa-brands fa-git mx-2"></i>
                <i class="fa-brands fa-react mx-2"></i>
                <i class="bi bi-bootstrap mx-2"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-block project-item">
            <img className="img-fluid" src={imageEarplugsWeb} alt="" />
            <h5 className="text-center my-3">Earplugs Admin Ventas</h5>
            <div className="row row-cols-2 d-flex justify-content-center mb-2 container">
              <div className="col ">
                <a
                  href="https://github.com/GLMahon99/earplugs-backend"
                  target="_blank"
                >
                  <i class="bi bi-github project-links"></i>
                </a>
                <a href="https://earplugs.com.ar" target="_blank">
                  <i class="bi bi-globe2 project-links"></i>
                </a>
              </div>
              <div className="col d-flex justify-content-end d-inline-block">
              <i class="fa-brands fa-node mx-2"></i>
              <i class="fa-solid fa-database mx-2"></i>
              <span className="mx-2">hbs</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetcs;
