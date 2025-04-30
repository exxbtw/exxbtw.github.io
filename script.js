// Ripple effect
document.querySelectorAll('.ripple').forEach(elem => {
  elem.addEventListener('click', function (e) {
    if (this.querySelector('.ripple-effect')) return;
    const circle = document.createElement('span');
    circle.classList.add('ripple-effect');
    circle.style.left = `${e.offsetX}px`;
    circle.style.top = `${e.offsetY}px`;
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

// Download as PDF using browser print as fallback
const downloadBtn = document.getElementById('download-btn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    window.print();
  });
}

// Save editable content in localStorage
const editableFields = document.querySelectorAll('.editable');
editableFields.forEach((el, i) => {
  const fieldKey = `editableField-${i}`;
  const saved = localStorage.getItem(fieldKey);
  if (saved) el.innerText = saved;

  el.addEventListener('input', () => {
    localStorage.setItem(fieldKey, el.innerText);
  });
});