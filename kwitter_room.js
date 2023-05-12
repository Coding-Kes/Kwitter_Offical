
var firebaseConfig =
{
     apiKey: "AIzaSyC0aqwO7rZWWiWWMTxWStPqBBC_nyrUFLY",
     authDomain: "kwitter-330c5.firebaseapp.com",
     databaseURL: "https://kwitter-330c5-default-rtdb.firebaseio.com",
     projectId: "kwitter-330c5",
     storageBucket: "kwitter-330c5.appspot.com",
     messagingSenderId: "264397667371",
     appId: "1:264397667371:web:6fd2e0f0c3be801139be6e"
   };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({
 purpose: "Adding Room"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

      Room_names = childKey;
     //Start code

     console.log("room_name" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'> #" + Room_names+" </div><hr>";
    document.getElementById("output").innerHTML +=row;

     //End code
     });});}
getData();

function redirectToRoom(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location = "index.html";
}