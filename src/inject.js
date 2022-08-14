const shorts = "https://www.youtube.com/shorts/";
let url;
setInterval(function () {
	url = window.location.href;
	if (url.startsWith(shorts)) {
		const videoId = url.split(shorts)[1];

		window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
	}
}, 2500);
