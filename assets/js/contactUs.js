document.getElementById('contactForm').addEventListener('submit', function (e) {
    submitForm(e);
});


function submitForm(e) {

    e.preventDefault()

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = document.getElementById('subject').value;
    const phone = document.getElementById('phone').value;
    var timestamp = new Date();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('subject', subject);
    formData.append('phone', phone);
    formData.append('timestamp', timestamp);



    sendDataToGoogleSheets(formData);
}


function sendDataToGoogleSheets(formData) {

    // const url = 'https://script.google.com/macros/s/AKfycbxudk7SBuqNypbL-xECACX6_Pad-hRQWPL8bYwup6cysQ6ekKrC56l8_Ai_mEekk2bVkg/exec'

    const url = 'https://script.google.com/macros/s/AKfycbwFzEqih6j4HlkTvGk4r8qrrUJidzA24FLPr_Mj1ECSCBbVhHG0g9csf4ZbOerMIGJC/exec';

    fetch(url, {
        
            method: 'POST',
            body: formData 
        })
        .then(response => response.json())
        .then(result => {
            console.log('Data sent successfully:', result);
            displayModal();

        })
        .catch(error => {
            console.error('Error sending data:', error);
        });
}



function displayModal() {
    document.getElementById('myModal').style.display = 'block';
    document.body.classList.add('stop-scrolling');
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    document.body.classList.remove('stop-scrolling');
    location.reload();

}
