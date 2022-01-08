// Créez un nouvel élément de type paragraphe  p
let p = document.createElement("p");

// Ajoutez votre nouvel élément dans l'élément ayant pour id  main  ;
document.getElementById("main").appendChild(p);

// Ajoutez ce contenu HTML dans l'élément que vous avez créé lors de la première tâche :  Mon <strong>grand</strong> contenu  
p.innerHTML = "Mon <strong>grand</strong> contenu";

// Ajoutez la classe important à l'élément que vous avez créé lors de la première tâche ;
p.classList.add("important");

// Changement de couleur
p.style.color = "green";