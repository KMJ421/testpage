import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

// 회원가입 함수
export async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('회원가입 성공:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('회원가입 에러:', error.message);
    throw error;
  }
}

// 로그인 함수
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('로그인 성공:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('로그인 에러:', error.message);
    throw error;
  }
}
