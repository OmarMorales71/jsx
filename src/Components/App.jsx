import React from 'react';
import "../styles/styles.scss"
//import Curso from './Curso'
import TopBar from './Organisms/TopBar'
import Home from "./Pages/Home"
import Form from './Pages/Form'
import CourseGrid from './Organisms/CourseGrid'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Course from './Pages/Course'
import History from './Pages/History'
import Users from './Pages/Users';
/*
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
]*/


//Solo se puede retornar un elemento
const App = () => (
  
    <Router> 
      <TopBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cursos/:id" component={Course}/>
        <Route path="/cursos" component={CourseGrid}/>
        <Route path="/formulario" component={()=><Form title="contacto" />}/>
        <Route path="/historial/:past" component={History}/>
        <Route path="/usuarios" component={Users}/>

        <Route component={()=>
        <div className="ed-grid">
          <h1>404 not found</h1>
        </div>}/>
      </Switch>
    </Router>
)

export default App;

