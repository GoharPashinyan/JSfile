document.getElementById('dataForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    const favColor = document.getElementById('favcolor').value;
    const date = document.getElementById('date').value;
    const messageElement = document.getElementById('message');

    if (!firstName || !lastName || !age || !date) {
        messageElement.textContent = "Error! All fields are required.";
        return;
    }

    messageElement.textContent = "";

    const list = document.querySelector('.list');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <strong>Name:</strong> ${firstName} ${lastName}<br>
        <strong>Age:</strong> ${age}<br>
        <strong>Favorite Color:</strong> <span style="color:${favColor}">${favColor}</span><br>
        <strong>Date:</strong> ${date}
        <button class="delete-btn">X</button>
    `;

    listItem.querySelector('.delete-btn').addEventListener('click', function () {
        listItem.remove();
    });

    list.appendChild(listItem);
    document.getElementById('dataForm').reset();
});