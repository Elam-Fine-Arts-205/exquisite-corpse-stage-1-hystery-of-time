// Hystery of Time
// Exquiste Corpse --- Stage One
// FA205: Creative Computing
// Semester One 2024
// Elam School of Fine Arts

let imgH1, imgH2, imgH3; // variables for the images
let interval; // variable to store random intervals for 'hysterical time'
let imagesDrawn = 0; // variable to count images
let currentImage; // variable to store current image
let currentTime; // variable to store current time
let hysteria; // variable to store setInterval

function preload() {
  // pre-load the images so they are ready when the sketch starts
  imgH1 = loadImage('images/hyst_1.png');
  imgH2 = loadImage('images/hyst_2.png');
  imgH3 = loadImage('images/hyst_3.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // set the canvas to the size of user's browser window
  pixelDensity(1); // make sure pixels show correctly on different screens
  imageMode(CENTER); // use the centre image mode for this sketch
  textAlign(CENTER); // x coordinates for text will be interpreted as the centre of the text
  interval = random(0, 500); // set an initial random interval time between 0 and 500 milliseconds
  hysteria = setInterval(triptych, interval); // start setInterval using interval variable and calling triptych function
}

function windowResized(){
  // resize the canvas if the user adjusts the size of the browser window:
  resizeCanvas(windowWidth, windowHeight);
}

function triptych(){
  // determine which image to draw to the screen
  if (imagesDrawn == 0) {
    currentImage = imgH1; // if imagesDrawn is 0, make imgH1 the current image to display
    imagesDrawn ++; // then add one to the imagesDrawn counter
  } else if (imagesDrawn == 1){
    currentImage = imgH2; // if imagesDrawn is 1, make imgH2 the current image to display
    imagesDrawn ++; // then add one to the imagesDrawn counter
  } else if (imagesDrawn == 2){
    currentImage = imgH3; // if imagesDrawn is 2, make imgH3 the current image to display
    imagesDrawn = 0; // then reset imagesDrawn to 0
    clearInterval(hysteria); // clear the setInterval
    interval = random(0, 500); // set a new random interval time
    hysteria = setInterval(triptych, interval); // re-start setInterval with the new interval time
  }
}

function getTime(){
  // function to retrieve the current time
  let time = new Date; // this is a JavaScript method to get a new date (defaults to current date & time)
  let hrs = nf(time.getHours(), 2); // get the hour from this date, in two digit format
  let min = nf(time.getMinutes(), 2); // minutues in two digits
  let sec = nf(time.getSeconds(), 2); // seconds in two digits
  // now make a string of the current time with colons separating hours, minutues, and seconds:
  currentTime = hrs + ":" + min + ":" + sec;
}

function draw() {
  background(0);
  getTime(); // call this function to get the current time
  fill(255);
  text('Time', width/2, height/2 - 349);
  text(currentTime, width/2, height/2 - 329);
  text('Hystery of Time', width/2, height/2 - 259);

  // draw an image if the time elapsed since the start of the sketch is greater than the interval period
  // this conditional is needed to make sure there is an image in the currentImage varibale when the sketch starts
  if(millis() > interval * 2){
    image(currentImage, width/2, height/2); // draw currentImage to the screen
  }
}
