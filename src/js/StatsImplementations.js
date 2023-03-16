import Stats from 'three/examples/jsm/libs/stats.module'
import loopMachine from './LoopMachine';

let stats = new Stats();
document.body.appendChild(stats.dom);

loopMachine.addCallback( ()=> {
    stats.update();
});
