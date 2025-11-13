import { initScene } from './three-scene.js';
import { initUI } from './ui.js';

// Get container
const app = document.getElementById('app');

// Initialize Three.js scene
const { scene, camera, renderer, mesh, params } = initScene(app);

// Initialize UI controls
initUI(params, mesh, renderer);

// Animate loop
function animate(time) {
  requestAnimationFrame(animate);
  mesh.userData.update(time);
  renderer.render(scene, camera);
}
requestAnimationFrame(animate);
