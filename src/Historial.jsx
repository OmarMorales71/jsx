import React from 'react'

const Historial=({match, location, history})=>(
    <div>
        <h1>Historial</h1>
        {console.log(match)}
        
        {console.log(location)}

        
        {console.log(history)}
    </div>

)

export default Historial