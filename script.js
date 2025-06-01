// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
if (currentTheme === 'dark') {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
} else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    if (newTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const responseDiv = document.getElementById('formResponse');
    
    // Save original button content
    const originalBtnContent = submitBtn.innerHTML;
    
    // Update button state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    responseDiv.style.display = 'none';
    
    try {
        const formData = new FormData(form);
        const response = await fetch('send_email.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (response.ok) {
            responseDiv.className = 'form-response success';
            responseDiv.textContent = result.success || 'Message sent successfully!';
            form.reset();
        } else {
            throw new Error(result.error || 'Failed to send message');
        }
    } catch (error) {
        responseDiv.className = 'form-response error';
        responseDiv.textContent = error.message;
    } finally {
        responseDiv.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
        
        // Scroll to response
        responseDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});