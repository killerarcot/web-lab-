// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#ffffff';
        nav.style.padding = '15px 10%';
        nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        nav.querySelector('.logo').style.color = '#2d3748';
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.style.color = '#2d3748';
        });
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '20px 10%';
        nav.style.boxShadow = 'none';
        nav.querySelector('.logo').style.color = '#ffffff';
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.style.color = '#ffffff';
        });
    }
});

// Original Contact Form Handler
document.getElementById('consultingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! Our team will contact you shortly.');
    this.reset();
});

// DOWNLOAD DATA AS TEXT FILE FUNCTION
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect values
    const rating = document.getElementById('rating').value;
    const feedback = document.getElementById('feedbackText').value;
    const date = new Date().toLocaleString();

    // Format the text content
    const content = `
CLIENT FEEDBACK REPORT
----------------------
Date: ${date}
Rating: ${rating} / 5
Message: ${feedback}
----------------------
    `;

    // Create a blob and download link
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'feedback_report.txt';
    
    // Trigger download
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    alert('Feedback data downloaded as feedback_report.txt');
    this.reset();
});

// Page Clearer logic
document.addEventListener('DOMContentLoaded', function() {
    const clearButton = document.getElementById('submitBtn');
    if (clearButton) {
        clearButton.addEventListener('click', function() {
            document.body.innerHTML = '<h1 style="text-align: center; margin-top: 20%; font-family: Inter, sans-serif;">Thank You</h1>';
            document.body.style.background = 'white'; 
        });
    }
});