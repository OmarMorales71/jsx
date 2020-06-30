import React, { useState } from 'react'
import useCourse from '../CustomHooks/useCourse'


const Course = ({ match }) => {

    //utilizar el estado con Hooks. useState retorna un array de 2 elementos con el estado actual y un metodo para modificar el estado
    //Se utiliza destructuracion para almacenar el array en diferentes variables
    const [comment, setComment] = useState("Sin Comentario")
    const course = useCourse(match.params.id)
    const setMyComment=e=>{
        setComment(e.target.value)
    }
    /*const changeTitle=(newTitle)=>{
        setState({
            currentCourse:{
                ...state.currentCourse,//hace que el estado anterior se guarde y que solo modifique lo que hemos escrito
                "title": newTitle
            }
        })
    }*/
    

    return (
        course
            ? (
            <div className="ed-grid">
            <div className=" m-grid-3 ed-grid">
                <h1 className="m-cols-3">Curso {course.title}</h1>
                <img className="m-cols-1" src={course.img} alt="imagen" />
                <p className="m-cols-2">Profesor: {course.teacher} Precio: {course.price}</p>
                {/* <button onClick={changeTitle.bind(this, "Pascal desde cero")}>Cambiar titulo</button> */}
            </div>
            <div className="ed-grid"> 
                <h2>Escribe tu comentario</h2>
                <input type="text" placeholder="Escribe..." onChange={setMyComment.bind(this)}/>
            <p>{comment}</p>
            </div>
            </div>)
            : <div className="ed-grid ">
                <h1>Curso no encontrado</h1>
            </div>
    )
}

export default Course