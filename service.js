document.addEventListener("DOMContentLoaded", () => {
    const servicesGrid = document.getElementById("services-grid");
    fetch("service.json")
        .then(response => {
            console.log("Fetch Response:", response);
            return response.json();
        })
        .then(data => {
            console.log("Services Data:", data);
            data.forEach(service => {
                const serviceItem = document.createElement("div");
                serviceItem.classList.add("service-item");
                serviceItem.innerHTML = `
                    <img src="${service.image}" alt="${service.alt}">
                    <div class="service-item-text">
                        <h2>${service.title}</h2>
                        <p>${service.description}</p>
                    </div>
                `;
                servicesGrid.appendChild(serviceItem);
            });
        })
        .catch(error => console.error("Error loading services:", error));
});
