function enroll(videoSrc) {
  // Store selected video in localStorage to access it in video.html
  localStorage.setItem("https://youtube.com/shorts/vMV1s-1BKvc?si=8Gb39oLk4Ejo4-Wm", videoSrc);
  // Redirect to video player page (we'll reuse course.html to show the video inline for now)
  const player = document.createElement('div');
  player.innerHTML = `
    <h1>🎥 Course Video</h1>
    <video controls autoplay>
      <source src="${videoSrc}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <br />
    <button onclick="location.href='progress.html'">Progress</button>
  `;
  document.body.innerHTML = '';
  document.body.appendChild(player);
}