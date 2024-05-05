// Khởi tạo Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAj_rp399bQKQNt4bQzyYBhiskIaAyWvHs",
  authDomain: "iotsmarthome-e9c19.firebaseapp.com",
  databaseURL: "https://iotsmarthome-e9c19-default-rtdb.firebaseio.com",
  projectId: "iotsmarthome-e9c19",
  storageBucket: "iotsmarthome-e9c19.appspot.com",
  messagingSenderId: "1090433013367",
  appId: "1:1090433013367:web:ec3c272951c6c550dd1872",
  measurementId: "G-JRK0HKXB4X",
};
firebase.initializeApp(firebaseConfig);

function loginUser() {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Reference to your Firebase database
  var dbRef = firebase.database().ref("PasswordWeb");

  // Retrieve data from Firebase
  dbRef
    .once("value")
    .then(function (snapshot) {
      // Get the data
      var userData = snapshot.val();

      // Check if the username exists and the password matches
      if (
        userData &&
        userData.username === username &&
        userData.password === password
      ) {
        // Redirect to main screen
        window.location.href = "../MainScreen/demo.html";
      } else {
        // Handle login failure
        alert("Login failed. Please enter a valid username and password.");
      }
    })
    .catch(function (error) {
      console.error("Error retrieving data:", error);
    });
}

// Function to change password
function ChangePasswordWeb() {
  event.preventDefault();
  window.location.href = "../PasswordScreen/password.html";
}
