import { useEffect, useState } from 'react'
import axios from 'axios'
const useCourse = id => {

    const [course, setCourse] = useState({})

    useEffect(() => { //Este metodo correra cada que este componente se cree o actualice
        axios.get(`http://my-json-server.typicode.com/OmarMorales71/json-db/cursos/${id}`)
            .then(response => {
                if (response.status === 200) {
                    setCourse(response.data)
                } else {
                    console.log(response)
                }
            })
    }, [])

    return course;
}

export default useCourse