console.log("fireball loaded")

const canvas = document.getElementById("canvas");


canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d");

const fireball = new Image()
fireball.src = "images/fireBall.png"
/*
fireball.addEventListener(
    "load",
    ()=>ctx.drawImage(
    fireball,
    250, 0,
    100,100,
    0,0,
    100, 100
)
)*/
//have to use objects
let frameNumber

const ondaEnergetica = {

    animating: false,
    img: fireball,
    x: 0,
    y: 0,

    draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height); //always clear rectangle
        //this.x += canvas.width/600; this.y += canvas.height/600//this is the speed
// this if stops the image if touch the end of canvas
        if(this.x > canvas.width || this.y > canvas.height)
        this.x = this.y = 0

        ctx.drawImage(
            fireball,
            250, 0,
            100,100,
            this.x-95, this.y-35, // In this -95 and -35 centers the click to the image
            100, 100
            )
            if (this.animating) {
                frameNumber = requestAnimationFrame(this.draw.bind(this))
            }
        },
}

/*fireball.addEventListener(
    "load",
    ()=>ondaEnergetica.draw()
)*/
/*
canvas.addEventListener(
    "click",
    () => {
        console.log("canvas clicked")
        ondaEnergetica.animating = !ondaEnergetica.animating
        ondaEnergetica.draw()
    }
    )*/

    canvas.addEventListener(
        "mousemove",
        (event) => {
            ondaEnergetica.animating = !ondaEnergetica.animating
            ondaEnergetica.x = event.clientX
            ondaEnergetica.y = event.clientY
            ondaEnergetica.draw()
        }
    ) 