import React from 'react'
import { Component } from 'react';
import axios from 'axios'
import UserGrid from '../Organisms/UserGrid';

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
            <UserGrid users={users}/>
        )
    }
}

export default Users