import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'
import TopBar from './TopBar'
//Solo se puede retornar un elemento
const App = () => (
    <>
    <TopBar />
        <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="banner" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwXroMcDOyIpTkbWQaitmxd5ryNdA1i3QL8ENTlSprsa_RCb1h&usqp=CAU"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Título del banner</p>
        <p> Subtítulo del banner</p>
        <a href="http://www.youtube.com" className="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-4">
<Curso />
<Curso />
<Curso />
<Curso />
</div>
    </>
)

export default App;

