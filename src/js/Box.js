import * as THREE from 'three';

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); //No se ve afectado por las luces
const material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } ); //Pinta las caras en función de las normales
const cube = new THREE.Mesh( geometry, material );

export default cube