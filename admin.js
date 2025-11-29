document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('fleetForm');
    const cardsContainer = document.getElementById('fleetCardsContainer');
    const isAvailableCheckbox = document.getElementById('isAvailable');
    const availabilityStatusSpan = document.getElementById('availabilityStatus');

    
     
    function updateAvailabilityStatus() {
        if (isAvailableCheckbox.checked) {
            availabilityStatusSpan.textContent = '(Available)';
            availabilityStatusSpan.style.color = '#28a745'; 
        } else {
            availabilityStatusSpan.textContent = '(Unavailable)';
            availabilityStatusSpan.style.color = '#dc3545'; 
        }
    }

    updateAvailabilityStatus();
    isAvailableCheckbox.addEventListener('change', updateAvailabilityStatus);

    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        
        const regNo = document.getElementById('regNo').value.trim();
        const category = document.getElementById('category').value;
        const driverName = document.getElementById('driverName').value.trim();
        const isAvailable = isAvailableCheckbox.checked;

        if (!regNo || !category || !driverName) {
            alert('Validation Error: Please fill out all required fields.');
            return;
        }

        
        createVehicleCard({
            regNo: regNo,
            category: category,
            driverName: driverName,
            isAvailable: isAvailable
        });

        
        form.reset();
        updateAvailabilityStatus(); 
    });

    
    function createVehicleCard(vehicleData) {
        const statusText = vehicleData.isAvailable ? 'Available' : 'Unavailable';
        const statusClass = vehicleData.isAvailable ? 'available' : 'unavailable';

        const newCard = document.createElement('div');
        newCard.classList.add('vehicle-card');
        
        newCard.innerHTML = `
            <h4>Reg No: ${vehicleData.regNo}</h4>
            <p><strong>Category:</strong> ${vehicleData.category}</p>
            <p><strong>Driver:</strong> ${vehicleData.driverName}</p>
            <p class="status ${statusClass}">${statusText}</p>
        `;
        
        cardsContainer.appendChild(newCard);
    }
    
    
    createVehicleCard({regNo: 'KA-01-A-1234', category: 'Car', driverName: 'John Doe', isAvailable: true});
    createVehicleCard({regNo: 'TN-05-B-5678', category: 'Truck', driverName: 'Jane Smith', isAvailable: false});
    createVehicleCard({regNo: 'MH-12-C-9012', category: 'Bus', driverName: 'Robert Brown', isAvailable: true});
    createVehicleCard({regNo: 'AP-03-D-0001', category: 'Auto', driverName: 'Alice Green', isAvailable: false});
});
