import * as THREE from 'three';
import cube from './Box';
import {GUI} from 'dat.gui';

class GUIImplementation {

    constructor(){
        this.gui = null;
    }
    
    start(){
        if(this.gui) {
            this.gui.show()
            return;
        }
        this.gui = new GUI();
        let colorObj = {
            color:0x00ff00
        }
        this.gui.addColor(colorObj, 'color').name('Color cubo').onChange(() => {
            cube.material.color.set(colorObj.color);
        })
        const rotation = this.gui.addFolder('Rotation')
        rotation.add(cube.rotation, 'x', 0, Math.PI*2).step(Math.PI/180);
        rotation.add(cube.rotation, 'y', 0, Math.PI*2).step(Math.PI/180);
        rotation.add(cube.rotation, 'z', 0, Math.PI*2).step(Math.PI/180);

        const position = this.gui.addFolder('Position');
        position.add(cube.position, 'x').min(-10).max(10);
        position.add(cube.position, 'y').min(-10).max(10).step(.5);
        position.add(cube.position, 'z',-2,2);


    }
    stop(){
        this.gui.hide();
    }
}

const guiImplementation = new GUIImplementation();
export default guiImplementation;