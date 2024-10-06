function fetchAndUpdateCheckboxes() {
    fetch('/get-checkbox-data')
        .then(response => response.json())
        .then(json => {
            json.forEach(item => {
                const checkbox = document.getElementById(`checkbox${item.id}`);
                if (checkbox) {
                    checkbox.checked = item.checked;
                }
            });
        })
        .catch(err => console.error('Error fetching checkbox data:', err));
}

function showPopup(event) {
    event.preventDefault(); // Prevent page reload

    const inputElement = document.getElementById('idea');
    const labelText = inputElement.value.trim();

    if (labelText) {
        let checkboxLabels = JSON.parse(localStorage.getItem('checkboxLabels')) || [];
        checkboxLabels.push(labelText);
        localStorage.setItem('checkboxLabels', JSON.stringify(checkboxLabels));

        inputElement.value = ''; // Clear input field

        const popup = document.getElementById('popupMessage');
        popup.innerText = `"${labelText}" added successfully!`;
        popup.style.display = 'block';

        setTimeout(() => {
            popup.style.display = 'none';
        }, 2000);

        // Render the checkboxes after adding new input
        renderCheckboxes();
    }
}

function renderCheckboxes() {
    const checkboxContainer = document.getElementById('checkboxContainer');
    checkboxContainer.innerHTML = ''; // Clear previous checkboxes

    const checkboxLabels = JSON.parse(localStorage.getItem('checkboxLabels')) || [];
    checkboxLabels.forEach((label, index) => {
        const labelElement = document.createElement('label');
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.id = `checkbox${index}`;

        labelElement.appendChild(checkboxElement);
        labelElement.append(` ${label}`);

        const deleteButton = document.createElement('img');
        deleteButton.src = '/images/delete.svg';
        deleteButton.alt = 'Delete';
        deleteButton.classList.add('delete-icon');
        deleteButton.style.width = '20px';
        deleteButton.style.height = '20px';
        deleteButton.style.cursor = 'pointer';
        deleteButton.style.marginLeft = '10px';
        deleteButton.style.verticalAlign = 'middle';

        deleteButton.addEventListener('click', () => {
            deleteCheckbox(index);
        });

        labelElement.appendChild(deleteButton);
        checkboxContainer.appendChild(labelElement);
        checkboxContainer.appendChild(document.createElement('br'));
    });
}

function deleteCheckbox(index) {
    let checkboxLabels = JSON.parse(localStorage.getItem('checkboxLabels')) || [];
    checkboxLabels.splice(index, 1); // Remove checkbox by index
    localStorage.setItem('checkboxLabels', JSON.stringify(checkboxLabels));
    renderCheckboxes(); // Re-render checkboxes after deletion
}

// Render checkboxes on page load
document.addEventListener('DOMContentLoaded', () => {
    renderCheckboxes();
});

// Optional: Periodic updates (if needed)
setInterval(() => {
    fetchAndUpdateCheckboxes(); // Update checkbox states periodically
}, 1000);
