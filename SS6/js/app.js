//* firebase.firestore().collection("ten collection").ten thao tac

//* CREATE

function addData() {
  firebase.firestore().collection("files").add({
    name: "SAW",
    duration: 120,
    director: "someone",
  });
}

// addData();

//* READ
// Read one
async function readOne(id) {
  let result = await firebase.firestore().collection("users").doc(id).get();
  console.log(result.data());
}

// readOne("hXvZAQzzGoLbnGiWFmYi");

// Read many

// --> Read all

async function readAll() {
  let result = await firebase.firestore().collection("users").get();
  console.log(result.docs);
  result.docs.forEach(function (doc) {
    console.log(doc.data());
  });
}

// readAll();

// --> Read by conditions
async function readByConditions() {
  let result = await firebase
    .firestore()
    .collection("users")
    .where("age", ">=", 20)
    .get();
  console.log(result);

  result.docs.forEach(function (doc) {
    console.log(doc.id, doc.data());
  });
}

// readByConditions();

//* UPDATE

function updateData(id) {
  firebase
    .firestore()
    .collection("users")
    .doc(id)
    .update({
      age: 20,
      address: "Ho Chi Minh City",
      favorites: ["music", "sport"],
    });
}

// updateData("hXvZAQzzGoLbnGiWFmYi");

//* DELETE

function deleteData(id) {
  firebase.firestore().collection("users").doc(id).delete();
}

// deleteData("COaRBm395otDNTZZZ29r");
