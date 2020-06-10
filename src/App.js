import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'
import TopBar from './TopBar'

const cursos =[
  {title: "Java desde cero",
    img:"https://i.ytimg.com/an_webp/k4oeMldaqHk/mqdefault_6s_480x270.webp?du=3000&sqp=CIXrhPcF&rs=AOn4CLAyXihrPY8XMWZkTMeEsvJ8PzzBCw",
    teacher: "Omar Morales Ortega",
    price: "999"},
    {title: "Go desde cero",
    img:"https://www.futbolred.com/files/article_main/files/crop/uploads/2018/05/26/5b09d2c02885b.r_1590520116395.0-4-680-344.jpeg", 
    teacher: "Giorgia Cordiglia",
    price: "99"},
    {title: "SQL desde cero",
    img:"https://i.ytimg.com/an_webp/VfG_XlLyu6o/mqdefault_6s.webp?du=3000&sqp=CILphPcF&rs=AOn4CLC7SQ1qFoxhWvHDFVc4KsxFbeG_CQ",
    teacher: "Valeria Chida",
    price: "49"},
    {title: "Python desde cero",
    img:"https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=CMy0gPcF-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDkAiGWW28oqf34Y8Elq0dI20rWrA", 
    teacher: "Deborah Nonnis",
    price: "9"},
    {}
]


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

{cursos.map(curso=><Curso title={curso.title} img={curso.img} price={curso.price} teacher={curso.teacher}/>)}
</div>
    </>
)

export default App;

