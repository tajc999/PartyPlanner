let parties = [
    { name: 'Party 1', date: '2023-12-18', time: '20:00', location: 'New York', description: 'Up to 50 guests' },
    { name: 'Party 2', date: '2023-12-19', time: '19:30', location: 'New Jersey', description: 'Up to 25 guests' },
    { name: 'Party 3', date: '2023-12-20', time: '20:00', location: 'New Jersey', description: 'Up to 25 guests' },
    { name: 'Party 4', date: '2023-12-21', time: '19:30', location: 'New York', description: 'Up to 50 guests' }
];
function displayParties() {
    const partyList = document.getElementById('partyList');
    partyList.innerHTML = 'Delete the party date, time, and location you want!';

    parties.forEach((party, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${party.name}</strong> -
            Date: ${party.date}, Time: ${party.time}, Location: ${party.location}, Description: ${party.description}
            <button onclick="deleteParty(${index})">Delete</button>
        `;
        partyList.appendChild(listItem);
    });
}
function deleteParty(index) {
    parties.splice(index, 1);
    displayParties();
}
document.getElementById('partyForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('partyName').value;
    const date = document.getElementById('partyDate').value;
    const time = document.getElementById('partyTime').value;
    const location = document.getElementById('partyLocation').value;
    const description = document.getElementById('partyDescription').value;

    parties.push({ name, date, time, location, description });

      displayParties();
});
displayParties();