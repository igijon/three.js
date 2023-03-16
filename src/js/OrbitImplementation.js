import { OrbitControls } from 'three/addons/controls/OrbitControls';
import camera from './Camera';
import renderer from './Renderer';

const controls = new OrbitControls(camera, renderer.domElement);
console.log(controls);
controls.enablePan = true;
controls.enableZoom = true;
controls.target.set(0,0,0);
controls.update();
