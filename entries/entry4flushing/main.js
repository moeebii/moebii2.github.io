 document.addEventListener('DOMContentLoaded', function () {
        // Get the audio element
        var flushingAudio = document.getElementById('flushingAudio');

        // Get the shape element
        var shape = document.getElementById('shape');

        // Add click event listener to the shape
        shape.addEventListener('click', function () {
            // Check if the audio is paused, and play it
            if (flushingAudio.paused) {
                flushingAudio.play();
            } else {
                // If the audio is playing, pause and reset to the beginning
                flushingAudio.pause();
                flushingAudio.currentTime = 0;
            }
        });
    });