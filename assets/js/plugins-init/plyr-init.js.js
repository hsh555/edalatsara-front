$(document).ready(function () {
  if ($(".video-player")) {
    // youtube
    const playerYoutube = new Plyr("#player-youtube", {});
    window.player = playerYoutube;

    // Vimeo
    const playerVimeo = new Plyr("#player-vimeo", {});
    window.player = playerVimeo;

    // HTML video
    const playerHtmlvideo = new Plyr("video", {
      captions: { active: true },
    });
    window.player = playerHtmlvideo;

    // HTML audio
    const playerHtmlaudio = new Plyr("audio", {
      captions: { active: true },
    });
    window.player = playerHtmlaudio;
  }
});
