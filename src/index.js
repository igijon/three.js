import './css/components.css'
import scene from "./js/Scene"
import camera from "./js/Camera"
import renderer from "./js/Renderer"
import cube from "./js/Box"
import light from './js/Light'
import resize from './js/Resize'

scene.add(cube);
// camera.position.z = 5;
// camera.position.x = 3;
// camera.position.y = 1;
camera.position.set(5,3,1);
camera.lookAt(cube.position);
scene.add(light);
resize.start(renderer);

setInterval(() => {
    cube.rotation.y+=0.01
    renderer.render(scene, camera);
}, 1000/30); //30 fps