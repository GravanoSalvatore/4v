<template>
    <section class="about-section" id="about">
        <div class="video-container">
            <video 
                playsinline="playsinline" 
                autoplay="autoplay" 
                muted="muted" 
                loop="loop"
                src="https://assets.mixkit.co/videos/45033/45033-720.mp4" 
                title="YouTube video player" 
                allowfullscreen>
            </video>
           
            <div class="image-overlay">

                <img src="" alt="4News Logo">
                <p class="overlay-text text-uppercase fw-bold">4V.NEWS is a news aggregator of current news and articles from around the world.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.video-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-overlay {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    z-index: 10; /* Ensure the image is on top of the video */
    padding: 0 20px;
}

.image-overlay img {
    width: 20%;
    height: auto;
    display: block; /* Ensure the image displays */
    margin: 0 auto; /* Center the image */
}

.overlay-text {
    color: white;
    font-size: 1rem;
    margin-top: 10px;
    width: 100%;
    text-align: center;
    white-space: pre-wrap; /* Ensure text wraps */
}
</style>
