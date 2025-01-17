 // Πίνακας με 5 ονόματα και πληροφορίες 
 
 const people = [
    { name: "Κωνσταντίνος", κατάσταση : "Ελεύθερος", Θέση:"Δεξί Μπακ", Ομάδες :"ΠΑΟ,ΑΕΚ,ΠΑΟΚ", Γκολ: 12},
    { name: "Μάριος",κατάσταση :"Δανεικός", Θέση:"Αριστερό Εξτρέμ",Ομάδες :"ΟΣΦΠ,ΠΑΟΚ", Γκολ: 0 },
    { name: "Νίκος", κατάσταση: "Σε ομάδα", Θέση:"Σέντερ Φορ", Ομάδες :"ΑΕΚ", Γκολ:130 },
    { name: "Άγγελος", κατάσταση: "Δανεικός", Θέση:"Αμυντικό Χαφ", Ομάδες :"ΠΑΟΚ ΠΑΟ", Γκολ: 140},
    { name: "Δημήτρης", μκατάσταση: "Ελεύθερος", Θέση:"Σέντερ Μπακ",Ομάδες :"ΟΣΦΠ", Γκολ:19 }
];




// Συνάρτηση για την αναζήτηση του ονόματος
function searchName() {
    // Παίρνω το όνομα από το πεδίο εισαγωγής
    const inputName = document.getElementById("nameInput").value.trim();
    const resultDiv = document.getElementById("result");

    
    // Ψάχνω αν το όνομα είναι έγκυρο δηλαδή υπάρχει στην λίστα
    const person = people.find(p => p.name === inputName);
   

    // Αν βρεθεί το όνομα, εμφανίζεται μαζί με τις κατάλληλες ππληροφορίες 
    if (person) {
        resultDiv.innerHTML = `
            <p>Το όνομα <strong>"${person.name}"</strong> βρέθηκε</p>
            <p>Μεταγραφικό Status: ${person.κατάσταση } </p>
            <p>Θέση: ${person.Θέση}</p>
            <p>Ομάδες: ${person.Ομάδες}</p>
            <p>Γκολ:${person.Γκολ}</p>
        `;
        resultDiv.style.color = "green";
    } else {
        // Αν δεν βρεθεί, εμφανίζεται μήνυμα αποτυχημένης αναζήτησης 
        resultDiv.textContent = `Το όνομα "${inputName}" δεν βρέθηκε.Προσπαθήστε ξανά`;
        resultDiv.style.color = "red";
    }
}