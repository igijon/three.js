import * as THREE from 'three';
//Fov: primer argumento. > más amplitud de lente.
//segundo argumento: relación de aspecto
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

export default camera;