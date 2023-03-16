import * as THREE from 'three';

const light = new THREE.AmbientLight(0x404040); //soft white light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1,2,3);
light.add(directionalLight);

export default light;
