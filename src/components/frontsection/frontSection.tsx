
import { useState } from "react";
import Slider from "../slider/slider";
import "./frontSetion.css"

function FrontSection() {

    const backgroundimg = [
        {
            bgimage: "https://medi-dove.netlify.app/static/media/slider-bg-2in1.a274526164db40a919cb.jpg",
            size: "130%",
            position: "left top"

        }, {
            bgimage: "https://images.pexels.com/photos/7446987/pexels-photo-7446987.jpeg",
            size: "120%",
            position: "left top "

        }, {
            bgimage: "https://images.pexels.com/photos/7108267/pexels-photo-7108267.jpeg",
            size: "120%",
            position: "left top"

        }, {
            bgimage: "https://images.pexels.com/photos/19438563/pexels-photo-19438563.jpeg",
            size: "130%",
            position: "left top"

        }, {
            bgimage: "https://images.pexels.com/photos/7108277/pexels-photo-7108277.jpeg",
            size: "135%",
            position: "left top "

        },
    ]
    const [currentSlide, setCurrentSlide] = useState(0);
    console.log(currentSlide)



    return (
        <>
            <div className="front-section-wrapper" >
                <div className="bg-image" style={{
                    backgroundImage: `url(${backgroundimg[currentSlide].bgimage})`,
                    transition: 'background-image 0.5s', backgroundPosition: `${backgroundimg[currentSlide].position}`,
                    backgroundSize: `${backgroundimg[currentSlide].size}`
                }}></div>
                <div className="front-section">

                    <div className="front-section-left-wrapper"></div>

                    <div className="front-section-right-wrapper">
                        <Slider currentSlide={currentSlide}
                            setCurrentSlide={setCurrentSlide} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default FrontSection;