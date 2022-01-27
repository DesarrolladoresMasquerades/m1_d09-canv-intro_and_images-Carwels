console.log("JS Loaded")

const canvas = document.getElementById("canvas")

//abstraction, function declared as variable
const getWindowWidth = () => canvas.width = window.innerWidth
const getWindowHeight = () => canvas.height = window.innerHeight

const resizeCanvasToWindow= () => {
    canvas.width = getWindowWidth()
    canvas.height = getWindowHeight()
}

resizeCanvasToWindow()

const ctx = canvas.getContext("2d")
//This rectangle will move with the canvas
const sillyRectangle = { 
    "ctx": ctx,
    draw() {
        this.ctx.fillRect(canvas.width/2, canvas.height/2, (canvas.width/2) -50, (canvas.height/2) -50)
    }
}
/*
window.addEventListener(
    "resize",
    () => {
    resizeCanvasToWindow();
    sillyRectangle.draw()
    }
) */

// Like this we get a permanent pen
window.addEventListener(
    "mousemove",
    (event) => {
        console.log("mouse coordinates: ", event.clientX, event.clientY)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        //ctx.beginPath()
        //ctx.moveTo(0, 0)
        ctx.lineTo(event.clientX, event.clientY)
        ctx.stroke()
        //ctx.closePath()
    }
) 

