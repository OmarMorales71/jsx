import React, { Component } from 'react'

class Formulario extends Component { //Extiende de React.Component

    //Enviar las props a la clase Component
    //Constructor solo se construye si tenemos props
    constructor(props) {
        super(props)

        //El estado del componente
        this.state = {
            nombre: "",
            correo: ""
        }
    }

    //this.setState(nuevo estado)

    render() {
        return (
            <div className='ed-grid'>
                <h1>Formulario</h1>
                <form className="ed-container form__item" >
                    <div className="ed-grid m-grid-2">
                        <div className="ed-item form__item">
                            <label >Nombre completo</label>
                            <input 
                            type="text" 
                            onChange={ e=> this.setState({
                                nombre: e.target.value
                            })}
                            />
                        </div>

                        <div className="ed-item form__item">
                            <label >Correo electronico</label>
                            <input 
                            type="email" 
                            onChange={e1=>this.setState({
                                correo: e1.target.value
                            })}/>
                        </div>
                    </div>
                    <div className="form__item ed-item">
                        <input className="button full" type="submit" value="Enviar" />
                    </div>

                </form>

                <div>
                    <h2>
                        {`Hola ${this.state.nombre}`}
                    </h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }
}


export default Formulario;