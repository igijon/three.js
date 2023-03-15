import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

console.log(renderer.domElement);

export default renderer