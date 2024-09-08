"use strict";
// Selecting form and display section
const resumeForm = document.getElementById('resume-builder-form');
const resumeDisplay = document.getElementById('resume-display');
// Function to generate resume
const generateResume = (event) => {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    if (!resumeDisplay)
        return; // Return if resume display section is not found
    // Capture input values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const educationYear = document.getElementById('education-year').value;
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const workYear = document.getElementById('work-year').value;
    const responsibilities = document.getElementById('responsibilities').value;
    const skills = document.getElementById('skills').value.split(',');
    // Clear the existing content before generating a new resume
    resumeDisplay.innerHTML = '';
    //  resume content dynamically based on form input
    resumeDisplay.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Contact: ${contact}</p>
        <h3>Education</h3>
        <ul>

            <li><b>Degree:</b> ${degree}</li>
            <li><b>University:</b> ${university}</li>
            <li><b>Year:</b> ${educationYear}</li>

        </ul>
        <h3>Work Experience</h3>
        <ul>
            <li><b>Job Title:</b> ${jobTitle}</li>
            <li><b>Company:</b> ${company}</li>
            <li><b>Year:</b> ${workYear}</li>
            <li><b>Responsibilities:</b> ${responsibilities}</li>
            
        </ul>
        <h3>Skills</h3>
        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
    `;
};
// Event listener to trigger resume generation on form submission
if (resumeForm) {
    resumeForm.addEventListener('submit', generateResume);
}
