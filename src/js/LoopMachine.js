class LoopMachine {
    constructor(){
        this.flag = false;
        this.callbacks = [];
    }

    addCallback(cb){
        this.callbacks.push(cb);
    }

    removeCallback(cb) {
        let index = this.callbacks.indexOf(cb)
        if(index >= 0)
            this.callbacks.splice(index, 1)
    } 
    start() {
        if(this.flag) return;
        this.flag = true;
        this.run();
    }

    stop() {
        this.flag = false;
    }

    run() {
        if(!this.flag) return;
        this.callbacks.forEach(cb => {
            cb();
        })
        requestAnimationFrame(this.run.bind(this)) //Al callback le seteamos como contexto, la instancia
    }

}
const loopMachine = new LoopMachine();
export default loopMachine
