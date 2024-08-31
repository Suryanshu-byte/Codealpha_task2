// JavaScript code for the music player
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const progressBar = document.getElementById('progress-bar');

    // List of tracks
    const tracks = [
        {
            src: 'Music/track1.mp3',
            title: 'Kanhaiya Gopala',
            artist: 'Sherya Ghoshal'
        },
        {
            src: 'Music/track2.mp3',
            title: 'Chandrachooda Shiv',
            artist: 'Artist 2'
        },
        {
            src: 'Music/track3.mp3',
            title: 'Muraliya',
            artist: 'Sherya Ghoshal'
        }
    ];

    let currentTrackIndex = 0;

    // Load the first track
    function loadTrack(index) {
        audio.src = tracks[index].src;
        trackTitle.textContent = tracks[index].title;
        trackArtist.textContent = tracks[index].artist;
        audio.load();
    }

    // Play or pause the track
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = '&#10074;&#10074;'; // Pause icon
        } else {
            audio.pause();
            playBtn.innerHTML = '&#9654;'; // Play icon
        }
    });

    // Play the previous track
    prevBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
        audio.play();
        playBtn.innerHTML = '&#10074;&#10074;';
    });

    // Play the next track
    nextBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
        audio.play();
        playBtn.innerHTML = '&#10074;&#10074;';
    });

    // Update progress bar as audio plays
    audio.addEventListener('timeupdate', () => {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
    });

    // Seek through the track when progress bar is clicked
    progressBar.addEventListener('input', () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    // Load the first track when the page loads
    loadTrack(currentTrackIndex);
});
