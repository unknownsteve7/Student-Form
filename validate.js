function validateForm() {
    const firstname = document.getElementById('Firstname').value.trim();
    const lastname = document.getElementById('Lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const dob = document.getElementById('DOB').value;
    const genderMale = document.getElementById('gender-male').checked;
    const genderFemale = document.getElementById('gender-female').checked;

    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(firstname)) {
        alert('Firstname must contain only letters.');
        return false;
    }
    if (!nameRegex.test(lastname)) {
        alert('Lastname must contain only letters.');
        return false;
    }

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
}

    const today = new Date();
    const dobDate = new Date(dob);
    const age = today.getFullYear() - dobDate.getFullYear();

    if (age < 10 || dobDate > today) {
        alert('You must be at least 10 years old.');
        return false;
    }

    if (!genderMale && !genderFemale) {
        alert('Please select your gender.');
        return false;
    }

    const successMessage = document.createElement('p');
    successMessage.textContent = '✅ Successfully Registered';
    successMessage.style.color = 'green';
    successMessage.style.fontWeight = 'bold';
    document.querySelector('.right').appendChild(successMessage);

    return false; 
}