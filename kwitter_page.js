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
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        likes: 0
    });
    document.getElementById("msg").value = ""
}

function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
}