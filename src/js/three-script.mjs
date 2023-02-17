import * as THREE from 'three';
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';
import {
    IS_MOBILE
} from './web_build.mjs';


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
    10000
);
renderer.render(scene, camera);

//Agrego un listener para que el canvas sea responsivo.
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


//Agrego una luz RectArea
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
const rectAreaWidth = 1.0;
const rectAreaHeight = 1.0;

RectAreaLightUniformsLib.init();

const lightRectArea = new THREE.RectAreaLight(0xFFFFFF, 6.0, rectAreaWidth, rectAreaHeight);
scene.add(lightRectArea);
lightRectArea.rotation.set(180, 180, 0);
lightRectArea.position.set(0, 1.2, 1);
lightRectArea.castShadow = true;

//agrego una rimlight
const keylight = new THREE.RectAreaLight(0xb436ce, 40.0, rectAreaWidth, rectAreaHeight);
scene.add(keylight);
keylight.rotation.set(0, 200, 135);
keylight.position.set(0, 1.5, -1);
keylight.castShadow = true;

//agrego una fill
const filllight = new THREE.RectAreaLight(0x576ce4, 40.0, rectAreaWidth, rectAreaHeight);
scene.add(filllight);
filllight.rotation.set(0, 0, 180);
filllight.position.set(3, 1.5, 1);
filllight.castShadow = true;

/*
//Helpers
import {
    RectAreaLightHelper
} from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
const rectLightHelper = new RectAreaLightHelper( lightRectArea );
lightRectArea.add( rectLightHelper );

const rectLightHelper2 = new RectAreaLightHelper( keylight );
keylight.add( rectLightHelper2 );

const rectLightHelper3 = new RectAreaLightHelper( filllight );
filllight.add( rectLightHelper3 );
*/

//Agrego una ambient light
const light2 = new THREE.AmbientLight(0x222222, 5.9);
scene.add(light2);
light2.position.set(0, 0, 10);
light2.castShadow = true;
light2.angle = 0.2;

/*
//Agrego una luz direccional

const directionaLight = new THREE.DirectionalLight(0xFFFFFF, 1);
scene.add(directionaLight);
directionaLight.position.set(0, 0, 10);
directionaLight.castShadow = true;
directionaLight.shadow.camera.left = 0;
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

let mixer;
const model_position = {
    'x': 1.2,
    'y': 0.20,
    'z': 0
};
let finished_import = false;
//Cargo el objeto 3d
assetLoader.load(personajeURL.href,
    function (gltf) {
        //Función llamada cuando el recurso se carga
        gltf.scene.traverse((child) => {
            child.frustumCulled = false;
        })
        const model = gltf.scene;
        scene.add(model);
        model.position.set(model_position.x, model_position.y, model_position.z);
        finished_import = true;

        /*
        //Esto es para poder saber la altura del personaje importado
        const box = new THREE.Box3().setFromObject(model);
        imported_model_height = box.getSize(new THREE.Vector3());

        */

        //Esto es para la animación
        mixer = new THREE.AnimationMixer(model);
        const clips = gltf.animations;
        const clip = THREE.AnimationClip.findByName(clips, 'idle');
        const action = mixer.clipAction(clip);
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



//Agrega controles para rotación y movimiento de la cámara
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableZoom = false;
camera.position.set(-1, 2, 6);
orbit.target.set(model_position.x - 1.3, model_position.y + 1.1, model_position.z);
orbit.update();


const clock = new THREE.Clock();
//Función principal para animación. Reemplazar contenidos con lo que se quiera animar
function animate(time) {
    /*
    directionaLight.position.set(option.directionaLight_position_x, option.directionaLight_position_y, option.directionaLight_position_z);
    dLightHelper.update();
    */

    //cubeGhost1.rotation.set(time/10000, time/10000, time/10000)

    if (mixer) {
        mixer.update(clock.getDelta());
    }

    renderer.render(scene, camera);

    if (finished_import) {

        if (IS_MOBILE) {
            camera.position.set(-0.6, 0.9, 2.0);
            orbit.target.set(model_position.x - 0, model_position.y + 1.3, model_position.z + 0);
        } else {
            camera.position.set(0, 0.9, 2.0);
            orbit.target.set(model_position.x - 0.7, model_position.y + 1.045, model_position.z + 0.9);
        }
        orbit.update();
        finished_import = null;
    }
}
renderer.setAnimationLoop(animate);