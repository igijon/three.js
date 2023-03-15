import './css/components.css'
import scene from "./js/Scene"
import camera from "./js/Camera"
import renderer from "./js/Renderer"
import cube from "./js/Box"

scene.add(cube);
camera.position.z = 5;
renderer.render(scene, camera);