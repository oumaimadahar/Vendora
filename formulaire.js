function calculerTotal() {
    const quantite = document.getElementById('quantite').value;
    const prixUnitaire = document.getElementById('prixUnitaire').value;
    const total = quantite * prixUnitaire;
    document.getElementById('total').value = total;
}



function validerChamps(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire

    const champs = document.querySelectorAll('.sana input[type="text"], .sana input[type="email"], .sana input[type="tel"], .sana input');
    const messageSuccess = document.getElementById('messageSuccess');
    const messageError = document.getElementById('messageError');

    // Réinitialiser les messages
    messageSuccess.innerText = '';
    messageError.innerText = '';

    // Réinitialiser les messages d'erreur précédents
    const previousErrorMessages = document.querySelectorAll('.erreur-message');
    previousErrorMessages.forEach(msg => msg.remove());

    let estValide = true; // Variable pour vérifier la validité du formulaire

    champs.forEach((champ) => {
        const champLabel = champ.previousElementSibling.innerText.trim();

        // Vérification des champs vides
        if (champ.value.trim() === '') {
            const messageErreur = document.createElement('div');
            messageErreur.className = 'erreur-message erreur-vert'; // Ajouter la classe pour afficher en vert
            messageErreur.innerText = champLabel + ' n\'est pas rempli.';
            champ.parentNode.insertBefore(messageErreur, champ.nextSibling); // Afficher le message d'erreur à côté du champ
            estValide = false; // Marquer comme non valide
        }

    });

    // Affichage du message de succès si tout est valide
    if (estValide) {
        messageSuccess.innerText = 'Votre commande a bien été réussie !'; // Afficher le message de succès
        messageSuccess.classList.add('succes-message'); // Ajouter une classe pour afficher en rouge
    }
}
document.getElementById('tele').addEventListener('input', function() {
    let tele = this.value;
    // Remplacer tout caractère non numérique par une chaîne vide
    this.value = tele.replace(/\D/g, '');

    // Limiter la longueur à 10 chiffres
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }

    // Vérifier si la valeur contient uniquement des chiffres
    if (this.value.length === 10 && !/^\d+$/.test(this.value)) {
        alert('You must enter only numbers.');
    }
});

document.getElementById('codePostal').addEventListener('input', function() {
    let codePostal = this.value;
    // Remplacer tout caractère non numérique par une chaîne vide
    this.value = codePostal.replace(/\D/g, '');

    // Limiter la longueur à 5 chiffres
    if (this.value.length > 5) {
        this.value = this.value.slice(0, 5);
    }

    // Vérifier si la valeur contient uniquement des chiffres
    if (this.value.length === 5 && !/^\d+$/.test(this.value)) {
        alert('You must enter only numbers for the postal code.');
    }
});
// ////////////////////////////
function resetForm() {
    // Réinitialiser les messages de succès et d'erreur
    document.getElementById('messageSuccess').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('successMessage').style.display = 'none'; // Cacher le message de succès

    // Réinitialiser le total
    document.getElementById('total').value = 0; // Réinitialiser le total à 0
}




