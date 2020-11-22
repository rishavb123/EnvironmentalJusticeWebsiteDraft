const db = firebase.firestore();

function loadTemplateFromFirestore(templateIdentifier, collectionName, addToIdentifier, query=null) {
    const source = $(templateIdentifier)[0].innerHTML;
    const makeHtml = Handlebars.compile(source);
    const addTo = $(addToIdentifier);
    let collection = db.collection(collectionName);
    if(query != null) {
        collection = collection.where(query[0], query[1], query[2])
    }
    collection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            addTo.append(makeHtml(doc.data()));
        })
    })
}