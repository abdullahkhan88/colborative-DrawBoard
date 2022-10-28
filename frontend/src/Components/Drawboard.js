import React, { useEffect, useRef, useState } from 'react';
import './Drawboard.css';

const Drawboard = () => {

    const [ctx, setCtx] = useState(null);
    const [canvas, setCanvas] = useState(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [brushWidth, setBrushWidth] = useState(5);
    const [selTool, setSelTool] = useState('brush');
    const [mousePos, setMousePos] = useState({x : null, y: null});
    const [snapshot, setSnapshot] = useState(null);

    const [selColor, setSelColor] = useState('#000')

    useEffect(() => {
        let can = document.querySelector('canvas');
        setCanvas(can);
        // console.log(can);
        let tempCTX = can.getContext('2d');
        
        tempCTX.fillStyle = "#fff";
        tempCTX.fillRect(0, 0, can.offsetWidth, can.offsetHeight);
        tempCTX.fillStyle = selColor;
        setCtx(tempCTX);
       
        let preMouseX, preMouseY, snapshot;
        can.addEventListener("mousedown",e => startDraw(e, can, tempCTX));
        can.addEventListener("mouseup",stopDraw);
        can.addEventListener("mousemove",e => drawing(e, can, tempCTX));

    }, [])

    const startDraw = (e, canvas, ctx) =>{
        setIsDrawing(true);
        setMousePos({x : e.offsetX, y : e.offsetY})
        // console.log(ctx);
        ctx.beginPath(); //create new path to draw
        ctx.lineWidth = brushWidth ; //passing Brushsize as line width
        setSnapshot(ctx.getImageData(0, 0, canvas.width, canvas.height))
        
        ctx.strokeStyle = selColor;
        ctx.fillStyle = selColor;
    
    }
    const stopDraw = () =>{
        setIsDrawing(false);
    }
    
    const drawing = (e, canvas, ctx) =>{
        if(!isDrawing) return; // isDrawing is false return from here
        ctx.putImageData(snapshot, 0, 0);
        if(selTool === "brush" || selTool === "eraser"){
            ctx.strokeStyle = selTool === "eraser" ? "#fff" : selColor;
            ctx.lineTo(e.offsetX, e.offsetY);// creating line According to the mouse pointer
            ctx.stroke();// drawing /filling line width color
    
        } else if(selTool === "rectangle"){
            document.body.style.cursor="col-resize";
            // drawRect(e);
        } else if(selTool === "circle"){
            // drawCircle(e);
        } else if(selTool === "triangle"){
            // drawTriangle(e);
        }
    
    }

    // const drawRect = (e) => {
    //     if(fillColor.checked){
    //         return ctx.fillRect(e.offsetX, e.offsetY, preMouseX - e.offsetX, preMouseY - e.offsetY);  
    //     }
    //     ctx.strokeRect(e.offsetX, e.offsetY, preMouseX - e.offsetX, preMouseY - e.offsetY);
    // }


    

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