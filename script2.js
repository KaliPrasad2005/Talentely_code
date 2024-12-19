document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;
  
    // Validate form data
    if (!departure || !arrival || !date || !passengers) {
      alert("Please fill in all the fields.");
      return;
    }
  
    // Generate booking summary
    const summary = `
      <h2>Booking Summary</h2>
      <p><strong>Departure City:</strong> ${departure}</p>
      <p><strong>Arrival City:</strong> ${arrival}</p>
      <p><strong>Travel Date:</strong> ${date}</p>
      <p><strong>Number of Passengers:</strong> ${passengers}</p>
    `;
  
    // Display summary
    const summaryDiv = document.getElementById('bookingSummary');
    summaryDiv.innerHTML = summary;
    summaryDiv.style.display = 'block';
  });
  