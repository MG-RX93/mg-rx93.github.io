document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // About Me
            const aboutSection = document.querySelector('#about p');
            aboutSection.textContent = data.about;

            // Experience
            const experienceSection = document.querySelector('#experience div');
            data.experience.forEach(item => {
                const experienceDiv = document.createElement('div');
                experienceDiv.innerHTML = `
                    <h3>${item.company} - ${item.role}</h3>
                    <p>${item.years}</p>
                    <p>${item.details}</p>
                `;
                experienceSection.appendChild(experienceDiv);
            });

            // Education
            const educationSection = document.querySelector('#education div');
            const education = data.education;
            educationSection.innerHTML = `
                <h3>${education.degree}</h3>
                <p>${education.institution}, ${education.years}</p>
            `;
        })
        .catch(error => console.error('Error loading the data:', error));
});
