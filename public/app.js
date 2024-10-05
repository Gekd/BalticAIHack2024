// Send JSON data to the server
document.getElementById('sendDataButton').addEventListener('click', () => {
    const data = {
        checkbox1: document.getElementById('checkbox1').checked,
        checkbox2: document.getElementById('checkbox2').checked,
        checkbox3: document.getElementById('checkbox3').checked
    };

    fetch('/update-checkboxes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(json => {
            // Update the checkboxes based on the JSON data received
            document.getElementById('checkbox1').checked = json.checkbox1;
            document.getElementById('checkbox2').checked = json.checkbox2;
            document.getElementById('checkbox3').checked = json.checkbox3;
        })
        .catch(err => console.error('Error:', err));
});
