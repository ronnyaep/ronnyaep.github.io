// Audio setup
const audio = new Audio('audio/fnt.mp3'); // Ajout de l'extension .mp3
audio.loop = true;

// Audio control
const audioControl = document.querySelector('.audio-control');
const audioIcon = audioControl.querySelector('i');

let isPlaying = false;

// Function to toggle audio
function toggleAudio() {
    if (isPlaying) {
        audio.pause();
        audioIcon.className = 'fas fa-volume-mute';
    } else {
        audio.play()
            .catch(err => {});
        audioIcon.className = 'fas fa-volume-up';
    }
    isPlaying = !isPlaying;
}

document.querySelectorAll('.product a').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Vous avez cliqué sur ' + this.previousElementSibling.textContent);
        // Rediriger vers le lien après l'alerte
        window.location.href = this.href;
    });
});

// Démarrer l'audio après une interaction utilisateur
window.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play()
            .then(() => {
                isPlaying = true;
                audioIcon.className = 'fas fa-volume-up';
            })
            .catch(err => {});
    }
}, { once: true }); // S'assure que cet événement est exécuté une seule fois

// Ajouter un écouteur pour le contrôle de l'audio
audioControl.addEventListener('click', toggleAudio);

// 3D effect on mousemove
document.addEventListener('mousemove', (e) => {
    const contentWrapper = document.querySelector('.content-wrapper');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    contentWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Gérer l'affichage de la page principale après le clic sur "Entrer"
document.getElementById('enter-btn').addEventListener('click', function() {
    document.getElementById('entry-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'flex';
    
    // Démarrer l'audio lorsque l'utilisateur entre
    if (!isPlaying) {
        audio.play()
            .then(() => {
                isPlaying = true;
                audioIcon.className = 'fas fa-volume-up';
            })
            .catch(err => {});
    }
});


const volumeSlider = document.querySelector('.volume-slider');
volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value / 100; // Convertir en une valeur entre 0 et 1
    audio.volume = volume;
});

// Social buttons hover effect
const buttons = document.querySelectorAll('.social-button');
buttons.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'translateY(-5px) scale(1.1)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'translateY(0) scale(1)';
    });
});
