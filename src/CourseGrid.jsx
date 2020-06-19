import React from 'react'
import Curso from './Curso'

const cursos = [{
    id: 1,
    title: "React desde cero",
    img: "https://i.ytimg.com/an_webp/-FlxM_0S2lA/mqdefault_6s_480x270.webp?du=3000&sqp=CMC7r_cF&rs=AOn4CLDiJ9L4WuPP0XbWAtkiFWV2dJmgPA",
    teacher: "George Eglinton",
    price:59
},
{
    id: 2,
    title: "JavaScript desde cero",
    img: "https://i.ytimg.com/an_webp/-FlxM_0S2lA/mqdefault_6s_480x270.webp?du=3000&sqp=CMC7r_cF&rs=AOn4CLDiJ9L4WuPP0XbWAtkiFWV2dJmgPA",
    teacher: "Mars Donald",
    price:29
},
{
    id: 3,
    title: "SQL desde cero",
    img: "https://i.ytimg.com/an_webp/-FlxM_0S2lA/mqdefault_6s_480x270.webp?du=3000&sqp=CMC7r_cF&rs=AOn4CLDiJ9L4WuPP0XbWAtkiFWV2dJmgPA",
    teacher: "Aaron Wesley",
    price:49
},
{
    id: 4,
    title: "Java desde cero",
    img: "https://i.ytimg.com/an_webp/-FlxM_0S2lA/mqdefault_6s_480x270.webp?du=3000&sqp=CMC7r_cF&rs=AOn4CLDiJ9L4WuPP0XbWAtkiFWV2dJmgPA",
    teacher: "Valeria Vargas",
    price:999
}

]

const CourseGrid=()=>(
    <div className="ed-grid m-grid-4"> 
    {cursos.map(c=>(
    <Curso 
    id={c.id}
    title={c.title} 
    img={c.img}
    price={c.price}
    teacher={c.teacher}/>))}
    </div>
)

export default CourseGrid;