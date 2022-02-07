var angle = 0;


var slider;
function setup() {
    createCanvas(800, 800);
    slider =  createSlider(0, PI / 2, PI / 4, 0.01);
  }
  
  function draw() {
    background(51);
    angle = slider.value();
    stroke(70, 40, 20);
    translate(400, height); 
    branch(125);
    
  
  }


  function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 5) {
        strokeWeight(map(len, 10, 100, 3, 20));
        stroke(70, 40, 20)
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate (-angle);
        branch (len * 0.67);
        pop();
   
    }else{
     ellipse(0, 0, 10);
    }
  
    

  }
    //line (0 , 0, 0, -len * 0.67);
  
  

  
    
