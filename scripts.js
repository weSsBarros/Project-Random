function generateNumber() {
    const min = Math.ceil(document.getElementById("min-value").value);
    const max = Math.floor(document.getElementById("max-value").value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result);
}
