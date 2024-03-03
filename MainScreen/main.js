//Connect Firebase 
var firebaseConfig = {
    apiKey: "AIzaSyAj_rp399bQKQNt4bQzyYBhiskIaAyWvHs",
    authDomain: "iotsmarthome-e9c19.firebaseapp.com",
    databaseURL: "https://iotsmarthome-e9c19-default-rtdb.firebaseio.com",
    projectId: "iotsmarthome-e9c19",
    storageBucket: "iotsmarthome-e9c19.appspot.com",
    messagingSenderId: "1090433013367",
    appId: "1:1090433013367:web:ec3c272951c6c550dd1872",
    measurementId: "G-JRK0HKXB4X"
    };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Logout
document.addEventListener('DOMContentLoaded', function () {   
    // Khai báo logoutButton
    const logoutButton = document.getElementById('logoutButton');

    // Kiểm tra xem logoutButton có tồn tại không
    if (logoutButton) {
        logoutButton.addEventListener("click", function(){
            logout_function();
        });
    }
});
function logout_function() {
    window.location.href = "../LoginScreen/login.html";
}



// Đèn
function toggleButtonClick(numlight) {
    var Led1Status = document.getElementById('toggle'+ numlight).checked;
    var firebaseRef = firebase.database().ref().child("Led").child("Led" + numlight+ "Status");

    if(Led1Status == true){    // post to firebase
        firebaseRef.set("1");
    } else {
        firebaseRef.set("0");
    }
}

// // Quạt
function toggleButtonClickFan(numspan) {
    var Span1Status = document.getElementById('toggleFan'+ numspan).checked;
    var firebaseRef = firebase.database().ref().child("Span").child("Span" + numspan+ "Status");

    if(Span1Status == true){    // post to firebase
        firebaseRef.set("1");
    } else {
        firebaseRef.set("0");
    }
}

// Rèm 
function toggleButtonClickRem(numrem) {
    var Rem1Status = document.getElementById('toggleRem'+ numrem).checked;
    var firebaseRef = firebase.database().ref().child("Rem").child("Rem" + numrem+ "Status");

    if(Rem1Status == true){    // post to firebase
        firebaseRef.set("1");
    } else {
        firebaseRef.set("0");
    }
}

// Cửa
function toggleButtonClickCua(numcua) {
    var Cua1Status = document.getElementById('toggleCua'+ numcua).checked;
    var firebaseRef = firebase.database().ref().child("Cua").child("Cua" + numcua+ "Status");

    if(Cua1Status == true){    // post to firebase
        firebaseRef.set("1");
    } else {
        firebaseRef.set("0");
    }
}


// Camera
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('cameraFeed');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((error) => {
            console.error('Error accessing the camera: ', error);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('cameraFeed1');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((error) => {
            console.error('Error accessing the camera: ', error);
        });
});







