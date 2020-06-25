import React from 'react'
import CourseCard from '../Molecules/CourseCard'
import withLoader from '../HOC/withLoader'
const CourseGrid = ({courses})=>(
    <div className="ed-grid m-grid-4">
                {
                courses.map(c => (
                    <CourseCard
                        id={c.id}
                        title={c.title}
                        img={c.img}
                        price={c.price.toString()}
                        teacher={c.teacher} />))}
            </div>
)

export default withLoader("courses", CourseGrid)