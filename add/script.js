db = firebase.firestore();

$('#submitForm').click(() => {
    let collection = db.collection('programs');    
    if(document.getElementById("eventInput").checked)
        collection = db.collection('events');
    const getValue = (id) => document.getElementById(id).value;
    const title = getValue('titleInput');
    const link = getValue('linkInput');
    const when = getValue('whenInput');
    const where = getValue('whereInput');
    const description = getValue('descriptionInput');
    const affiliated = document.getElementById("gatechAffiliated").checked
    if(title && link && when && where && description) {
        collection.add({title, link, when, where, description, affiliated}).then(() => location.reload());
    } else {
        alert("Please fill out all the fields!");
    }
})