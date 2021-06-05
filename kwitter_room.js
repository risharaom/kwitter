
var firebaseConfig = {
      apiKey: "AIzaSyArNUHju8tBZLBV3rVbQh9EpNC5u2jcuJc",
      authDomain: "kwitter-6f0b1.firebaseapp.com",
      projectId: "kwitter-6f0b1",
      storageBucket: "kwitter-6f0b1.appspot.com",
      messagingSenderId: "497464808360",
      appId: "1:497464808360:web:e9c0af6a0ee71e5e17839d"
    };
   
    firebase.initializeApp(firebaseConfig);
    function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); } getData();
var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " +user_name+" !";
function addRoom(){
 room_name= document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
       purpose:"adding room name"
       
       
 });

}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location("kwitter_page.html");

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("index.html");
}