import { useState } from 'react';
import './stopwatch.css';

function Stopwatch() {
    const [time] = useState(0);
    const [button, setButton] = useState("green");
    const [buttonType, setButtonType] = useState("Start");

    // Basic event handler using standard event properties
    const handleMouseMove = (e:any) => {
        // e.nativeEvent.offsetX and offsetY give relative cursor positions directly
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        console.log(x,y)
        // Set CSS variables on the element that fired the event
        e.currentTarget.style.setProperty('--x', `${x}px`);
        e.currentTarget.style.setProperty('--y', `${y}px`);
    };

    return (
        <div className="stopwatch-container">
            <div 
                className="stopwatch-frame"
                onMouseMove={handleMouseMove}
            >
                <div className="stopwatch-timer">
                    {time}
                </div>
                <button 
                    className="stopwatch-button"
                    style={{ backgroundColor: button }}
                    onClick={() => {
                        if (button === "green") {
                            setButton("red");
                            setButtonType("Stop");
                        } else {
                            setButton("green");
                            setButtonType("Start");
                        }
                    }}
                >
                    {buttonType}
                </button>
            </div>
        </div>
    );
}

export default Stopwatch;