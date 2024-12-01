// Define a class to manage the wellness content
class WellnessContent {
    constructor(title, description, mission, uniquePoints, priority) {
        this.title = title;
        this.description = description;
        this.mission = mission;
        this.uniquePoints = uniquePoints;
        this.priority = priority;
    }

    // Method to render the content dynamically on the page
    renderContent() {
        document.getElementById('title').innerText = this.title;
        document.getElementById('description').innerText = this.description;
        document.getElementById('mission').innerText = this.mission;
        document.getElementById('priority').innerText = this.priority;

        const uniquePointsList = document.getElementById('uniquePoints');
        this.uniquePoints.forEach(point => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${point.title}:</strong> ${point.description}`;
            uniquePointsList.appendChild(listItem);
        });
    }

    // Static method to fetch and parse JSON data
    static fetchContentData() {
        return fetch('knowmore.json')
            .then(response => response.json())
            .then(data => {
                return new WellnessContent(
                    data.title,
                    data.description,
                    data.mission,
                    data.uniquePoints,
                    data.priority
                );
            })
            .catch(error => console.error('Error loading content:', error));
    }
}

// Once the DOM is ready, fetch and render the content
document.addEventListener('DOMContentLoaded', () => {
    WellnessContent.fetchContentData()
        .then(wellnessContent => {
            wellnessContent.renderContent();
        });
});
