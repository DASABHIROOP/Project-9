var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,10,10);
  background(51);
}

function draw() 
{
if (keyIsDown(DOWN_ARROW)){
    background('red');
}

if (keyIsDown(UP_ARROW)){
  background('blue');
}
drawSprites();
}




