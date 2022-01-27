const canvas = document.querySelector("canvas")

canvas.width = 800
canvas.height = 800

const ctx = canvas.getContext("2d")

//ctx.fillStyle = "red"
ctx.fillStyle = "red"
//Drawing boxes objects
ctx.fillRect(100, 100, 100, 100)

ctx.fillStyle = "blue"
ctx.fillRect(400, 100, 100, 100)

ctx.fillStyle = "pink"
ctx.fillRect(250, 300, 100, 100)

//rectangle

ctx.fillStyle = "rgba(255, 0, 0, 0.5)"
ctx.fillRect (100, 500, 300, 150)

//line

ctx.beginPath()
ctx.moveTo(100, 500)
ctx.lineTo(500, 100)
ctx.lineTo(600, 600)
ctx.lineTo(100, 600)
ctx.lineTo(100, 500)
ctx.strokeStyle = "purple"
ctx.stroke()

//circle
/*
ctx.beginPath()
ctx.arc(500, 500, 60, 0, Math.PI * 2, false)
ctx.stroke()

ctx.beginPath()
ctx.arc(500, 500, 100, 0, Math.PI * 2, false)
ctx.strokeStyle = "blue"
ctx.stroke()

ctx.beginPath()
ctx.arc(500, 500, 200, 0, Math.PI * 2, false)
ctx.strokeStyle = "red"
ctx.stroke() */

// To make different circles easier
for (let i = 0; i < 50; i++) {

    let x = Math.random() * canvas.width
    let y = Math.random() * canvas.height

    ctx.beginPath()
    ctx.arc(x, 100, 100, 0, Math.PI * 2, false)
    ctx.strokeStyle = "brown"
    ctx.stroke()


    ctx.beginPath()
    ctx.arc(100, y, 100, 0, Math.PI * 2, false)
    ctx.strokeStyle = "brown"
    ctx.stroke()

    
}


