import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

document.addEventListener('DOMContentLoaded', () => {
    const userInfoDiv = document.getElementById('userInfo');

    // Firebase 사용자 상태 감지
    onAuthStateChanged(auth, (user) => {
        console.log('Firebase Auth State:', user); // 사용자 상태를 로그에 출력
        if (user) {
            // 로그인된 사용자 정보 표시
            const email = user.email;
            userInfoDiv.innerHTML = `
                환영합니다, ${email}님!
                <button id="logoutButton" class="logout-button">로그아웃</button>
            `;

            // 로그아웃 버튼 이벤트 추가
            const logoutButton = document.getElementById('logoutButton');
            logoutButton.addEventListener('click', async () => {
                try {
                    await signOut(auth);
                    alert('로그아웃 되었습니다.');
                    userInfoDiv.textContent = '로그인이 필요합니다.';
                } catch (error) {
                    console.error('로그아웃 실패:', error);
                }
            });
        } else {
            // 로그아웃 상태
            userInfoDiv.textContent = '로그인이 필요합니다.';
        }
    });
});
