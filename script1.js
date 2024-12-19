document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const trainResults = document.getElementById('trainResults');
    const bookingDetails = document.getElementById('bookingDetails');

    // Dummy train data
    const trains = [
        { id: 1, name: "Express A", source: "City A", destination: "City B", time: "10:00 AM" },
        { id: 2, name: "Express B", source: "City A", destination: "City C", time: "12:00 PM" },
        { id: 3, name: "Express C", source: "City B", destination: "City C", time: "2:00 PM" },
    ];

    // Handle train search
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const source = document.getElementById('source').value.trim();
        const destination = document.getElementById('destination').value.trim();
        const date = document.getElementById('date').value;

        const matchingTrains = trains.filter(train =>
            train.source.toLowerCase() === source.toLowerCase() &&
            train.destination.toLowerCase() === destination.toLowerCase()
        );

        if (matchingTrains.length > 0) {
            trainResults.innerHTML = `
                <h3>Available Trains:</h3>
                <ul>
                    ${matchingTrains.map(train => `
                        <li>
                            <strong>${train.name}</strong> (${train.time})
                            <button onclick="bookTrain(${train.id}, '${date}')">Book</button>
                        </li>
                    `).join('')}
                </ul>
            `;
        } else {
            trainResults.innerHTML = `<p>No trains found for the given route and date.</p>`;
        }
    });

    // Book train
    window.bookTrain = (trainId, date) => {
        const train = trains.find(t => t.id === trainId);
        bookingDetails.innerHTML = `
            <h3>Booking Details:</h3>
            <p><strong>Train:</strong> ${train.name}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p>Your ticket has been booked successfully!</p>
        `;
    };
});
