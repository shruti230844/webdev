document.addEventListener("DOMContentLoaded", () => {
    const blogBoxContainer = document.getElementById("blog-box-container");
    fetch("blog.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            data.forEach(blog => {
                const blogBox = document.createElement("div");
                blogBox.classList.add("blog-box");

                blogBox.innerHTML = `
                    <h2>${blog.title}</h2>
                    <p>${blog.description}</p>
                `;
                blogBoxContainer.appendChild(blogBox);
            });
        })
        .catch(error => {
            blogBoxContainer.innerHTML = `<p>Error loading blogs. Please try again later.</p>`;
            console.error("Error loading blogs:", error);
        });
});
