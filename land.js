document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            const hash = this.hash;
            if (hash !== "") {
                event.preventDefault();
                const target = document.querySelector(hash);
                if (target) {
                    const offset = 200;
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });
                    window.history.pushState(null, null, hash);
                }
            }
        });
    });
});
