// Function to fetch and update checkboxes based on server data
function fetchAndUpdateCheckboxes() {
    fetch('/get-checkbox-data')
        .then(response => response.json())
        .then(json => {
            // Update the checkboxes based on the JSON data received
            json.forEach(item => {
                if (item.id === 0) {
                    document.getElementById('checkbox1').checked = item.checked;
                }
                if (item.id === 1) {
                    document.getElementById('checkbox2').checked = item.checked;
                }
                if (item.id === 2) {
                    document.getElementById('checkbox3').checked = item.checked;
                }
            });
        })
        .catch(err => console.error('Error fetching checkbox data:', err));
}

function showPopup(event) {
    // Prevent default form submission for demo purposes
    event.preventDefault();

    // Show the popup
    const popup = document.getElementById('popup');
    popup.classList.add('show');

    // Hide the popup after 3 seconds
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);

    // Optionally, submit the form after showing the popup
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchAndUpdateCheckboxes();
});

// OPTIONAL: If you want the checkboxes to automatically update every few seconds, you can use setInterval.
setInterval(() => {
    fetchAndUpdateCheckboxes(); // Fetch updated checkbox data every 5 seconds
}, 1000); // Adjust the interval as needed (5000 ms = 5 seconds)
