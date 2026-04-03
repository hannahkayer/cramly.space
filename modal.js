function openModal() {
  document.getElementById('overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('overlay').classList.remove('open');
  setTimeout(resetForm, 250);
}

function resetForm() {
  document.getElementById('form-view').style.display = 'block';
  document.getElementById('success-view').style.display = 'none';
  ['c-name','c-email','c-idea'].forEach(id => document.getElementById(id).value = '');
  ['err-name','err-email','err-idea'].forEach(id => document.getElementById(id).style.display = 'none');
}

document.getElementById('overlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

function submitForm() {
  const name    = document.getElementById('c-name').value.trim();
  const email   = document.getElementById('c-email').value.trim();
  const idea    = document.getElementById('c-idea').value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  
  console.log("Form submission attempt:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Idea:", idea);

  document.getElementById('err-name').style.display  = !name    ? 'block' : 'none';
  document.getElementById('err-email').style.display = !emailOk ? 'block' : 'none';
  document.getElementById('err-idea').style.display  = !idea    ? 'block' : 'none';

  if (!name || !emailOk || !idea) {
    console.log(" Validation failed");
    return;
  }

  console.log(" Validation passed");

  document.getElementById('form-view').style.display    = 'none';
  document.getElementById('success-view').style.display = 'block';

  const formData = { name, email, idea };

  console.log(" Final Data Object:", formData);

  localStorage.setItem('idea', JSON.stringify(formData));

  console.log("Saved to localStorage");
}