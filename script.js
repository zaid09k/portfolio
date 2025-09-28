// Contact form handler
function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('formMsg');

  if(!name || !email || !message){
    formMsg.textContent = 'Please fill all fields';
    formMsg.style.color = '#f87171';
    return;
  }

  formMsg.style.color = '#9ae6b4';
  formMsg.textContent = 'Thanks, message sent (demo).';

  setTimeout(()=>{
    formMsg.textContent='';
    document.getElementById('contact').reset();
  },2000);
}
