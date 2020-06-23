import React from 'react'


const courses = [{
    id: 1,
    title: "React desde cero",
    img: "https://i.ytimg.com/an_webp/-FlxM_0S2lA/mqdefault_6s_480x270.webp?du=3000&sqp=CMC7r_cF&rs=AOn4CLDiJ9L4WuPP0XbWAtkiFWV2dJmgPA",
    teacher: "George Eglinton",
    price: 59
},
{
    id: 2,
    title: "JavaScript desde cero",
    img: "https://i.ytimg.com/an_webp/-FlxM_0S2lA/mqdefault_6s_480x270.webp?du=3000&sqp=CMC7r_cF&rs=AOn4CLDiJ9L4WuPP0XbWAtkiFWV2dJmgPA",
    teacher: "Mars Donald",
    price: 29
},
{
    id: 3,
    title: "SQL desde cero",
    img: "https://i.ytimg.com/an_webp/-FlxM_0S2lA/mqdefault_6s_480x270.webp?du=3000&sqp=CMC7r_cF&rs=AOn4CLDiJ9L4WuPP0XbWAtkiFWV2dJmgPA",
    teacher: "Aaron Wesley",
    price: 49
},
{
    id: 4,
    title: "Java desde cero",
    img: "https://i.ytimg.com/an_webp/-FlxM_0S2lA/mqdefault_6s_480x270.webp?du=3000&sqp=CMC7r_cF&rs=AOn4CLDiJ9L4WuPP0XbWAtkiFWV2dJmgPA",
    teacher: "Valeria Vargas",
    price: 999
}

]

const Course = ({ match }) => {

    const currentCourse = courses.filter(c => c.id === parseInt(match.params.id))[0]
    return (

        currentCourse
            ? (<div className="ed-grid m-grid-3">
                <h1 className="m-cols-3">Curso {currentCourse.title}</h1>
                <img className="m-cols-1" src={currentCourse.img} alt="imagen" />
                <p className="m-cols-2">Profesor: {currentCourse.teacher} Precio: {currentCourse.price}</p>
            </div>)
            :<div className="ed-grid ">
                <h1>Curso no encontrado</h1>
            </div>
    )
}

export default Course