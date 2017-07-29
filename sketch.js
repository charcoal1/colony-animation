// Litho animation game
var titleCard = true;

var sit1, sit2, sit3, sit4, sit5, sit6, sit7; //sit animation vars
var sitX = 350;
var sitY = 375;

var spaceDrawCount = 20; //timer for drawing space colony
var t = 0; // time for scene 1
var t1 = 0; //time for water scene

var spaceOk = false; // if "ok" text appears
spaceR = 255;
spaceG = 0;
spaceB = 0;

var spaceColonyScene = false;
var thinkingScene = false;
var timerAerial = 0; // timer for button on thinking scene, goes to aerial scene
var aerialScene = false;
var aerial; //aerial animation var
var spaceColony; // space colony wagon animation var
//water scene
var waterScene = false; // water scene
var waterX = 350;
var waterY = 600;
var water1, water2, water3, water4, water5, water6, water7;

// muscle scene
var muscleScene1;
var muscleScene2;
var muscleArm; // arm muscle var
var muscleLeg; // leg muscle var

// hand rock scene
var handRockScene;
var handRock;
var ninth = 77;

//end scene
var endScene = false;


var scene = 0;
var buttonStatic; // Static Button
var buttonMove; //Animated Button

//TEXT Variables
var cornerSize = 24;
var cornerX = 30;
var cornerY = 50;
var textWide = 275;

//Circle Bottom LEFT Animated Button variables (CENTER)
bottomLeftAniX = 50; //left = 30
bottomLeftAniY = (700 - 55); //top = 700-75 
circleW = 40;
//Circle Bottom LEFT Static Button dimensions (CORNER)
bottomLeftStatX = 30;
bottomLeftStatY = (700 - 75);

//Circle Top Right Static Button variables (CORNER)
topRightStatX = 625;
topRightStatY = 35;
//Circle Top Right Animated Button variables (CENTER)
topRightAniX = topRightStatX + 20;
topRightAniY = topRightStatY + 20;

//Circle Bottom Right Animated Button variables (CENTER)
bottomRightAniX = (700 - 25);
bottomRightAniY = (700 - 25);
//Circle Bottom Right Static Buttton variables (CORNER)
bottomRightStatX = (650);
bottomRightStatY = (650);


function preload() {
   //font
   bodoni = loadFont("assets/font/bodoni-book.ttf");
   thick = loadFont("assets/font/thick.ttf");

   //images
   //varName = loadImage("assets/imageName.png");
   buttonStatic = loadImage("assets/button-stills_000.png");


   // animations
   buttonMove = loadAnimation("assets/button-stills_000.png", "assets/button-stills_005.png");
   spaceColony = loadAnimation("assets/space-colony-stills_000.png", "assets/space-colony-stills_001.png");
   aerial = loadAnimation("assets/aerial-stills_000.png", "assets/aerial-stills_002.png");

   //sitting, thinking animations
   sit1 = loadAnimation("assets/sit-stills_0000.png", "assets/sit-stills_0001.png");
   sit2 = loadAnimation("assets/sit-stills_0002.png", "assets/sit-stills_0003.png");
   sit3 = loadAnimation("assets/sit-stills_0004.png", "assets/sit-stills_0005.png");
   sit4 = loadAnimation("assets/sit-stills_0006.png", "assets/sit-stills_0007.png");
   sit5 = loadAnimation("assets/sit-stills_0008.png", "assets/sit-stills_0009.png");
   sit6 = loadAnimation("assets/sit-stills_0010.png", "assets/sit-stills_0011.png");
   sit7 = loadAnimation("assets/sit-stills_0012.png", "assets/sit-stills_0013.png");

   // water animations
   water1 = loadAnimation("assets/water-stills_001.png", "assets/water-stills_002.png");
   water2 = loadAnimation("assets/water-stills_003.png", "assets/water-stills_004.png");
   water3 = loadAnimation("assets/water-stills_005.png", "assets/water-stills_006.png");
   water4 = loadAnimation("assets/water-stills_007.png", "assets/water-stills_008.png");
   water5 = loadAnimation("assets/water-stills_009.png", "assets/water-stills_010.png");
   water6 = loadAnimation("assets/water-stills_011.png", "assets/water-stills_012.png");

   //muscle animations
   muscleArm = loadAnimation("assets/muscleArm-001.png", "assets/muscleArm-002.png");
   muscleLeg = loadAnimation("assets/muscleLeg-001.png", "assets/muscleLeg-002.png");

   //hand rock animation
   handRock1 = loadAnimation("assets/hand-rock-001.png", "assets/hand-rock-002.png");
   handRock2 = loadAnimation("assets/hand-rock-003.png", "assets/hand-rock-004.png");
   handRock3 = loadAnimation("assets/hand-rock-005.png", "assets/hand-rock-006.png");
   handRock4 = loadAnimation("assets/hand-rock-007.png", "assets/hand-rock-008.png");
   handRock5 = loadAnimation("assets/hand-rock-009.png", "assets/hand-rock-010.png");
   handRock6 = loadAnimation("assets/hand-rock-011.png", "assets/hand-rock-012.png");
   handRock7 = loadAnimation("assets/hand-rock-013.png", "assets/hand-rock-014.png");
   handRock8 = loadAnimation("assets/hand-rock-015.png", "assets/hand-rock-016.png");
   handRock9 = loadAnimation("assets/hand-rock-017.png", "assets/hand-rock-018.png");

}


function setup() {
   createCanvas(700, 700);
   background(255, 255, 255);
   background('red');
   // scene 1 text, no draw
   fill(0);
   noStroke();
   textFont("bodoni")
   textSize(cornerSize);
   text("It's approaching in the next year. Draw the space colony slowly.", cornerX, cornerY, textWide);

   //drawing pad
   fill(255);
   stroke(0);
   strokeWeight(1);
   rect(30, 140, width - 60, 530);

}



function draw() {

   if (t >= 7 + spaceDrawCount) { // t>= _ is how much time OK is on screen
      scene = 3;
   }

   if (scene === 0) {

      // dim background 
      //spaceR = spaceR + 1;

      stroke(0, 0, 0);
      strokeWeight(1.5);
      fill(0);

      //text(t, 600, 50);
      if (mouseIsPressed) { // timer counts only when the mouse is pressed
         t = t + 0.3;
      }

      if (t >= spaceDrawCount) { // when timer runs out, say "ok" text
         spaceOk = true;
      }

      if (spaceOk === true) { // cuts off drawing with "ok"
         if (mouseIsPressed) {}
         noStroke();
         textFont("Helvetica");
         textSize(570);
         fill(10, 80, 10);
         //text("ok", width/2, height/2);
         text("o", 60, 500);
         text("k", 60 + 285, 500);
      } else {
         if (mouseIsPressed) {
            //ellipse(mouseX, mouseY, 10, 10);
            line(mouseX, mouseY, pmouseX, pmouseY);
         }
      }
   } else if (scene === 3) { // Title screen, title card
      background(0);
      //standard text
      fill(255);
      noStroke();
      textSize(24);
      textFont("thick")
      text("Days Gone", cornerX, cornerY, textWide);
      textFont("bodoni")
      fill(255);
      text("A game by Andy Gottschalk. Press in the circle to begin.", cornerX, cornerY + 45, textWide - 40);

      if (mouseX > bottomLeftStatX && mouseX < bottomLeftStatX + circleW && mouseY > bottomLeftStatY && mouseY < bottomLeftStatY + circleW) {
         animation(buttonMove, bottomLeftAniX, bottomLeftAniY);
         if (mouseIsPressed) {
            spaceColonyScene = true;
         }
      } else {
         imageMode(CENTER);
         image(buttonStatic, bottomLeftAniX, bottomLeftAniY);
      }


      if (spaceColonyScene) { // Space Colony
         //thinking scene begin
         background(255, 0, 0);

         textFont("bodoni")
         noStroke();
         fill(0);
         textSize(cornerSize);
         text("How often do you think about Earth?", cornerX, cornerY, textWide);

         // Mouseover changes images X-axis
         if (mouseX > -10 && mouseX < 100) {
            animation(sit1, sitX, sitY);
         } else if (mouseX > 99 && mouseX < 200) {
            animation(sit2, sitX, sitY);
         } else if (mouseX > 199 && mouseX < 300) {
            animation(sit3, sitX, sitY);
         } else if (mouseX > 299 && mouseX < 400) {
            animation(sit4, sitX, sitY);
         } else if (mouseX > 399 && mouseX < 500) {
            animation(sit5, sitX, sitY);
         } else if (mouseX > 499 && mouseX < 600) {
            animation(sit6, sitX, sitY);
         } else if (mouseX > 599 && mouseX < 4000) {
            animation(sit7, sitX, sitY);
         } else {}

         //timer for clicker for next scene
         //timerAerial = timerAerial + 0.3;
         //if (timerAerial > 10) {
         stroke(0);
         fill(255);
         //thinking scene end


         //if mouse over button top right
         if (mouseX > topRightStatX && mouseX < topRightStatX + circleW && mouseY > topRightStatY && mouseY < topRightStatY + circleW) {
            animation(buttonMove, topRightAniX, topRightAniY);
            if (mouseIsPressed) {
               thinkingScene = true;
            }
         } else {
            imageMode(CENTER);
            image(buttonStatic, topRightAniX, topRightAniY);
         }

         if (thinkingScene) { // Thinking, sitting scene
            background(255, 0, 0);
            scene = 2;
            fill(0);
            noStroke();
            textFont("bodoni")
            textSize(cornerSize);
            text("Only ten people can live in the colony comfortably.", cornerX, cornerY, textWide);
            animation(spaceColony, width / 2, 385);
            fill(255, 255, 0);
            stroke(0);
            // width = 700
            //ellipseMode(CORNER)
            //ellipse(topRightStatX, 35, 50, 50);

            if (mouseX > bottomLeftStatX && mouseX < (bottomLeftStatX + circleW) && mouseY > bottomLeftStatY && mouseY < bottomLeftStatY + circleW) {
               animation(buttonMove, bottomLeftAniX, bottomLeftAniY);
               if (mouseIsPressed) {
                  aerialScene = true;
                  background(255, 255, 0);
               }
            } else {
               imageMode(CENTER);
               image(buttonStatic, bottomLeftAniX, bottomLeftAniY);
            }

         }
         if (aerialScene === true) { // Aerial scene
            background('red');

            textFont("bodoni") // corner text
            noStroke();
            fill(0);
            textSize(cornerSize);
            text("I remember the view from 2000 ft, when we were sick in our cabin.", cornerX, cornerY, textWide);
            animation(aerial, width / 2, 400);

            //if mouse over button top right
            if (mouseX > topRightStatX && mouseX < topRightStatX + circleW && mouseY > topRightStatY && mouseY < topRightStatY + circleW) {
               animation(buttonMove, topRightAniX, topRightAniY);
               if (mouseIsPressed) {
                  waterScene = true;
               }
            } else {
               imageMode(CENTER);
               image(buttonStatic, topRightAniX, topRightAniY);
            }

            if (waterScene) {
               background('red');
               //background(10, 80, 10);

               textFont("bodoni") // corner text
               noStroke();
               fill(0);
               textSize(cornerSize);
               text("The water in the freight might go bad before we arrive.", cornerX, cornerY, textWide);

               // Mouseover changes images X-axis
               if (mouseX > -10 && mouseX < 120) {
                  animation(water1, waterX, waterY);
               } else if (mouseX > 119 && mouseX < 240) {
                  animation(water2, waterX, waterY);
               } else if (mouseX > 239 && mouseX < 357) {
                  animation(water3, waterX, waterY);
               } else if (mouseX > 356 && mouseX < 473) {
                  animation(water4, waterX, waterY);
               } else if (mouseX > 472 && mouseX < 588) {
                  animation(water5, waterX, waterY);
               } else if (mouseX > 587 && mouseX < 701) {
                  animation(water6, waterX, waterY);
               } else {}

               //if mouse over button top right
               if (mouseX > cornerX && mouseX < cornerX + circleW && mouseY > cornerY + 50 && mouseY < cornerY + circleW + 100) {
                  animation(buttonMove, cornerX + 20, cornerY + 100);
                  if (mouseIsPressed) {
                     muscleScene1 = true;
                  }
               } else {
                  imageMode(CENTER);
                  image(buttonStatic, cornerX + 20, cornerY + 100);
               }
            }
            if (muscleScene1) {
               background('red');
               //background(10, 80, 10);

               textFont("bodoni") // corner text
               noStroke();
               fill(0);
               textSize(cornerSize);
               text("---", cornerX, cornerY, textWide);
               animation(muscleArm, width / 2, 380);
               // Right top
               if (mouseX > topRightStatX && mouseX < topRightStatX + circleW && mouseY > topRightStatY && mouseY < topRightStatY + circleW) {
                  animation(buttonMove, topRightAniX, topRightAniY);
                  if (mouseIsPressed) {
                     muscleScene2 = true;
                  }
               } else {
                  imageMode(CENTER);
                  image(buttonStatic, topRightAniX, topRightAniY);
               }

               /*
               // RIGHT (A failure!!) 
               if (mouseX > 655 && mouseX < (655 + circleW) && mouseY > (645) && mouseY < (645 + circleW)) {
                  animation(buttonMove, 655-20, 625+20);
                  if (mouseIsPressed) {
                     muscleScene1 = true;
                  }
               } else {
                  imageMode(CENTER);
                  image(buttonStatic, 655, 645);
               }
               */
            }

            if (muscleScene2) {
               background('red');
               //background(10, 80, 10);

               textFont("bodoni") // corner text
               noStroke();
               fill(0);
               textSize(cornerSize);
               text("---", cornerX, cornerY, textWide);
               animation(muscleLeg, width / 2, 380);
               // Right top

               if (mouseX > bottomLeftStatX && mouseX < (bottomLeftStatX + circleW) && mouseY > bottomLeftStatY && mouseY < bottomLeftStatY + circleW) {
                  animation(buttonMove, bottomLeftAniX, bottomLeftAniY);
                  if (mouseIsPressed) {
                     handRockScene = true;
                     background(255, 255, 0);
                  }
               } else {
                  imageMode(CENTER);
                  image(buttonStatic, bottomLeftAniX, bottomLeftAniY);
               }
            }

            if (handRockScene) {
               background('red');
               //background(10, 80, 10);

               textFont("bodoni") // corner text
               noStroke();
               fill(0);
               textSize(cornerSize);
               text("...", cornerX, cornerY, textWide);
               // adjust hand movement for mouseY
               if (mouseY > -1000 && mouseY < 77) {
                  animation(handRock9, width / 2, 380);
                  print('9');
               } else if (mouseY > 76 && mouseY < 156) {
                  animation(handRock8, width / 2, 380);
                  print('8');
               } else if (mouseY > 155 && mouseY < 232) {
                  animation(handRock7, width / 2, 380);
                  print('7');
               } else if (mouseY > 231 && mouseY < 309) {
                  animation(handRock6, width / 2, 380);
                  print('6');
               } else if (mouseY > 308 && mouseY < 386) {
                  animation(handRock5, width / 2, 380);
                  print('5');
               } else if (mouseY > 385 && mouseY < 463) {
                  animation(handRock4, width / 2, 380);
                  print('4');
               } else if (mouseY > 462 && mouseY < 540) {
                  animation(handRock3, width / 2, 380);
                  print('3');
               } else if (mouseY > 539 && mouseY < 617) {
                  animation(handRock2, width / 2, 380);
                  print('2');
               } else if (mouseY > 616 && mouseY < 1200) {
                  animation(handRock1, width / 2, 380);
                  print('1');
               } else {
                  print('dead');
               }
               
               if (mouseX > topRightStatX && mouseX < topRightStatX + circleW && mouseY > topRightStatY && mouseY < topRightStatY + circleW) {
                  animation(buttonMove, topRightAniX, topRightAniY);
                  if (mouseIsPressed) {
                     endScene = true;
                  }
               } else {
                  imageMode(CENTER);
                  image(buttonStatic, topRightAniX, topRightAniY);
               }

            }

            if (endScene) {
               background(0);
               textFont("bodoni") // corner text
               noStroke();
               fill(255);
               textSize(cornerSize);
               text("The End", cornerX, cornerY, textWide);
            }
         }
      }



   } else {
      background('red');
   }

}