import * as THREE from 'three';
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';
import {
    DRACOLoader
} from 'three/examples/jsm/loaders/dracoloader';

/*
import * as dat from 'dat.gui';
const gui = new dat.GUI();

const option = {
    directionaLight_position_x: 0,
    directionaLight_position_y: 0,
    directionaLight_position_z: 0,
}

gui.add(option, 'directionaLight_position_x', -10, 10, 0.5);
gui.add(option, 'directionaLight_position_y', -10, 10, 0.5);
gui.add(option, 'directionaLight_position_z', -10, 10, 0.5);

*/



const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three_canvas').appendChild(renderer.domElement);


const scene = new THREE.Scene();
renderer.setClearColor(0x141414);
const camera = new THREE.PerspectiveCamera(
    15,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
renderer.render(scene, camera);

//Agrego un listener para que el canvas sea responsivo.
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


//Agrega controles para rotación y movimiento de la cámara
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableZoom = false;
camera.position.set(0, 0, 10);
orbit.target.set(0, 1, 3);
orbit.update();




/*
//Agrego una area light
const light1 = new THREE.RectAreaLight(0xFFFFFF);
scene.add(light1);
light1.position.set(0, 0, 10);
light1.castShadow = true;
light1.angle = 0.2;

const light1Helper = new RectAreaLightHelper(light1);
scene.add(light1Helper);
*/

//Agrego una ambient light
const light2 = new THREE.AmbientLight(0x222222, .9);
scene.add(light2);
light2.position.set(0, 0, 10);
light2.castShadow = true;
light2.angle = 0.2;

//Agrego una luz direccional
const directionaLight = new THREE.DirectionalLight(0xFFFFFF, 1.5);
scene.add(directionaLight);
directionaLight.position.set(0, 0, 10);
directionaLight.castShadow = true;
directionaLight.shadow.camera.left = 0;
/*
const dLightHelper = new THREE.DirectionalLightHelper(directionaLight, 50);
scene.add(dLightHelper);
*/
/*
const cubeGhost1Geometry = new THREE.BoxGeometry();
const cubeGhost1Material = new THREE.MeshStandardMaterial({
    color: 0xffffff
});

const cubeGhost1 = new THREE.Mesh(cubeGhost1Geometry, cubeGhost1Material);
scene.add(cubeGhost1);

cubeGhost1.position.set(1.5, 0.2, 0);
*/






/* ***************************
Importador
*************************** */
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js';

//Esto es para que levante el archivo 3d al compilar
const personajeURL = new URL('../3dModels/character_standing.glb',
    import.meta.url);

//Cargo el importador gltf.
const assetLoader = new GLTFLoader();

/*
//Si el Objeto 3d está comprimido, tengo uqe descomprimirlo
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('three/examples/jsm/libs/draco/');
assetLoader.setDRACOLoader(dracoLoader);
*/


//Cargo el objeto 3d
assetLoader.load(personajeURL.href,
    function (gltf) {
        //Función llamada cuando el recurso se carga
        const model = gltf.scene;
        scene.add(model);
        model.position.set(1.2, 0.20, 0);


        const mixer = new THREE.AnimationMixer(model);
        const animations = gltf.animations;
        const animation = THREE.AnimationClip.findByName(animations, 'idle');

        const action = mixer.clipAction(animation);
        action.play();



    },
    function (xhr) {
        // Función llamada cuando la carga progresa
        //console.log( Math.round( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function (error) {
        //Función llamada cuando hubo un error
        console.error(error);
    });








//Función principal para animación. Reemplazar contenidos con lo que se quiera animar
function animate(time) {
    /*
    directionaLight.position.set(option.directionaLight_position_x, option.directionaLight_position_y, option.directionaLight_position_z);
    dLightHelper.update();
    */

    //cubeGhost1.rotation.set(time/10000, time/10000, time/10000)

    requestAnimationFrame(animate);

    renderer.render(scene, camera);

}
renderer.setAnimationLoop(animate);