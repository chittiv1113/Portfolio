// Custom cursor
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 20 + 'px';
    cursor.style.top = e.clientY - 20 + 'px';
});

// Cursor interactions
const interactiveElements = document.querySelectorAll('a, .project-card');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '60px';
        cursor.style.height = '60px';
        cursor.style.borderColor = 'rgba(255, 255, 255, 0.6)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    });
});