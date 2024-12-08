// Firebase 앱 초기화 및 Firebase Auth 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

// Firebase 설정 값
const firebaseConfig = {
    apiKey: "AIzaSyBZfSzxoKkiC8tcswezCET0XNpTQOFvG1s",
    authDomain: "phonepage.firebaseapp.com",
    projectId: "phonepage",
    storageBucket: "phonepage.firebasestorage.app",
    messagingSenderId: "192463391648",
    appId: "1:192463391648:web:53a4539f64a49c5332b2c5"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Firebase 초기화 로그 확인
console.log("Firebase Initialized:", auth);

// 다른 파일에서 사용할 수 있도록 auth 내보내기
export { auth };
