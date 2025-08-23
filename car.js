class Car{
    constructor(x,y,width,height){
        this.x = x; //100
        this.y = y; // 100
        this.width = width; // 30
        this.height = height; // 50

        this.controls = new Controls();
    }

    // update
    // make car move
    update(){
        if( this.controls.forward){
            this.y -= 2;

        }
        if( this.controls.reverse){
            this.y += 2;
        }
    }


    // draw
    draw(ctx){
        ctx.beginPath();
        // context.rect(x, y, width, height)
        ctx.rect(
            this.x - this.width/2, //100 - 30/2 = 85
            this.y - this.height/2, // 100 - 50/2 = 75
            this.width, // 30
            this.height // 50
        );

        // fill toan bo ben trong
        ctx.fill();
    }

}