function calculateAge() {
    // Get the current date
    const currentDate = new Date();

    // Get the user's input for the date of birth
    const day = document.getElementById('dobDay').value;
    const month = document.getElementById('dobMonth').value - 1; // Months are 0-based (0 = January)
    const year = document.getElementById('dobYear').value;

    // Check if all input fields are filled
    if (!day || !month || !year) {
        alert("Please enter a complete date of birth.");
        return;
    }

    // Create a Date object for the user's date of birth
    const dob = new Date(year, month, day);

    // Calculate the age
    let age = currentDate.getFullYear() - dob.getFullYear();
    const m = currentDate.getMonth() - dob.getMonth();

    // If the current month is before the birth month or it's the same month but the day hasn't passed yet, subtract 1 from the age
    if (m < 0 || (m === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result with animation
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You are ${age} years old.`;
    resultDiv.style.animation = 'fadeInUp 1s forwards';
}
