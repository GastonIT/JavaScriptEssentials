function submitFeedback() {

 const username = document.getElementById('name').value;
 const age = document.getElementById('age').value;
 const email = document.getElementById('email').value;
 const job = document.getElementById('job').value;
 const designation = document.getElementById('designation').value;
 const productType = document.getElementById('productType').value;
 const feedback = document.getElementById('feedbackText').value;q

 const submitButton=document.getElementById('submitBtn');

 submitButton.onclick = submitFeedback;
  alert('Thank you for your valuable feedback')

}
