// Конфігурація Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBHbhZFAP3BPn00cgNKe7vMoe-Y2XnUzd0",
  authDomain: "tem-border-guard-system.firebaseapp.com",
  projectId: "tem-border-guard-system",
  storageBucket: "tem-border-guard-system.firebasestorage.app",
  messagingSenderId: "426817256951",
  appId: "1:426817256951:web:3ea89bb6af52e2e36ec2f2",
  measurementId: "G-5XNNQEPD1V"
};

// Ініціалізація Firebase
firebase.initializeApp(firebaseConfig);

// Ініціалізація Firestore (База даних) та Auth (Авторизація)
const db = firebase.firestore();
const auth = firebase.auth();