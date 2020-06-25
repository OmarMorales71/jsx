import React from 'react'
import CourseCard from '../Molecules/CourseCard'
import axios from 'axios'
import CourseGrid from '../Organisms/CourseGrid'

/* const courses = [{
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

] */



class Courses extends React.Component {
    constructor(props){
        super(props)

        this.state={
            courses: []
        }
    }

    async componentDidMount(){
        const response = await axios.get('http://my-json-server.typicode.com/OmarMorales71/json-db/cursos')

        if(response.status===200){
            this.setState({
                courses: response.data
            })
        }
    }

    render() {
        const {courses} = this.state
        return (
            <CourseGrid courses={courses}/>
        )
    }
}

export default Courses;