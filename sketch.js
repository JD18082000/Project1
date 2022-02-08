var angle = 0;


var slider;
function setup() {
    createCanvas(windowWidth, windowHeight);
   
  }
  
  let value = 0;
  function draw() {
    background(51);
    angle = map (mouseX , 0, windowWidth, 0, PI /2);
    stroke(70, 40, 20);

    translate(windowWidth/2, height/2);
    for (var i = 0; i < 4; i++){
        push();
        rotate (TWO_PI * i / 4);
        branch(125);
        pop();
       }
      
  }


  //Click any point of the screen
  //the value of the ellipse
  //after the mouse has been clicked
  function mouseClicked(_branch) {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
      value = 225; 102; 179;
      value = 255; 255; 25;
      value = 255, 144; 110;
      noStroke();
    }
  }

 function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 10) {
        strokeWeight(map(len, 5, 80, 10, 10));
        stroke(70, 40, 20)
        push();
        rotate(angle);
        branch(len * 0.74);
        pop();
        push();
        rotate (-angle);
        branch (len * 0.74);
        pop();
    
   
    }
    else{
    var r = 0 + random(-20, 200);
    var g = 0 + random(-20, 200);
    var b = 10 + random(-20, 200);
    fill(r, g, b);
    noStroke()
    ellipse(0, 0, 10);
    }
    
  } 


  

    
  
 
    




    
    
  
 
    



