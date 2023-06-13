import * as THREE from 'three';
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
// Turn on the shadows:
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);

class Box extends THREE.Mesh {
    constructor({
        width,
        height,
        depth,
        color = '#00ff00',
        velocity = {
            x: 0,
            y: 0,
            z: 0
        },
        position = {
            x: 0,
            y: 0,
            z: 0
        }}) {
        super(
            new THREE.BoxGeometry(width, height, depth),
            new THREE.MeshStandardMaterial({ color })
        );
        this.width = width;
        this.height = height;
        this.depth = depth;
        // this.color = color;

        this.position.set(position.x, position.y, position.z);

        this.bottom = this.position.y - this.height / 2;
        this.top = this.position.y + this.height / 2;

        this.velocity = velocity;
        this.gravity = -0.002;
        
    }
    update(group) {
        this.bottom = this.position.y - this.height / 2;
        this.top = this.position.y + this.height / 2;

        this.position.x += this.velocity.x;
        this.applyGravity();
    }
    applyGravity(){
        this.velocity.y += this.gravity;

        // this is where we hit the ground
        if (this.bottom + this.velocity.y <= ground.top){
            this.velocity.y *= .8;
            this.velocity.y = -this.velocity.y;
        }   
        else this.position.y += this.velocity.y;
    }
}

const cube = new Box({
    width: 1,
    height: 1,
    depth: 1,
    velocity: {
        x: 0,
        y: -0.01,
        z: 0
    },
    position: {
        x: 0,
        y: 2,
        z: 8
    }});
cube.castShadow = true;
scene.add(cube);

// Creating the ground plane:
const ground = new Box({
    width: 10,
    height: 0.5,
    depth: 20,
    color: '#0000ff',
    position: {
        x: 0,
        y: -2,
        z: 0
}})


ground.receiveShadow = true;
scene.add(ground);



// Pulls the camera back
camera.position.z = 15;
camera.position.x = 3;
camera.position.y = 4;
// look at the cube:
camera.lookAt(cube.position);

// console.log(cube.position.y - cube.height / 2)
// console.log(cube.position.y - cube.height / 2)


// Lights:
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.y = 3;
light.position.z = 2;
light.castShadow = true;
scene.add(light);




const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    s: {
        pressed: false
    }
}

window.addEventListener('keydown', (e) => {
    switch(e.code){
        case 'KeyA':
            keys.a.pressed = true;
            break;
        case 'KeyD':
            keys.d.pressed = true;
            break;
        case 'KeyW':
            keys.w.pressed = true;
            break;
        case 'KeyS':
            keys.s.pressed = true;
        
    }
})
window.addEventListener('keyup', (e) => {
    switch(e.code){
        case 'KeyA':
            keys.a.pressed = false;
            break;
        case 'KeyD':
            keys.d.pressed = false;
            break;
        case 'KeyW':
            keys.w.pressed = false;
            break;
        case 'KeyS':
            keys.s.pressed = false;        
    }
})




function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.update(ground)

    // movement code:
    if (keys.a.pressed) {
        cube.position.x -= 0.04;
        camera.position.x -= 0.04;
    }
    if (keys.d.pressed){
         cube.position.x += 0.04;
         camera.position.x += 0.04; 
    }
    if (keys.w.pressed){
         cube.position.z -= 0.03;
         camera.position.z -= 0.03; 
    }
    if (keys.s.pressed){
         cube.position.z += 0.03;
         camera.position.z += 0.03;
    }
    
    
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
}
animate();
