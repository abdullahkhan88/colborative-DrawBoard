import React from 'react';
import './Drawboard.css';

const Drawboard = () => {
    return (
        <div className="container">
            <section className="tools-board">
                <div className="row">
                    <label className="title">Shapes</label>
                    <ul className="options">
                        <li className="option tool" id="rectangle">
                            <img src="icons/rectangle.svg" alt="" />
                            <span>Ractangle</span>
                        </li>
                        <li className="option tool" id="circle">
                            <img src="icons/circle.svg" alt="" />
                            <span>Circle</span>
                        </li>
                        <li className="option tool" id="triangle">
                            <img src="icons/triangle.svg" alt="" />
                            <span>Triangle</span>
                        </li>
                        <li className="option">
                            <input type="checkbox" id="fill-color" />
                            <label htmlFor="fill-color">Fill Color</label>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <label className="title">Options</label>
                    <ul className="options">
                        <li className="option active tool" id="brush">
                            <img src="icons/brush.svg" alt="" />
                            <span>Brush</span>
                        </li>
                        <li className="option tool" id="eraser">
                            <img src="icons/eraser.svg" alt="" />
                            <span>Eraser</span>
                        </li>
                        <li className="option">
                            <input
                                type="range"
                                id="size-slider"
                                min={1}
                                max={30}
                                defaultValue={5}
                            />
                        </li>
                    </ul>
                </div>
                <div className="row colors">
                    <label className="title">Colors</label>
                    <ul className="options">
                        <li className="option" />
                        <li className="option selected" />
                        <li className="option" />
                        <li className="option" />
                        <li className="option">
                            <input type="color" id="color-picker" defaultValue="#4A98F7" />
                        </li>
                    </ul>
                </div>
                <div className="row button">
                    <button className="clear-canvas">Clear Canvas</button>
                    <button className="Save-img">Save As Image</button>
                </div>
            </section>
            <section className="drawing-board">
                <canvas />
            </section>
        </div>

    )
}

export default Drawboard