//darkness of the house colors(0,20)
//range of blue
//the wave particle effects
//windows yellow , on hover glow
//arcs for hills
let startAngle;
let totalCount = 30;
let angShift;
let myAngle=0;

function setup() {
  createCanvas(500, 400);
  frameRate(2);
  background(220, 2);
  startAngle = 0;
}

function draw() {
  background("#0056F3");
 


  let r1;
  r1 = random(-1, 1);
  
    for(let c=0; c<20; c=c+1) {
  
  push()
          stroke("#A9E6EF");
    rect(c*10,cos(startAngle + map(c, 0,10, 80,80*2))*40+0, 6,1,50); 
      
    rect(c*8,cos(startAngle + map(c, 0,10, 80,80*2))*40+10, 6,1,50); 
    rect(c*6+250,cos(startAngle + map(c, 0,10, 80,80*2))*40+0, 6,1,50); 
    rect(c*10+250,cos(startAngle + map(c, 0,10, 80,80*2))*40+10, 6,1,50);
      
       stroke("#A9E6EF");

    rect(c*10,cos(startAngle + map(c, 0,10, 80,80*2))*40+100, 6,1,50); 
      
    rect(c*8,cos(startAngle + map(c, 0,10, 80,80*2))*40+110, 6,1,50); 
    rect(c*6,cos(startAngle + map(c, 0,10, 80,80*2))*40+120, 6,1,50); 
    rect(c*10+250,cos(startAngle + map(c, 0,10, 80,80*2))*40+130, 6,1,50);
    rect(c*6+250,cos(startAngle + map(c, 0,10, 80,80*2))*40+140, 6,1,50); 
    rect(c*4+250,cos(startAngle + map(c, 0,10, 80,80*2))*40+140, 6,1,50);
    fill("#89CFF0");
        
    rect(c*1,cos(startAngle + map(c, 0,10, 10,PI*2))*100+100, 6,1,50);
    rect(c*70+2, cos(startAngle + map(c, 0,10, 10,10*2))*100+100, 6,1,50);
  pop()
    }
  push()
  colorMode(HSB,100)
  translate(240, 100);
   rotate(myAngle);

  noStroke();
    fill("#89CFF0");
  
  for (let b = 0; b < totalCount; b = b + 1) {
    rotate(myAngle);
    // fill(map(b, 0, totalCount, 50, 40));
    for (let a = 0; a < totalCount+b; a = a + 1) {
       //angShift = (PI * 2) / (totalCount*b);
      //rotate(angShift);
      rect(b*2, 5, b/3,2+b%2,50);
      rect(b*2+10, 5, b/3,2+b%2,50);
      rect(b*2-10, 5, b/3,2+b%2,50);
      rect(b*2-15, 5, b/3,2+b%2,50);
      
     // ellipse(b*20+20, 0, 10+b);
    }
  }
  myAngle = myAngle+0.005;
  pop()
    push()
  colorMode(HSB,100)
translate(310, 140);
   rotate(myAngle);

  noStroke();
    fill("#89CFF0");
  
  for (let b = 0; b < totalCount; b = b + 1) {
    rotate(myAngle);
    // fill(map(b, 0, totalCount, 50, 40));
    for (let a = 0; a < totalCount+b; a = a + 1) {
       //angShift = (PI * 2) / (totalCount*b);
      //rotate(angShift);
      //rect(b*2, 5, b/5,2+b%2,50);
      //rect(b*2+10, 5, b/5,2+b%2,50);
      rect(b*2-10, 5, b/5,2+b%2,50);
      rect(b*2-15, 5, b/5,2+b%2,50);
      
      
      
      
     // ellipse(b*20+20, 0, 10+b);
    }
  }
  myAngle = myAngle+0.005;
  pop()
  //sky start
  push();
  strokeWeight(2)
  stroke("#6495ED");

    for(let c=0; c<20; c=c+1) {
      //wavessss
      push()
            stroke("#F0FFFF");
      rect(c*10+6, cos(startAngle + map(c, 0,20, 0,PI*2))*40+100, 6,1,50);
    rect(c*10+15, cos(startAngle + map(c, 0,20, 0,PI*2))*40+100, 6,1,50);
    rect(c*10+35, cos(startAngle + map(c, 0,20, 0,PI*2))*40+100, 6,1,50);
    rect(c*10+45, cos(startAngle + map(c, 0,20, 0,PI*2))*40+100, 6,1,50);
    rect(c*10+55, cos(startAngle + map(c, 0,20, 0,PI*2))*40+120, 6,1,50);
    rect(c*10+65, cos(startAngle + map(c, 0,20, 0,PI*2))*40+130, 6,1,50);
      
    if(c>5){
      rect(c*8+157, cos(startAngle + map(c, 0,15, 0,PI*2))*30+132, 3,1,50);
    rect(c*8+159, cos(startAngle + map(c, 0,15, 0,PI*2))*30+135, 3,1,50);
    rect(c*8+162, cos(startAngle + map(c, 0,15, 0,PI*2))*30+135, 3,1,50);
    rect(c*8+174, cos(startAngle + map(c, 0,15, 0,PI*2))*30+135, 3,1,50);
    rect(c*8+188, cos(startAngle + map(c, 0,15, 0,PI*2))*30+145, 3,1,50);}
    stroke("#89CFF0");

      
        rect(c*10+2, cos(startAngle + map(c, 0,20, 0,PI*2))*40+100, 6,1,50);
    rect(c*10+10, cos(startAngle + map(c, 0,20, 0,PI*2))*40+100, 6,1,50);
    rect(c*10+30, cos(startAngle + map(c, 0,20, 0,PI*2))*40+100, 6,1,50);
    rect(c*10+40, cos(startAngle + map(c, 0,20, 0,PI*2))*40+100, 6,1,50);
    rect(c*10+50, cos(startAngle + map(c, 0,20, 0,PI*2))*40+120, 6,1,50);
    rect(c*10+60, cos(startAngle + map(c, 0,20, 0,PI*2))*40+130, 6,1,50);

 
      
    if(c>5){
    rect(c*8+150, cos(startAngle + map(c, 0,15, 0,PI*2))*30+135, 3,1,50);
    rect(c*8+155, cos(startAngle + map(c, 0,15, 0,PI*2))*30+135, 3,1,50);
    rect(c*8+165, cos(startAngle + map(c, 0,15, 0,PI*2))*30+135, 3,1,50);
    rect(c*8+170, cos(startAngle + map(c, 0,15, 0,PI*2))*30+135, 3,1,50);
    rect(c*8+180, cos(startAngle + map(c, 0,15, 0,PI*2))*30+145, 3,1,50);}

      

      pop()
      //waves
    rect(c*20+2, cos(startAngle + map(c, 0,20, PI,PI*2))*100+100, 6,1,50);
    rect(c*20+20, cos(startAngle + map(c, 0,20, PI,PI*2))*100+100, 6,1,50);
      
    rect(c*10+2, cos(startAngle + map(c, 0,20, PI,PI*2))*100+100, 6,1,50);
    rect(c*10+20, cos(startAngle + map(c, 0,20, PI,PI*2))*100+100, 6,1,50);
      //wavesss
    
    for(let c=0; c<50; c=c+1) {
      
    push()
      
    stroke("#00008B");
    rect(c*10, cos(startAngle + map(c, 0,10, 10,PI*2))*100+20, 6,1,50);
    // rect(c*1, cos(startAngle + map(c, 0,10, 10,10*2))*100+100, 6,1,50);
      
    rect(c*1,cos(startAngle + map(c, 0,10, 10,PI*2))*100+100, 6,1,50);
    rect(c*70+2, cos(startAngle + map(c, 0,10, 10,10*2))*100+100, 6,1,50);
            
    rect(c*20,cos(startAngle + map(c, 0,10, 80,80*2))*40+10, 6,1,50);  
    rect(c*30,cos(startAngle + map(c, 0,10, 80,80*2))*40+40, 6,1,50); 
    rect(c*390,cos(startAngle + map(c, 0,10, 10,PI*2))*100+100, 6,1,50);
    rect(c+380,cos(startAngle + map(c, 0,10, 10,PI*2))*100+20, 6,1,50);
    rect(c+490,cos(startAngle + map(c, 0,10, 10,PI*2))*100+20, 6,1,50);
    rect(c+480,cos(startAngle + map(c, 0,10, 10,PI*2))*100+30, 6,1,50);
    rect(c+380,cos(startAngle + map(c, 0,10, 10,PI*2))*100+50, 6,1,50);
      
      
      
      
      
    
    stroke("#6F8FAF");
    rect( cos(startAngle + map(c, 0,20, PI,PI*2))*100+180,c*2-20, 6,1,50);
    rect( cos(startAngle + map(c, 0,20, 10,10*2))*100+180,c*2-30, 6,1,50);
    rect(c+370,cos(startAngle + map(c, 0,10, 10,PI*2))*100+20, 6,1,50);
      
      

          stroke("#efe198");
    rect(c*10+50,cos(startAngle + map(c, 0,10, 80,80*2))*40+270, 6,1,50); 
    rect(c+480,cos(startAngle + map(c, 0,10, 10,PI*2))*100+100, 6,1,50);
      
      
    rect(c*8+100,sin(startAngle + map(c, 0,10, 80,80*2))*40+240, 6,1,50); 
    rect(c*6+140,sin(startAngle + map(c, 0,10, 80,80*2))*40+230, 6,1,50); 
    rect(c*6+150,sin(startAngle + map(c, 0,10, 80,80*2))*40+230, 6,1,50); 
    rect(c*6+160,sin(startAngle + map(c, 0,10, 80,80*2))*40+230, 6,1,50); 
    rect(c*6+140,sin(startAngle + map(c, 0,10, 80,80*2))*40+200, 6,1,50); 
      
      
    rect(c*4+120,sin(startAngle + map(c, 0,10, 80,80*2))*40+220, 6,1,50); 
    rect(c*5+70,sin(startAngle + map(c, 0,10, 80,80*2))*40+280, 6,1,50); 
    rect(c*4+30,sin(startAngle + map(c, 0,10, 80,80*2))*40+250, 6,1,50); 
      
             stroke("#6495ED");
    rect(c*10,cos(startAngle + map(c, 0,10, 80,80*2))*40+200, 6,1,50); 
    rect(c+470,cos(startAngle + map(c, 0,10, 10,PI*2))*100+100, 6,1,50);
    rect(c+380,cos(startAngle + map(c, 0,10, 10,PI*2))*100+90, 6,1,50);
    rect(c+400,cos(startAngle + map(c, 0,10, 10,PI*2))*100+80, 6,1,50);
      
      
      
    rect(c*8,sin(startAngle + map(c, 0,10, 80,80*2))*40+240, 6,1,50); 
    rect(c*6,sin(startAngle + map(c, 0,10, 80,80*2))*40+230, 6,1,50); 
    stroke("#00008B");
      
    rect(c*4,sin(startAngle + map(c, 0,10, 80,80*2))*40+220, 6,1,50); 
    stroke("#6F8FAF");
    
    rect(c*5,sin(startAngle + map(c, 0,10, 80,80*2))*40+200, 6,1,50); 
    rect(c*4,sin(startAngle + map(c, 0,10, 80,80*2))*40+210, 6,1,50); 
 
      
    stroke("#6495ED");
    rect(c*10,cos(startAngle + map(c, 0,10, 80,80*2))*40+200, 6,1,50); 
      
    rect(c*8,cos(startAngle + map(c, 0,10, 80,80*2))*40+240, 6,1,50); 
    rect(c*6,cos(startAngle + map(c, 0,10, 80,80*2))*40+230, 6,1,50); 
    rect(c*4,cos(startAngle + map(c, 0,10, 80,80*2))*40+220, 6,1,50); 
    rect(c*4,cos(startAngle + map(c, 0,10, 80,80*2))*40+210, 6,1,50); 
    rect(c*5,cos(startAngle + map(c, 0,10, 80,80*2))*40+200, 6,1,50); 
          
    stroke("#F0FFFF");
  
      
      
    
    pop()
      
    }  
  }
  startAngle = startAngle+0.1;

//   for (let c = 0; c < 20; c = c + 1) {
//     let x = c * c + 5;

//     let y = map(c, 0, 150, 70, 420);
//     bezier(585, 20 + y + x, mouseX + 10 + x, mouseY+ 10 + y, 90 + x, 90 + y, -45, 50);
//   }

//   stroke("#6495ED");

//   for (let c = 0; c < 40; c = c + 1) {
//     let x = c * c + 5;
//     //let x=map(c, 0, 20, 50, 350);

//     let y = map(c, 0, 150, 70, 420);
//     bezier(585, 20 + y + x, mouseX + x, 10 + y, 90 + x, 90 + y, -65, 80);
//   }
//   stroke("#00008B");

//   for (let c = 0; c < 40; c = c + 1) {
//     let x = c * c + 5;
//     //let x=map(c, 0, 20, 50, 350);

//     let y = map(c, 0, 250, 170, 420);
//     bezier(585, 0, mouseY + 10 + x, 10 + y, 90 + x, 90 + y, -75, 80);
//   }
//   stroke("#6F8FAF");

//   for (let c = 0; c < 40; c = c + 1) {
//     let x = c * c + 5;
//     //let x=map(c, 0, 20, 50, 350);

//     let y = map(c, 0, 30, 40, 20);
//     bezier(500, 1, mouseY + 10 + x, 10 + y, 70 + x, 70 + y, -90, 20);
//   }
//   stroke("rgb(20, 52, 164)");

//   for (let c = 0; c < 40; c = c + 1) {
//     let x = c * c + 5;
//     //let x=map(c, 0, 20, 50, 350);

//     let y = map(c, 0, 30, 40, 200);
//     bezier(500, 10, mouseY + 10 + x, 10 + y, 70 + x, 70 + y, -10, 20);
//   }
//   stroke("#0000FF");

//   for (let c = 0; c < 20; c = c + 1) {
//     let x = c * c + 5;
//     //let x=map(c, 0, 20, 50, 350);

//     let y = map(c, 0, 150, 70, 420);
//     bezier(585, 0, mouseX + 10 + x, 10 + y, 90 + x, 90 + y, -150, 180);
//   }

//   stroke("#0000FF");

//   for (let c = 0; c < 20; c = c + 1) {
//     let x = c * c + 5;
//     //let x=map(c, 0, 20, 50, 350);

//     let y = map(c, 0, 150, 70, 420);
//     bezier(485, 250, mouseX + 10 + x, 10 + y, 90 + x, 90 + y, -120, 200);
//   }

//   stroke("#F0FFFF");
//   for (let c = 0; c < 20; c = c + 1) {
//     let x = c * c + 5;
//     //let x=map(c, 0, 20, 50, 350);

//     let y = map(c, 0, 150, 70, 420);
//     bezier(485, 250, mouseX + 10 + x, 10 + y, 90 + x, 90 + y, -30, 200);
//   }

//   stroke("#EFE198");
//   for (let c = 0; c < 90; c = c + 1) {
//     let x = c * c + 5;
//     //let x=map(c, 0, 20, 50, 350);

//     let y = map(c, 0, 150, 70, 420);
//     bezier(195, 250, mouseX + 20 + x, 10 + y, 90 + x, 90 + y, -130, 200);
//   }

//   stroke("#6F8FAF");
//   for (let c = 0; c < 90; c = c + 1) {
//     let x = c * c + 5;
//     //let x=map(c, 0, 20, 50, 350);

//     let y = map(c, 0, 150, 70, 420);
//     bezier(95, 125, mouseX + 20 + x, 10 + y, 90 + x, 90 + y, -120, 250);
//   }

//   stroke("#6495ED");
//   for (let c = 0; c < 90; c = c + 1) {
//     let x = c * c + 5;
//     //let x=map(c, 0, 20, 50, 350);

//     let y = map(c, 0, 150, 70, 420);
//     bezier(105, 125, mouseX + 20 + x, 10 + y, 90 + x, 90 + y, -40, 320);
//   }

//   stroke("#F0FFFF");

//   for (let c = 0; c < 40; c = c + 1) {
//     let x = c * c + 5;
//     //let x=map(c, 0, 20, 50, 350);

//     let y = map(c, 0, 250, 170, 420);
//     bezier(385, 300, mouseY + 10 + x, 10 + y, 90 + x, 90 + y, -75, 380);
//   }
pop();
  //sky end
  
  noStroke();
  rectMode(CENTER);
  for (let i = 0; i <= 18; i = i + 1) {
  //fill(72,100,random(50),random(80,100));
  fill(72,100,random(50),random(80,100));
    
    
    rect(10 + i * 50, 320, random(20, 50), random(10, 60));
    for (let j = 0; j < 2; j = j + 1) {
      rect(20 + i * 50, j + 360, random(20, 50), random(40, 30));
      rect(0 + i * 50, j + 380, random(20, 50), random(40, 30));
      rect(320 + i * 50, j + 330, random(20, 50), random(40, 30));
      rect(380 + i * 50, j + 280, random(20, 50), random(40, 30));
    }
  }

  //triangular structure

  fill(0);
  triangle(175, 400, 200, 400, 186, 35);

  fill(10);
  triangle(155, 400, 190, 400, 160, 120);

  fill(15);
  triangle(165, 400, 190, 400, 175, 130);

  fill(2);
  triangle(215, 400, 190, 400, 195, 150);

  fill(12);
  triangle(215, 400, 190, 400, 205, 220);

  fill(14);
  triangle(225, 400, 190, 400, 215, 250);

  fill(8);
  triangle(235, 400, 210, 400, 225, 270);

  fill(15);
  triangle(145, 400, 190, 400, 150, 220);

  fill(4);
  triangle(190, 400, 160, 400, 170, 270);

  //circle stars start
  strokeWeight(2)
  fill("#F3EFD8");
  circle(125, 210, 40);
  circle(300, 66, 45 + r1);
  circle(215, 75, 45 + r1);
  circle(258, 312, 45 + r1);
  circle(430, 80, 120 + r1);
  circle(100, 25, 75 + r1);

  noFill();

  let h;
  h = random(13, 20);
  colorMode(HSB, 100);
  stroke(h, 100, 100);

  h = h + 1;
  if (h > 100) {
    h = 0;
  }

  for (let i = 0; i < 9; i = i + 1) {
    circle(100, 25 + i, random(25, 30));
    circle(100 + i, 25 + i, random(50, 55));

    circle(300 + i, 66, random(40, 45 + r1));
    circle(300, 66 + i, random(5, 15 + r1));
    circle(300, 66, random(20, 25 + r1));

    circle(215 + i, 75 + i, random(0, 5 + r1));
    circle(215 + i, 75, random(10, 20 + r1));
    circle(215 + i, 75 + i, random(30, 35 + r1));

    circle(258 + i, 312, random(10, 20 + r1));
    circle(258 + i, 312 + i, random(25, 30 + r1));
    circle(258 + i, 312, random(35, 45 + r1));

    //moon
    circle(430 + i, 80, random(40, 50 + r1));
    circle(430, 80 + i, random(70, 80 + r1));
    circle(430 + i, 80, random(90, 120 + r1));
  }

  stroke("#E1C16E", 100, 100);
  for (let i = 0; i < 9; i = i + 1) {
    circle(100 + i, 25,random(10, 20));
    circle(430, 100 + i, random(20, 30 + r1));
    circle(300, 66 + i, random(30, 35 + r1));
    circle(125 + i, 210, random(0, 10 + r1));
    circle(125, 210 + i, random(15, 20 + r1));
    circle(125, 210 + i, random(30, 40 + r1));
  }
  circle(100, 25, random(20, 75));
  circle(258, 312, random(20, 50 + r1));
  circle(300, 66, random(20, 25 + r1));
  
  // strokeWeight(6)
  // stroke(100)
  // line(42, 8, 62, 8)

  //circle stars over
  let totalCount1 = 8;
let angShift1;
let myAngle1=0;

  
//   translate(430, 80);
//   // rotate(myAngle);

//   noStroke();
//   for (let b = 0; b < totalCount1; b = b + 1) {
//     rotate(myAngle1);
//     fill(map(b, 0, totalCount1, 2, 20));
//     for (let a = 0; a < totalCount1*b; a = a + 1) {
//       angShift1 = (PI * 2) / (totalCount1*b);
//       rotate(angShift1);
//       ellipse(b*10+10, map(mouseX,0,40,0,2), 1+b/2);
//     }
//   }
//   myAngle1 = myAngle1+0.001;

}

// function keyPressed() {
//   // this will download the first 5 seconds of the animation!
//   if (key === 's') {
//     saveGif('starrynight', 20);}}
  


