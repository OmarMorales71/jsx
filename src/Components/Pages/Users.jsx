import React from 'react'
import { Component } from 'react';
import UserCard from '../Molecules/UserCard';
import axios from 'axios'

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        //fetch()
        /*let response = await fetch('https://jsonplaceholder.typicode.com/users', { method: 'get' })
        if (response.status === 200) {
            let responseJson = await response.json()
            this.setState({
                users: responseJson
            })
        }*/

        //axios
        let response = await axios.get('https://jsonplaceholder.typicode.com/users') 
        console.log(response)
        if(response.status===200){
            this.setState({
                users: response.data
            })
        }
    }

    componentDidUpdate(){
        console.log('Update')
    }

    render() {
        const {users}  = this.state
        return (
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                    {users.map(u => (<UserCard key={u.id} name={u.name} username={u.username} email={u.email} />))}

                </div>
            </div>
        )
    }
}

export default Users