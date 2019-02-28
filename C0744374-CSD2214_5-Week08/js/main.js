
//The circle below is called an object literal
const circle = {
    radius: 1,
    location:{
        x: 1,
        y:1
    },
    draw() {
        console.log('draw' + this.location.x);
    }
};
circle.draw();


//Factory function 
function createCircle(radius){
    return {
        radius,  //radius is same as radius: radius
        draw() {
            console.log('drawaa');
        }
    };
}
const creacteCricle = createCircle(1);
creacteCricle.draw();


//Constructor Function  //this fucntion doesnt have a return type and when you want to create an object you have to use new
function Circle(radius) {
    console.log(this);
    this.radius = radius;
    this.draw = function () {
        console.log('DRAW');
    };
}
const another = new Circle(1);

//challenge number one
function forLoop(start,until,stepDown) { //forLoop has 2 parameter start and until for the for loop
    sum = 0; //intializing sum to 0
    for (i = start; i >= until; i -= stepDown) {
        sum += i;
    }
    document.getElementById('forLoopOutput').innerHTML = sum; // output sum to html page by get element by id
}
forLoop(1109, 119,11); //calling the function

//challenge number two
function onClick() {
    start = document.getElementById('start').innerHTML;
    end = document.getElementById('end').innerHTML;
    stepDown = document.getElementById('stepDown').innerHTML;
    forLoop(start, end, stepDown);
    start = document.getElementById('forLoopOutputFromUser').innerHTML;
}