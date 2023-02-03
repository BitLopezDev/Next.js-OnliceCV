import React from 'react';
import { Image, Item } from 'semantic-ui-react'
//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FullStackModal } from '../Modals/FullStackModal';
const FrontendReactRoute = () => {
    return (
        <React.Fragment>

            <Item.Group>
                <Item>
                    <Item.Image size='tiny'  >
                        {/* <FullStackModal /> */}
                        {/* https://react.semantic-ui.com/images/wireframe/image.png */}
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <h6>(Click en certificado para verlo)</h6>
                    </Item.Image>

                    <Item.Content>
                        <Item.Header as='a'>FrontEnd con React.js | 2023</Item.Header>
                        <Item.Meta> <div className="progress">
                            <div className="progress-bar fondogradiente" style={{ width: '18%' }}>18%</div>
                        </div></Item.Meta>
                        <Item.Description>
                            <p>En este curso Profundizo en mis conocimientos en React.js con mejor manejo de estado, de React Router, y mucho más.</p>
                        </Item.Description>
                        {/* <Item.Extra>Additional Details</Item.Extra> */}
                    </Item.Content>
                </Item>
            </Item.Group>
            <div style={{ 'overflow': 'scroll', maxHeight: 200 }}>
                <h4>Algunos cursos relevantes de la ruta:</h4>

                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>Logo</th>
                            <th>Nombre</th>
                            <th>Terminación</th>
                        </tr>
                    </thead>
                    <tbody>


                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/reactjs-patrones-render_badge-3c77e155-b04a-4c95-ac61-e2b6d2d5b92e.png" width={26} /></td>
                            <td>Curso de React.js: Patrones de Render y Composición</td>
                            <td>100% |    <a href='https://platzi.com/p/santiagocomesana03/curso/2457-react-patrones-render/diploma/detalle/' target='_blank'>ver certificado</a></td>
                        </tr>

                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/react-a4cc5125-0dee-4ec4-a3e3-f1d799973cfd.png" width={26} /></td>
                            <td>Manejo profesional del estado en React.js</td>
                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-profesional-react-hooks-6b35d829-af8e-47e6-aef6-e4504db32bc4.png" width={26} /></td>
                            <td>Curso profesional de React Hooks</td>
                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/1313-96cfddb0-624d-4a3b-8f1c-7e75660fb7a1.png" width={26} /></td>
                            <td>Curso de Progressive Web Aps con React</td>
                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>

                        {/* <tr>
                            <td><Image src="" width={26} /></td>
                            <td>Terminal de Linux</td>
                            <td>100% |  <a href='ss' target='_blank'>ver certificado</a></td>
                        </tr> */}

                    </tbody>
                </table>
            </div>


        </React.Fragment>
    );

}

export { FrontendReactRoute };