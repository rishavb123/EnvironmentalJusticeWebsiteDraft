db = firebase.firestore();

$('#submitForm').click(() => {
    if(prompt('Are you sure? (Y/n)').toUpperCase().charAt(0) == 'Y') {
        let collection = db.collection('programs');  
        let url = '../programs';  
        if(document.getElementById("eventInput").checked) {
            collection = db.collection('events');
            url = '../events';
        }
        const getValue = (id) => document.getElementById(id).value;
        const title = getValue('titleInput');
        if(title) {
            collection.where('title', '==', title).get().then((snapshot) => {
                snapshot.forEach((doc) => {
                    doc.ref.delete().then(() => location.href = url);
                });
            });
        } else {
            alert("Please fill out all the fields!");
        }
    }
});