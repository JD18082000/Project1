var angle = 0;


var slider;
function setup() {
    createCanvas(windowWidth, windowHeight);
    slider =  createSlider(0, PI / 2, PI / 4, 0.01);
  }
  
  function draw() {
    background(51);
    angle = slider.value();
    stroke(70, 40, 20);

    translate(windowWidth/2, height/2);
    for (var i = 0; i < 4; i++){
        push();
        rotate (TWO_PI * i / 4);
        branch(125);
        pop();
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
    
   
    }else{
    var r = 70 + random(-20, 20);
    var g = 200 + random(-20, 20);
    var b = 40 + random(-20, 20);
    fill(r, g, b);
    noStroke()
    ellipse(0, 0, 10);
    }
    
  } 
    
    
  
 
    



