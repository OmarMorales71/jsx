import React, { Component } from 'react'

class Formulario extends Component { //Extiende de React.Component

    //Enviar las props a la clase Component
    //Constructor solo se construye si tenemos props
    constructor(props) {
        super(props)
        
        //El estado del componente
        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }

        //Become my method to a this.method (Be part of the class)
        this.changeName = this.changeName.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changeDate=this.changeDate.bind(this)
    }

    //this.setState(nuevo estado)

    //changeName --Changing the state-- 
    changeName(e){
        this.setState({
            nombre: e.target.value 
        })
    }

    changeEmail(e){
        this.setState({
            correo: e.target.value
        })
    }
    
    changeDate(){
        this.setState({
            fecha: new Date()
        })
    }

    
    render() {
        return (
            <div className='ed-grid'>
                <h1>Formulario {this.props.title}</h1>
                <h4>{this.state.fecha.getHours() + ":"+this.state.fecha.getMinutes()+":"+this.state.fecha.getSeconds()}</h4>
                <form className="ed-container form__item" id="elemento" >
                    <div className="ed-grid m-grid-2">
                        <div className="ed-item form__item">
                            <label >Nombre completo</label>
                            <input 
                            type="text" 
                            onChange={this.changeName}
                            />
                        </div>

                        <div className="ed-item form__item">
                            <label >Correo electronico</label>
                            <input 
                            type="email" 
                            onChange={this.changeEmail}/>
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

    componentDidMount(){
        const elemento = document.getElementById("elemento")
        console.log(elemento)

        this.dateInterval=setInterval(() => {
            this.changeDate()
            console.log(new Date())
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState){
        //console.log(prevProps)
        //console.log(prevState)
        //console.log("------------")
    }
    componentWillUnmount(){
        clearInterval(this.dateInterval)
    }
}


export default Formulario;