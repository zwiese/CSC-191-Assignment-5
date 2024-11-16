function makeTextBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

function showStyleAlert() {
    const textArea = document.getElementById("userText");

    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }

    alert("You have selected a new text style!");
}

function makeMoo() {
    let text = document.getElementById("userText").value;
    text = text.toUpperCase();

    let sentences = text.split(". ");

    sentences = sentences.map(sentence => {
        let words = sentence.split(" ");

        if (words.length > 0) {
            words[words.length - 1] = words[words.length - 1] + "-Moo";
        }

        return words.join(" ");
    });

    text = sentences.join(". ") + ".";

    document.getElementById("userText").value = text;
}
