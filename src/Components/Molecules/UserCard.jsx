import React from 'react'

const UserCard=({name, username, email})=>(

<article className="card">
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {name}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://www.diariogol.com/uploads/s1/65/43/57/2/cristiano-ronaldo.jpeg" alt="profesor" />
            </div>
          </div>
          <span className="small">{username}</span>
        </div>
      </div>
      <div className="s-main-center">
<a className="button--ghost-alert button--tiny" href="http://www.youtube.com">{email}</a>
      </div>
    </div>
  </article>
)

export default UserCard