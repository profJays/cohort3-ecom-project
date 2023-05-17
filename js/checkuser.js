import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
getAuth,
onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

const firebaseConfig = {
apiKey: "AIzaSyBKb8TIcIJsLzW3F6EFnrn14eXZQxmVYg0",
authDomain: "boot-e873b.firebaseapp.com",
projectId: "boot-e873b",
storageBucket: "boot-e873b.appspot.com",
messagingSenderId: "79211905093",
appId: "1:79211905093:web:a18c28948f3fbb5997a32c",
measurementId: "G-0TKDGHC82J"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
        
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
        document.getElementById("dashboard-link").innerHTML = '<li><a href="dashboard.html">Dashboard</a></li>';
        document.getElementById("logout-link").innerHTML = '<li><button class="normal" id="signOutBtn">Logout</button></li>';
    } else {
        // User is not logged in
        document.getElementById("login-link").innerHTML = '<li><button class="normal" onclick="window.location.href=\'login.html\';" id="signInBtn">Login</button></li>';
    }
});