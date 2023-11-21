AvengersTheme="",
HarryPotterTheme="";

function preload(){
AvengersTheme = loadSound("Avengers-Theme.mp3");
HarryPotterTheme = loadSound("Harry-Potter-Theme.mp3");
HarryPotterTheme.play();

}

function setup(){
  canvas = createCanvas(420,420);

  video = createCapture(VIDEO);
  image(video,420,420,500,450);

}