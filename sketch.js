let frames = 360;
let counter =0;

function setup(){
  createCanvas(400,400);
  //colorMode(HSB,359)
  rectMode(CENTER);
}


function draw(){
 let percent = counter / frames;
 render(percent);
 //print(percent);
 counter++;
 if(counter == frames){
  counter =0; 

   }
}


function render(percent){
 background(0);
 //ellipse(percent*width,height/2,20,20);
 
 noFill();
 strokeWeight(3);
 let angle = percent * TWO_PI;
 stroke(255,255,0);
 push();
 translate(width/2,height/2);
 rotate(angle);
 square(0,0,200*((sin(angle))));
 pop()
 let x = map(angle,0,TWO_PI,-15,width+15); // make it a little longer
 ellipse(x,height/2,30,30)

 
}


function keyPressed() {
  // this will download the first 5 seconds of the animation!
  print("bing")
  if (key === 's') {
    const options = {
      units:"frames",
      delay:0
      
    }
    saveGif('mysquare6.gif', frames,options);
  }
}