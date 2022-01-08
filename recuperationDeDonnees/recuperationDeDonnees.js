document
    .getElementById('name').addEventListener("input", function onInput(e) {
        document
            .getElementById('res-name')
            .innerHTML = e.target.value;
    });

document
    .getElementById("gender")
    .addEventListener("change", function onChange(e) {
        document
            .getElementById('res-gender')
            .innerHTML = e.target.value;
    });

document
    .getElementById("result")
    .addEventListener("mousemove", function onMouse(e) {
        document
            .getElementById("mouse-x")
            .innerHTML = e.offsetX;
        document
            .getElementById("mouse-y")
            .innerHTML = e.offsetY;
    });