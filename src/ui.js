export function initUI(params, mesh, renderer) {
  const app = document.getElementById('app');

  // Simple control panel
  const controlsDiv = document.createElement('div');
  controlsDiv.style.position = 'absolute';
  controlsDiv.style.top = '20px';
  controlsDiv.style.left = '20px';
  controlsDiv.style.background = 'rgba(0,0,0,0.05)';
  controlsDiv.style.padding = '10px';
  controlsDiv.style.borderRadius = '10px';
  controlsDiv.innerHTML = `
    <label>Stiffness: <span id="stiffVal">${params.stiff}</span></label>
    <input type="range" min="0.01" max="1.2" step="0.01" value="${params.stiff}" id="stiffSlider"/>
  `;
  app.appendChild(controlsDiv);

  const stiffSlider = document.getElementById('stiffSlider');
  const stiffVal = document.getElementById('stiffVal');
  stiffSlider.addEventListener('input', e => {
    params.stiff = parseFloat(e.target.value);
    stiffVal.textContent = params.stiff.toFixed(2);
  });
}
