class Road{
    constructor(x,width, landCount = 3){
        this.x = x;
        this.width = width;
        this.landCount = this.landCount;


        this.left = x - width / 2;
        this.right = x + width / 2;

        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;
    }

    //draw road
    draw(ctx){
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";

        // left
        ctx.beginPath();
        ctx.moveTo(this.left, this.top);
        ctx.lineTo(this.left, this.bottom);
        ctx.stroke();

        // Right
        ctx.beginPath();
        ctx.moveTo(this.right, this.top);
        ctx.lineTo(this.right, this.bottom);
        ctx.stroke();

    }





}