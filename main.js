function preload(){
    img = loadImage('dog_cat.jpg')
}


function setup(){
    canvas = createCanvas(640,420)
    canvas.center()
}

function draw(){
    Image(img,0,0,640,420)
    fill('red');
    text('dog',45 ,75)
    noFill()
    stroke('red');
    rect(80,80,250,250)


}

