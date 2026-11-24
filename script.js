document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let regNo = document.getElementById("regno").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let course = document.getElementById("course").value;

    let gender = document.querySelector('input[name="gender"]:checked').value;

    // Display the entered data
    document.getElementById("result").innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Registration Number:</strong> ${regNo}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Gender:</strong> ${gender}</p>
    `;

});