import React from 'react'

const History=({match, location, history})=>(
    <div>
        <h1>Historial</h1>
        {console.log(match)}
        
        {console.log(location)}

        
        {console.log(history)}
    </div>

)

export default History