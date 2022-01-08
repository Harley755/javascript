// Récupérez l'élément ayant pour ID main-content grâce à son ID ;
console.log(document.getElementById("main-content"))

// Récupérez les éléments ayant pour classe  important
console.log(document.getElementsByClassName("important"));

// Récupérez les éléments de type  article
console.log(document.getElementsByTagName("article"));

// Récupérez les éléments de type  li qui sont dans une liste ul ayant la classe  important . Cette liste doit elle-même être dans un article (article)
let listeEl = document.querySelector("article > ul.important > li")
console.log(listeEl);

// En reprenant le résultat de la tâche précédente, récupérez l'élément li suivant de la liste ul
console.log(listeEl.nextElementSibling);