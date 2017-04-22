function showStory(img) {
	document.getElementById('storyPhoto').innerHTML = "<img id=\"storyPic\" src=\"" + img + "\" >"
	document.getElementById('storyPhoto').innerHTML += "<img id=\"x\" src=\"x.png\" onclick=\"hideStory()\" >"
}

function hideStory() {
	document.getElementById('storyPhoto').innerHTML = ""
}