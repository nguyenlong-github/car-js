// canvas
const canvas = document.getElementById("myCanvas");
// canvas.height = window.innerHeight;
canvas.width = 200;

// draw
const ctx = canvas.getContext("2d");
// x,y,width(->),height(↓)
const car = new Car(100,100,30,50);
// car.draw(ctx);

// animate
animate();

//animate function
function animate(){
    car.update();

    canvas.height = window.innerHeight;
    car.draw(ctx);
    // Call animate() again and again many times per second
    // -> gives the illusion of movement that we want
    requestAnimationFrame(animate);
}



