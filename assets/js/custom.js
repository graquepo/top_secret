document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    function loadPage(url, transitionClass = 'hidden-fade-slide') {
        container.classList.add(transitionClass); // Add hidden-fade-slide effect
        setTimeout(() => {
            fetch(url)
                .then(response => response.text())
                .then(content => {
                    container.innerHTML = content;
                    console.log(content);
                    container.classList.remove(transitionClass); // Remove effect after load
                    attachLinkListeners(); // Rebind events
                });
        }, 800);
    }

    function attachLinkListeners() {
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                const url = link.getAttribute('href');
                const transitionClass = link.dataset.transition || 'hidden-fade-slide';
                loadPage(url, transitionClass);
            });
        });
    }

    attachLinkListeners(); // Bind events on initial page load
});