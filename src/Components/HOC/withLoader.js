import React, { Component } from "react"

//Componente de orden superior
const withLoader = (propValue, WrappedComponent) => {
    return class WithLoader extends Component {
       

        render() {
            return this.props[propValue].length === 0?<h1 className="t3">Cargando...</h1>
            :<WrappedComponent {...this.props}/>
        }
    }
}

export default withLoader