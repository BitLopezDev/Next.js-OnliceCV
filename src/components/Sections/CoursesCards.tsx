import React from 'react'
import { Image } from 'semantic-ui-react'
import './../../styles/fullstack.module.scss';
import '../../scripts/charts/frameworks.js';
import '../../scripts/charts/backend.js';
import '../../scripts/charts/frontend.js';


// ./../../assets/users/Santiago/credenciales/NextU/PHP_OOP.png
// import { FullStackRoute } from './innerSections/Section3/PlatziRoutes/FullStackRoute';
// import { FrontendReactRoute } from './innerSections/Section3/PlatziRoutes/FrontendReactRoute';
// import { FullStackNextRoute } from './innerSections/Section3/PlatziRoutes/FullStackNextRoute';
// import { HTMLCSSRoute } from './innerSections/Section3/PlatziRoutes/HTMLCSSRoute';
// import { JSaPRoute } from './innerSections/Section3/PlatziRoutes/JSaPRoute'
// import { Web3 } from './innerSections/Section3/PlatziRoutes/Web3';




import './../../../node_modules/bootstrap/dist/css/bootstrap.css';
//import './../../scripts/common';
/*import './../../scripts/Libs/bootstrap';
import './../../scripts/Libs/bootstrap.bundle';
import './../../scripts/index';*/

const CoursesCards = () => {
    return (

        <React.Fragment>
            <br />
            <br />
            <center>

                <canvas id="line-chart" style={{ maxHeight: 450 }} ></canvas> <br />
                <div className="row">
                    <div className="col-sm-6"><canvas id="frontend" width="800" height="450"></canvas></div>
                    <div className="col-sm-6"><canvas id="backend" width="800" height="450"></canvas></div>


                </div>
                <br />
                <br />
                <br />
                <div className="card w-60" style={{ width: '100%', backgroundColor: 'white !important' }}>
                    <div className="card-img-top d-flex align-items-center">
                        <div>
                            <Image className="img-fluid" src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badge-curso-frontend-developer-825407d1-49b1-4c9b-90c4-eee793720ede.png" alt="Platzi" />
                        </div>


                        <p className="card-text"><strong>React.js, jQuery y Bootstrap:</strong> Estando familiarizado con tecnolog??as tales como React.js, Bootstrap y jQuery, puedo incorporarme f??cilmente a la gran mayor??a de proyectos de desarrollo web. </p>

                    </div>


                </div>
                <br />

                <div className="card w-60" style={{ width: '100%', backgroundColor: 'white !important' }} >
                    <div className="card-img-top d-flex align-items-center ">
                        <div>
                            <Image className="img-fluid" src="https://static.platzi.com/media/learningpath/badges/0e509f8c-72f0-4064-a6bf-18dc9e667f63.jpg" alt="JS" />
                        </div>

                        <p className="card-text"><strong>Full Stack con JavaScript: </strong>
                            Mi formaci??n en Full Stack Developer con JavaScript (tanto Backend como Frontend) Me brinda la tranquilidad de tener los conocimientos en los lenguajes inform??ticos y de programaci??n por los que optan el 98,5% de los aplicativos web para su frontend.

                            {/* me dio en 2015/2016 las bases elementales de la
                            programaci??n y la inform??tica que me acompa??an desde entonces en todos mis razonamientos l??gicos
                            Ahora, en 2022, profundic?? en mi conocimiento de programaci??n web con importantes actualizaciones como
                            funciones as??ncronas, React.js, flex y grid. */}
                        </p>
                    </div>


                </div>
                <br />
                <div className="card w-60" style={{ width: '100%', backgroundColor: 'white !important' }}>
                    <div className="card-img-top d-flex align-items-center">
                        <div>
                            <Image className="img-fluid" src="https://static.platzi.com/media/learningpath/badges/824ba606-359a-453b-925e-e1b81bed8785.jpg" alt="PHP" />
                        </div>


                        <p className="card-text"><strong>Backend con PHP: </strong>Mi formaci??n en PHP me brinda las herramientas para enfrentarme a los desaf??os del mundo del Backend de casi el 78% de aplicaciones web que, sumados a mi ormaci??n en JavaScript, me permiten cubrir la cuota casi del 80% de los desarrollos Backend.</p>


                    </div>


                </div>
                <br />

                <div className="card w-60" style={{ width: '100%', backgroundColor: 'white !important' }}>
                    <div className="card-img-top d-flex align-items-center">
                        <div>
                            <Image className="img-fluid" src="https://static.platzi.com/media/learningpath/badges/4214325e-8854-466a-a1cf-49231a2566d9.jpg" alt="Server Admin" width={87} />
                        </div>



                        <div className="container mt-3" style={{ textAlign: "left" }}>
                            <h5>Adminisraci??n de Servidores</h5>
                            <div className="progress">
                                <div className="progress-bar fondogradiente" style={{ width: "35%" }}>35%</div>
                            </div>
                            <p>Esta ruta me da los conocimiemientos necesarios para instalar servicios web y configurarlos para entornos de producci??n, configurar herramientas para monitorizar procesos y servicios y administrar paquetes acorde a la distribuci??n. </p>
                            <br />
                        </div>


                    </div>


                </div>
                <br />






            </center>


        </React.Fragment>

    );
}

export { CoursesCards };





