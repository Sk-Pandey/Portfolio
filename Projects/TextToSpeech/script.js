let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("select");

function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ""; // clear old options
    voices.forEach((voice, i) => {
        const option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
    speech.voice = voices[0];
}

window.speechSynthesis.onvoiceschanged = populateVoices;
populateVoices(); // in case voices already available

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[parseInt(voiceSelect.value)];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.cancel(); // optional: stop ongoing speech
    window.speechSynthesis.speak(speech);
});
