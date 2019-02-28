
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
console.log(creacteCricle);
creacteCricle.draw();
