import * as THREE from '../../three/build/three.module.js';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function THREEinit(){
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
    });

    renderer.setPixelRatio( window.devicePixelRatio );

    // Constrain the renderer to the size of the chip:
    const divModal3 = document.querySelector(".container");
    renderer.setSize( divModal3.offsetWidth, divModal3.offsetHeight );
    camera.position.setZ(30);


    // const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
    // const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
    // const torus = new THREE.Mesh( geometry, material );

    // scene.add(torus);

    const geometry = new THREE.PlaneGeometry( 1, 1 );
    const extrudeTexture = new THREE.TextureLoader().load('../static/images/josh.png');
    const extrudeMaterial = new THREE.MeshBasicMaterial({map: extrudeTexture});
    const plane = new THREE.Mesh( geometry, extrudeMaterial );
    scene.add( plane );

    


    // const length = 12, width = 8;
    // const shape = new THREE.Shape();
    // shape.moveTo( 0,0 );
    // shape.lineTo( 0, width );
    // shape.lineTo( length, width );
    // shape.lineTo( length, 0 );
    // shape.lineTo( 0, 0 );
    
    // const extrudeSettings = {
    //     steps: 4,
    //     depth: 1,
    //     bevelThickness: 1,
    //     bevelSize: 2,
    //     bevelOffset: 2,
    //     bevelSegments: 4
    // };

    // const geometryExtrude = new THREE.ExtrudeGeometry( shape, extrudeSettings );
    // const extrudeTexture = new THREE.TextureLoader().load('../static/images/josh.png');
    // const extrudeMaterial = new THREE.MeshBasicMaterial({map: extrudeTexture});
    // const extrudeMesh = new THREE.Mesh( geometryExtrude, extrudeMaterial );
    // extrudeMesh.position.set(2, 1, -15);
    // // Put a picture on the extrudeMesh:
    // scene.add(extrudeMesh);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5,5,5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // Helpers:
    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200, 50);

    const controls = new OrbitControls(camera, renderer.domElement);

    function addStar(){
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        const material = new THREE.MeshStandardMaterial({color: 0xffffff});
        const star = new THREE.Mesh(geometry, material);

        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

        star.position.set(x, y, z);
        scene.add(star);
    }

    Array(200).fill().forEach(addStar);

    const spaceTexture = new THREE.TextureLoader().load('space.jpg');
    scene.background = spaceTexture;

    function animate(){
        requestAnimationFrame(animate);
        // plane.rotation.x += 0.0025;
        // plane.rotation.y += 0.0025;
        // plane.rotation.z += 0.0025;


        // torus.rotation.x += 0.01;
        // torus.rotation.y += 0.005;
        // torus.rotation.z += 0.01;
    
        controls.update();
    
        renderer.render(scene, camera);
    }
    animate();
}







// Export:
// module.exports = { THREEinit, animate };