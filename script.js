const form = document.getElementById('promptForm');
const input = document.getElementById('promptInput');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;

  // Replace this with whatever action you need (API call, redirect, etc.)
  console.log('Submitted:', value);

  input.value = '';
  input.focus();
});
