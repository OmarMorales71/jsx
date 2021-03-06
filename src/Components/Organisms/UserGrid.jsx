import React from 'react'
import UserCard from '../Molecules/UserCard'
import withLoader from '../HOC/withLoader'
const UserGrid = ({ users }) => (
    <div className="ed-grid">
        <h1>Usuarios</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
            {users.length !== 0
                ? users.map(u => (<UserCard key={u.id} name={u.name} username={u.username} email={u.email} />))
                : <h1 className="t3">Cargando...</h1>}

        </div>
    </div>
)

export default withLoader("users", UserGrid)