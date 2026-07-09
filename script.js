// 1. Go to https://formspree.io, create a free account and a new form.
// 2. Point that form's notification email at: pkirshad813707@gmail.com
// 3. Copy the endpoint Formspree gives you (looks like https://formspree.io/f/xxxxxxx)
// 4. Paste it below.
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const form = document.getElementById('promptForm');
const input = document.getElementById('promptInput');
const statusMsg = document.getElementById('statusMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;

  statusMsg.textContent = 'Sending…';
  statusMsg.className = 'status';

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });

    if (response.ok) {
      statusMsg.textContent = 'Sent!';
      statusMsg.className = 'status success';
      input.value = '';
    } else {
      statusMsg.textContent = 'Something went wrong. Try again.';
      statusMsg.className = 'status error';
    }
  } catch (err) {
    statusMsg.textContent = 'Network error. Try again.';
    statusMsg.className = 'status error';
  }

  input.focus();
});
