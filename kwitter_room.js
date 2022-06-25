var firebaseConfig = {
    apiKey: "AIzaSyDJmmPDInlbW0Gh0QSHbbKw-VIi7LtuEi4",
    authDomain: "project-94-a5fa8.firebaseapp.com",
    databaseURL: "https://project-94-a5fa8-default-rtdb.firebaseio.com",
    projectId: "project-94-a5fa8",
    storageBucket: "project-94-a5fa8.appspot.com",
    messagingSenderId: "96491549968",
    appId: "1:96491549968:web:b5fc6f346f4423e94e6195"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding room name"
  });
  localStorage.setItem("room_name", room_name);
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+ "</div><hr></hr>";
  document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}