var firebaseConfig = {
    apiKey: "AIzaSyCyiek8T2YJkF6E2FXnvx30Qh0_Qjzxa9Q",
    authDomain: "lets-chat-web-app-3b4b9.firebaseapp.com",
    projectId: "lets-chat-web-app-3b4b9",
    storageBucket: "lets-chat-web-app-3b4b9.appspot.com",
    messagingSenderId: "201168865598",
    appId: "1:201168865598:web:c3a5bef902b55dea5d846f"
  };
  
  // Initialize Firebase
  database.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;



});});}
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.setItem("room_name");

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name"); 
    window.location = "index.html";
}

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });

  document.getElementById("msg").value = "";
}