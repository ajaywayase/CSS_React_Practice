function handleSubmit() {
    const nameElement = document.getElementById('name-input');
    const ageElement = document.getElementById('age-input');
    const emailElement = document.getElementById('email-input');
    const checkboxElement = document.getElementById('checkbox-input');

    const name = nameElement.value.trim();
    const age = ageElement.value.trim();
    const email = emailElement.value.trim();
    const checkbox = checkboxElement.checked;

    const ageNumber = parseInt(age, 10);

    // Improved email regex
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (name.length > 0 && ageNumber > 0 && checkbox && emailRegex.test(email)) {
        console.log(name, ageNumber, email, checkbox);

        nameElement.value = "";
        ageElement.value = "";
        emailElement.value = "";
        checkboxElement.checked = false;
    } else {
        let errorMessage = 'Please fill all fields correctly:\n';
        if (name.length === 0) errorMessage += '- Full Name is required\n';
        if (!age || ageNumber <= 0) errorMessage += '- Age must be a positive number\n';
        if (!emailRegex.test(email)) errorMessage += '- Valid Email is required\n';
        if (!checkbox) errorMessage += '- You must agree to the Terms and Conditions\n';
        alert(errorMessage);
    }
}
