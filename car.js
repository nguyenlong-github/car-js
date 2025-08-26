class Car{
    constructor(x,y,width,height){
        this.x = x; //100
        this.y = y; // 100
        this.width = width; // 30
        this.height = height; // 50

        this.speed = 0;
        this.acceleration = 0.2; //gia tốc
        this.maxSpeed = 3;
        this.friction = 0.05; // ma sat
        this.angle = 0;


        this.controls = new Controls();
    }

    // update
    // make car move
    update(){
        // forward
        if( this.controls.forward){
            this.speed += this.acceleration;

        }
        // reverse
        if( this.controls.reverse){
            this.speed -= this.acceleration;
        }
        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        if(this.speed < -this.maxSpeed/2){// /2 de toc do lui khong qua nhanh
            this.speed = -this.maxSpeed/2;
        }
        // Cho xe khoi dong tu tu
        if(this.speed > 0){
            this.speed -= this.friction;
        }

        // De cho xe dung lai han
        if(this.speed < 0){
            this.speed += this.friction;
        }
        //Math.abs(this.speed) lấy giá trị tuyệt đối của vận tốc (dù chạy tiến hay lùi thì cũng xét độ lớn).
        if(Math.abs(this.speed) < this.friction){
            this.speed = 0;
        }

        // Neu speed = 0 thi se khong re trai re phai duoc
        if(this.speed != 0){
            const flip = this.speed > 0 ? 1 : -1;
            // * voi flip de dao nguoc trai phai
            // left
            if(this.controls.left){
                this.angle += 0.03 * flip;
            }
            // right
            if(this.controls.right){
                this.angle -= 0.03 * flip;
            }
        }
        //
        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;


        // Vi goc Toa Do 0XY duoc tinh tu goc trai tren cung man hinh
        // gia tri y - speed de tien len phia truoc
        // this.y -= this.speed;
    }


    // draw
    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);

        
        // rotate boi vi gia tri 0 o ben tay trai, neu tinh theo cong thuc cua hinh tron,
        // nhung trong truong hop nay gia tri 0 nam o ben tren cung nen can qua nguoc no 90 do
        ctx.rotate(-this.angle);
        
        ctx.beginPath();

        // context.rect(x, y, width, height)
        ctx.rect(
            - this.width/2, //100 - 30/2 = 85
            - this.height/2, // 100 - 50/2 = 75
            this.width, // 30
            this.height // 50
        );

        // fill toan bo ben trong
        ctx.fill();

        //ctx.restore(); Khôi phục lại trạng thái đã lưu gần nhất bằng save()
        // giống như “undo” về checkpoint trước đó.
        ctx.restore();
    }

}