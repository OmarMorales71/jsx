import React, { Component } from 'react'

class Form extends Component { //Extiende de React.Component

    //Enviar las props a la clase Component
    //Constructor solo se construye si tenemos props
    constructor(props) {
        super(props)
        
        //El estado del componente
        this.state = {
            name: "",
            email: "",
            date: new Date()
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
            name: e.target.value 
        })
    }

    changeEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    
    changeDate(){
        this.setState({
            date: new Date()
        })
    }

    
    render() {
        return (
            <div className='ed-grid'>
                <h1>Formulario {this.props.title}</h1>
                <h4>{this.state.date.getHours() + ":"+this.state.date.getMinutes()+":"+this.state.date.getSeconds()}</h4>
                <form className="ed-container form__item" id="element" >
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
                        {`Hola ${this.state.name}`}
                    </h2>
                    <span>{`Tu correo es: ${this.state.email}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount(){
        const element = document.getElementById("element")
        console.log(element)

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


export default Form;