const API_URL = 'http://192.168.1.4:5000';

// Function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
}

// Function to get priority class
function getPriorityClass(priority) {
    if (priority >= 4) return 'high-priority';
    if (priority >= 2) return 'medium-priority';
    return 'low-priority';
}

// Function to update statistics
function updateStatistics(patients) {
    const totalPatientsElement = document.getElementById('total-patients');
    const highPriorityElement = document.getElementById('high-priority');

    if (totalPatientsElement) {
        totalPatientsElement.textContent = patients.length;
    }

    if (highPriorityElement) {
        const highPriorityCount = patients.filter(p => p.priority >= 4).length;
        highPriorityElement.textContent = highPriorityCount;
    }
}

// Function to load patients
async function loadPatients() {
    const tableBody = document.getElementById('patients-body');
    if (!tableBody) return;

    try {
        const response = await fetch(`${API_URL}/patients`);
        const patients = await response.json();

        // Update statistics
        updateStatistics(patients);

        // Sort patients by priority (highest first)
        patients.sort((a, b) => b.priority - a.priority);

        tableBody.innerHTML = patients.map(patient => `
            <tr class="${getPriorityClass(patient.priority)}">
                <td>
                    <span class="priority-badge priority-${patient.priority}">
                        ${patient.priority}
                    </span>
                </td>
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.condition}</td>
                <td>${formatDate(patient.arrival_time)}</td>
                <td class="actions-cell">
                    <button onclick="deletePatient(${patient.id})" class="btn-delete" title="Delete Patient">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Error loading patients:', error);
    }
}

// Function to add new patient
async function addPatient(event) {
    event.preventDefault();

    const form = event.target;
    const formData = {
        name: form.name.value,
        age: parseInt(form.age.value),
        condition: form.condition.value,
        priority: parseInt(form.priority.value)
    };

    try {
        const response = await fetch(`${API_URL}/patients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            window.location.href = 'index.html';
        } else {
            throw new Error('Failed to add patient');
        }
    } catch (error) {
        console.error('Error adding patient:', error);
        alert('Failed to add patient. Please try again.');
    }
}

// Function to delete patient
async function deletePatient(patientId) {
    if (!confirm('Are you sure you want to delete this patient?')) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/patients/${patientId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Reload the patient list
            loadPatients();
        } else {
            throw new Error('Failed to delete patient');
        }
    } catch (error) {
        console.error('Error deleting patient:', error);
        alert('Failed to delete patient. Please try again.');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load patients if on index page
    if (window.location.pathname.endsWith('index.html')) {
        loadPatients();
        
        // Add refresh button handler
        const refreshBtn = document.getElementById('refresh-btn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', loadPatients);
        }
    }

    // Add patient form handler
    const addPatientForm = document.getElementById('add-patient-form');
    if (addPatientForm) {
        addPatientForm.addEventListener('submit', addPatient);
    }
});