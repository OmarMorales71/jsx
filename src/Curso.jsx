import React from 'react'
/*const curso = {
  title: "React desde cero",
  img: "https://www.futbolred.com/files/article_main/files/crop/uploads/2018/05/26/5b09d2c02885b.r_1590520116395.0-4-680-344.jpeg",
  teacher: "George Eglinton",
  price:59

}*/


const Curso = ({title, img, price, teacher}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={img} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {title}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://www.diariogol.com/uploads/s1/65/43/57/2/cristiano-ronaldo.jpeg" alt="profesor" />
            </div>
          </div>
          <span className="small">{teacher}</span>
        </div>
      </div>
      <div className="s-main-center">
<a className="button--ghost-alert button--tiny" href="http://www.youtube.com">$ {price}USD</a>
      </div>
    </div>
  </article>
)

export default Curso;