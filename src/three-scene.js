import * as THREE from 'three';
import { FastNoise } from './noise.js';

export function initScene(container) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    50,
    container.clientWidth / container.clientHeight,
    0.1,
    100
  );
  camera.position.z = 3.6;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Lights
  const dir = new THREE.DirectionalLight(0xffffff, 1);
  dir.position.set(5, 5, 5);
  scene.add(dir);
  scene.add(new THREE.AmbientLight(0xffffff, 0.45));

  // Icosahedron geometry (shiny blob)
  const geometry = new THREE.IcosahedronGeometry(1, 4);
  const material = new THREE.MeshStandardMaterial({
    color: 0x07122B,      // dark navy
    metalness: 0.9,
    roughness: 0.18,
    clearcoat: 0.2,
    clearcoatRoughness: 0.05
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Placeholder for interactive updates
  mesh.userData.update = (time) => {
    mesh.rotation.y += 0.0015; // subtle rotation for life
  };

  const params = {
    stiff: 0.18,
    damp: 0.92,
    radius: 0.22,
    noise: 0.14,
    metal: 0.9
  };

  return { scene, camera, renderer, mesh, params };
}
