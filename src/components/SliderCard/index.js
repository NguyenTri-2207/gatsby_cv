import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Card from "../Card"
import "./index.scss"
const dataCard = [
  {
    id: 1,
    title: "Product Web Phone",
    img:
      "https://images.unsplash.com/photo-1613998869077-9722f4c53d8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    id: 2,
    title: "Dự án 2",
    img: 'https://images.unsplash.com/photo-1550332781-aecd27f7434f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    id: 3,
    title: "Dự án 3",
    img: "https://images.unsplash.com/photo-1565330920272-5a702db19111?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    id: 4,
    title: "Dự án 4",
    img: "https://images.unsplash.com/photo-1608655148808-a2623387c4cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    id: 5,
    title: "Dự án 5",
    img: "https://images.unsplash.com/photo-1613862445274-31ce9c920238?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=308&q=80",
  },
]
const carouselIndex = dataCard.map(function (item) {
  return (
    <div>
      <Card key={item.id} img={item.img} title={item.title} />
    </div>
  )
})
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "30px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "-50px" }}
        onClick={onClick}
      />
    );
  }
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
    }
    return (
      <div className="slider_carousel">
        <h2> Dự Án Cá Nhân</h2>
        <Slider  {...settings}>
          {carouselIndex}
        </Slider>   
      </div>
    )
  }
}
