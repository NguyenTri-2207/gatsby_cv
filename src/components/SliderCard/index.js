import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Card from "../Card"
import "./index.scss"
import dataCards from "../data.js"
const dataCard = dataCards
const carouselProjectPersonal = dataCard
  .filter(items => items.project === "personal")
  .map(item => {
    return (
      <div>
        <Card key={item.id} img={item.img} title={item.title} />
      </div>
    )
  })
const carouselProjectCompany = dataCard
  .filter(items => items.project === "company")
  .map(item => {
    return (
      <div>
        <Card key={item.id} img={item.img} title={item.title} />
      </div>
    )
  })
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "30px" }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    />
  )
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
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className="slider_carousel">
        <div className="slider_personal">
          <div className="slider_title"> Project Personal</div>
          <Slider {...settings}>{carouselProjectPersonal}</Slider>
        </div>
        <div className="slider_company">
          <div  className="slider_title"> Project Company</div>
          <Slider {...settings}>{carouselProjectCompany}</Slider>
        </div>
      </div>
    )
  }
}
