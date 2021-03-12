import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./index.scss"

const Card = ({title, img}) => (
    <div className="card">
        <img className="card_img" src={img} alt={title}/>
        <div className="card_content">
        <div className="card_title">{title}</div>
        <div className="card_des">Đây là cách sử dụng slick trong class component. Các Api được setting trong một biến sau đó component Slider sẽ sử dụng nó đối với các thẻ bên trong nó.</div>
        </div>
    </div>
);
export default Card;