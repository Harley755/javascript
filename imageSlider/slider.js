document.body.onload = function() {
    let pictureNumbers = 6;
    let picturePositions = 0;

    let container = document.getElementById("container");
    let bouttonLeft = document.getElementById("btnLeft");
    let bouttonRight = document.getElementById("btnRight");

    container.style.width = (59 * pictureNumbers) + "vw";

    for (i = 1; i <= pictureNumbers; i++) {
        let div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('images/" + i + ".jpg')";
        container.appendChild(div);
    }

    bouttonLeft.addEventListener('click', function onClickLeft() {
        if (picturePositions < 0) {
            picturePositions++;
        }
        console.log("P = " + picturePositions);
        container.style.transform = "translate(" + picturePositions * 59 + "vw)";
    })

    bouttonRight.addEventListener('click', function onClickRIbouttonRight() {
        if (picturePositions > -pictureNumbers + 1) {
            picturePositions--;
        }
        console.log(picturePositions);
        container.style.transform = "translate(" + picturePositions * 59 + "vw)";
    })
}