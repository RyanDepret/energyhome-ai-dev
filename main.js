const bouton = document.getElementById("analyze-btn")
const element = document.getElementById("message-btn")
const calculerBtn = document.getElementById("calculer-btn")
const resultatDpe = document.getElementById("resultat-dpe")
const classes = ["A", "B", "C", "D", "E", "F", "G"]
const listeClasses = document.getElementById("liste-classes")

function calculerClasse(annee) {
    if (annee < 1975) {
        return { lettre: "G", texte: "Classe F ou G" }
    }
    else if (annee >= 1975 && annee < 2000) {
        return { lettre: "D", texte: "Classe D ou E" }
    }
    else if (annee >= 2000 && annee < 2010) {
        return { lettre: "C", texte: "Classe C" }
    }
    else {
        return { lettre: "A", texte: "Classe A ou B" }
    }
}
calculerBtn.addEventListener("click", function() {
    const surface = document.getElementById("surface").value
    const annee = document.getElementById("annee").value
    
    if (surface === "" || annee === "") {
        resultatDpe.textContent = "⚠️ Veuillez remplir tous les champs"
        return
    }
    
    const classe = calculerClasse(annee)
    resultatDpe.textContent = "Surface : " + surface + " m² - " + classe.texte
    if (classe.lettre === "A" || classe.lettre === "B") {
    resultatDpe.style.color = "green"
    }
    else if (classe.lettre === "C") {
    resultatDpe.style.color = "#CA8A04"
    }
    else if (classe.lettre === "D" || classe.lettre === "E") {
    resultatDpe.style.color = "orange"
    }
    else {
    resultatDpe.style.color = "red"
    }
    listeClasses.style.display = "block"
    listeClasses.innerHTML = ""
    for (let i = 0; i < classes.length; i++) {
    const item = document.createElement("li")
    if (classe.lettre === classes[i]) {
    item.style.backgroundColor = "#10B981"
    item.style.fontWeight = "bold"
}
    item.textContent = "Classe " + classes[i]
    listeClasses.appendChild(item)
}
    localStorage.setItem("dernierResultat", resultatDpe.textContent)
})
const dernierResultat = localStorage.getItem("dernierResultat")
if (dernierResultat) {
    resultatDpe.textContent = dernierResultat
}

