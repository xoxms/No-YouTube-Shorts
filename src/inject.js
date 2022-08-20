const shortsRegex = /https:\/\/www\.youtube\.com\/shorts\//;
let url;

setInterval(function () {
    run_2();
    run_1();
}, 3000);

function run_1() {
    url = window.location.href;
    if (isShorts(url)) {
        window.location.href = convert(url);
    }
}

function run_2() {
    const elements = document.getElementsByTagName("a");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (isShorts(element.href)) {
            element.href = convert(element.href);
        }
    }
}

function convert(link) {
    return `https://www.youtube.com/watch?v=${getVideoId(link)}`;
}

function getVideoId(link) {
    return link.split(shortsRegex)[1];
}

function isShorts(link) {
    return link.match(shortsRegex);
}
