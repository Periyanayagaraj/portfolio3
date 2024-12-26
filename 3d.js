import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);

// Enable gamma correction and tone mapping
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

document.body.appendChild(renderer.domElement);

camera.position.set(0, 1.5, 1.5);

// Lighting setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Soft ambient light
scene.add(ambientLight);

const spotlight1 = new THREE.SpotLight(0x875806,2);
spotlight1.position.set(-96.86, 92.64, -87.98);
spotlight1.angle = Math.PI / 6; // Spotlight angle
spotlight1.penumbra = 0.3; // Soft edges
spotlight1.castShadow = true;
scene.add(spotlight1);

const spotlight2 = new THREE.SpotLight(0x474BE7,5);
spotlight2.position.set(103.12, 83.23, -159.35);
spotlight2.angle = Math.PI / 6; // Spotlight angle
spotlight2.penumbra = 0.3; // Soft edges
spotlight2.castShadow = true;
scene.add(spotlight2);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 2);
directionalLight.castShadow = true;
scene.add(directionalLight);


// Load 3D Model
let model, head;
const loader = new GLTFLoader();
loader.load(
    '3d/674ffe7f101f776747b2addb.glb',
    (gltf) => {
        model = gltf.scene;
        model.traverse((child) => {
            if (child.isMesh) {
                child.material.map.encoding = THREE.sRGBEncoding; // Ensure textures use sRGB
                child.material.needsUpdate = true; // Update material
            }
        });
        scene.add(model);

        // Find the "Head" part of the model
        head = model.getObjectByName("Head"); // Update with your actual object name
    },
    undefined,
    (error) => {
        console.error('An error occurred while loading the model:', error);
    }
);

// Mouse and Touch Handlers
let mouseX = 0;
let mouseY = 0;

function handleMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 1 - 0.5;
    mouseY = -((event.clientY / window.innerHeight) * -0.5);
}

function handleTouchMove(event) {
    event.preventDefault();

    const touch = event.touches[0];
    mouseX = (touch.clientX / window.innerWidth) * 1 - 0.5;
    mouseY = -((touch.clientY / window.innerHeight) * -0.5);
}

document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('touchmove', handleTouchMove, { passive: false });

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    if (head) {
        head.rotation.y = mouseX * (Math.PI / 4);
        head.rotation.x = mouseY * (Math.PI / 8);
    }

    renderer.render(scene, camera);
}

animate();
// Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
