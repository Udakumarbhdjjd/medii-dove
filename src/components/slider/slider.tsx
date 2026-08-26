
import './slider.css'

function Slider({ currentSlide, setCurrentSlide }: any) {

    function nextSlider() {
        if (currentSlide === 4) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)

        }

    }
    function preSlider() {
        if (currentSlide === 0) {
            setCurrentSlide(4)
        } else {
            setCurrentSlide(currentSlide - 1)
        }

    }

    return (
        <>
            <div className="slider">
                <div className="track" style={{ transform: `translateX(-${currentSlide * 270}px)` }}>
                    <div className="item1">1</div>
                    <div className="item2">2</div>
                    <div className="item3">3</div>
                    <div className="item1">4</div>
                    <div className="item2">5</div>
                    <div className="item3">6</div>
                </div>

            </div>
            <div className="slider-btn">
                <button className="slider-right-btn" onClick={preSlider}>{"<"}</button>
                <button className="slider-right-btn" onClick={nextSlider}>{">"}</button>
            </div>
        </>
    )
}
export default Slider;