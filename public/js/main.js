// Import three from server.js
import * as THREE from '../../three/build/three.module.js';
// import { FirstPersonControls } from '../../three/examples/jsm/controls/FirstPersonControls.js';


const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xefd1b5 );
scene.fog = new THREE.FogExp2( 0xefd1b5, 0.0025 );

const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

// Create controls:
var controls = new FirstPersonControls( camera, renderer.domElement );
controls.movementSpeed = 100;
controls.lookSpeed = 0.5;



renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 1;
// camera.lookAt(scene.position);

renderer.render( scene, camera );


// Create a large disc as our ground plane:
const geometry = new THREE.CircleGeometry( 100, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0x979c63 } );
const circle = new THREE.Mesh( geometry, material );
scene.add( circle );

// Create a cube:
const cubeGeometry = new THREE.BoxGeometry( 2, 2, 2 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x639c84 } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
cube.position.x = 0;
cube.position.y = 100;
cube.position.z = 1;
scene.add( cube );



// Create lines:
const matLines = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
const geoLines = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geoLines, matLines );
scene.add( line );

// Move the camera:
camera.position.set(100, 800, -800);
camera.lookAt(0, 0, 0);
const clock = new THREE.Clock();


// Create rotating Torus
// const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )
// const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true} );
// const torus= new THREE.Mesh( geometry, material );
// scene.add(torus)
function animate(){

    // Animate the torus 
    requestAnimationFrame( animate );
    // torus.rotation.x += 0.01;
    // torus.rotation.y += .005;
    // torus.rotation.z += .03;
    
    // Controls listener:
    controls.update( clock.getDelta() );

    // Render the scene:
    renderer.render( scene, camera );
}
animate();

// Export:





