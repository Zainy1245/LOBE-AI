document.addEventListener('DOMContentLoaded', function() {
    const highlightText = document.querySelector('.highlight');
    const texts = ['count reps', 'track progress', 'monitor workouts'];
    let index = 0;

    setInterval(() => {
        highlightText.textContent = texts[index];
        index = (index + 1) % texts.length;
    }, 2000);
});
document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const originalText = 'ONNX';
    const newText = 'Anywhere';

    // Function to toggle the text
    const toggleText = () => {
        dynamicText.textContent = dynamicText.textContent === originalText ? newText : originalText;
    };

    // Call the function to change the text every 3 seconds
    setInterval(toggleText, 3000);
});
function toggleMenu() {
    const navbarNav = document.querySelector('.navbar-nav');
    navbarNav.classList.toggle('show');
}
//For help page 
document.addEventListener('DOMContentLoaded', function() {
    var faqs = document.querySelectorAll('.faq h2');
    
    faqs.forEach(function(faq) {
        faq.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});