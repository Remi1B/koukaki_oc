document.addEventListener('DOMContentLoaded', function() {
    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        video.removeAttribute('controls');  // Supprime les contrôles
        video.addEventListener('contextmenu', function(e) {
            e.preventDefault();  // Désactive le clic droit sur la vidéo
        });
    });
});