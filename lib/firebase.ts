import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBt-6Bm21JwrQFq6ugsQhHAhqTSVv_h3ik",
    authDomain: "finalproj-369b9.firebaseapp.com",
    projectId: "finalproj-369b9",
    storageBucket: "finalproj-369b9.firebasestorage.app",
    messagingSenderId: "511597489155",
    appId: "1:511597489155:web:72982807b1583298c3f236"
}

const app = initializeApp(firebaseConfig)

export const database = getDatabase(app)