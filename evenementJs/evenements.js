let parentClickCompteur = 0;
let childClickCompteur = 0;

document
    .getElementById("parent")
    .addEventListener("click", function onClickParent() {
        document
            .getElementById("parent-count")
            .innerHTML = (++parentClickCompteur);
    });

document
    .getElementById("child")
    .addEventListener("click", function onClickChild(e) {
        e.stopPropagation();
        e.preventDefault();
        document
            .getElementById("child-count")
            .innerHTML = (++childClickCompteur);
    });