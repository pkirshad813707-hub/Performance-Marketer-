// ---------------------------------------------------------------
// SETUP REQUIRED before this will actually send email:
// 1. Go to https://formspree.io and create a free account.
// 2. Create a new form. When it asks for an email, use:
//      pkirshad813707@gmail.com
// 3. Formspree will give you an endpoint that looks like:
//      https://formspree.io/f/abcd1234
// 4. Paste that endpoint below, replacing YOUR_FORM_ID.
// 5. Formspree will send a one-time confirmation email to
//    pkirshad813707@gmail.com — that has to be confirmed once
//    before submissions will deliver.
// ---------------------------------------------------------------
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const form = document.getElementById('promptForm');
const input = document.getElementById('promptInput');
const statusMsg = document.getElementById('statusMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;

  if (FORM_ENDPOINT.includes('YOUR_FORM_ID')) {
    statusMsg.textContent = 'Setup needed: add your Formspree endpoint in script.js';
    statusMsg.className = 'status error';
    return;
  }

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
