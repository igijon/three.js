import './css/components.css'
import scene from "./js/Scene"
import camera from "./js/Camera"
import renderer from "./js/Renderer"
import cube from "./js/Box"
import light from './js/Light'

scene.add(cube);
// camera.position.z = 5;
// camera.position.x = 3;
// camera.position.y = 1;
camera.position.set(5,3,1);
camera.lookAt(cube.position);
scene.add(light);
renderer.render(scene, camera);