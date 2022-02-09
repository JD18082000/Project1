var angle = 0;


var slider;
function setup() {
    createCanvas(windowWidth, windowHeight);
    alert('Fractal Tree Snowflake: mouse drag Horizontal to expand the snowflake, the further left of mouse dragged the more the snowflake expanded. Further to the right, the snowflake begins to close.')

   
  }
  
  let value = 0;
  function draw() {
    background(51);
    angle = map (mouseX, 0, windowHeight, 0, PI /2);
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
        
    
   
    }
    else{    
    var r = 0 + random(-20, 200);
    var g = 0 + random(-20, 200);
    var b = 0 + random(-20, 200);
    fill(r, g, b)
    noStroke()
    ellipse(0, 0, 10);
    }
    
  }


    
  
 
    




    
    
  
 
    



