import React from 'react';

const Education = () => {
    return ( 
        <div className='container education-container mt-5'>
            <h2 className='mt-5 title'>Educación</h2>
            <div className="row row-cols-2">
                <div className="col">
                    <h3 className='subtitle'>Técnicaturas</h3>
                    <ul>
                        <li>
                            <div className='row'>
                                <div className="col-8">Técnico Superior en Periodismo con orientación en periodismo deportivo - ISEC</div>
                                <div className="col-4">2017-2020</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div className="col-8">Técnico Superior en Programación - Universitas Estudios Superiores</div>
                                <div className="col-4">2023-2025</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h3 className='subtitle'>Cursos</h3>
                    <ul>
                    <li>
                            <div className='row'>
                                <div className="col-8">Carrera de desarrollo frontend - Coderhouse</div>
                                <div className="col-4">2021-2022</div>
                            </div>
                            <div><ul>
                                <li>Desarrollo web</li>
                                <li>JavaScript</li>
                                <li>React Js</li></ul></div>
                        </li>
                        <li>
                            <div className='row'>
                                <div className="col-8">Experto universitario en progrmacion web full stack - UTN e-learning</div>
                                <div className="col-4">2022</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Education;