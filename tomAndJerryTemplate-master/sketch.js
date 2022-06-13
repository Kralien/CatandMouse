var cat, cat_start, cat_walking, cat_reach;

var mouse, mouse_cheese, mouse_taunt, mouse_caught;

var bg;

var GAMESTATE = "PLAY";

var font;

function preload() {
    //Cat
    cat_stand = loadImage("images/cat1.png");
    cat_walking = loadAnimation("images/cat2.png","images/cat3.png");
    cat_reach = loadImage("images/cat4.png");

    //Mouse
    mouse_cheese = loadImage("images/mouse1.png");
    mouse_taunt = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse_caught = loadImage("images/mouse4.png");

    //Background
    bg = loadImage("images/garden.png");

    //Font
    font = loadFont("pythago0.ttf");
}

function setup(){
    createCanvas(1000,800);
    
    //Cat Sprites.
    cat = createSprite(800, 650);
    cat.scale = 0.2;
    cat.addImage("Stand", cat_stand);
    cat.addAnimation("Walk", cat_walking);
    cat.addImage("Win", cat_reach);

    //Mouse Sprites.
    mouse = createSprite(100, 650);
    mouse.scale = 0.2;
    mouse.addImage("Cheese", mouse_cheese);
    mouse.addAnimation("Tease", mouse_taunt);
    mouse.addAnimation("Caught", mouse_caught);
}

function draw() {
    background(bg);

    if(GAMESTATE === "PLAY"){
    keyPressed();
    }

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    mouse.changeImage("Caught");

    cat.changeImage("Win");
    cat.velocityX = 0;
    
    GAMESTATE = "END";

    fill("black");
    textSize(20);
    textFont(font);
    text("PRESS R TO RESTART.", 500, 500,100,100);

    if(keyDown("r")){
    GAMESTATE = "PLAY"

    cat.x = 800;
    }
    }

    drawSprites();
}


function keyPressed(){
    if(keyDown(LEFT_ARROW)){
        mouse.changeAnimation("Tease");
        mouse.frameDelay = 25;

        cat.changeAnimation("Walk");
        cat.velocityX = -5;
    }
    else if(!(keyDown(LEFT_ARROW))){
        mouse.changeImage("Cheese");
        
        cat.changeImage("Stand");
        cat.velocityX = 0;
    }
}
