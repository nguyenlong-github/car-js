class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        // keyboard listener
        this.#addKeyboardListeners();

    }
    // "# means priavte method, you cant access this method from outside

     // keyboard listener function
    #addKeyboardListeners(){
        // onkeydown
        document.onkeydown = (event) => {
            switch( event.key ){
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
            //debug
            console.table(this);
        }
        
        // onkeyup
        document.onkeyup =  (event) => {
            switch( event.key ){
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
            //debug
            console.table(this);
        }


    }
}