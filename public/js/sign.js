import { registerUser } from "./js/auth.js";

document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nickname = document.getElementById("nickname").value.trim();
    const email = document.getElementById("id").value.trim();
    const password = document.getElementById("password").value.trim();

    // 비밀번호 조건 체크
    if (password.length < 6) {
        document.getElementById("passwordError").style.display = "block";
        return;
    }

    try {
        // Firebase 회원가입 함수 호출
        const userCredential = await registerUser(email, password);
        const user = userCredential.user;

        // Firebase 사용자 정보로 nickname을 업데이트
        await user.updateProfile({
            displayName: nickname
        });

        // 회원가입 성공 메시지
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("passwordError").style.display = "none";

        // 회원 정보를 로컬 저장소에 저장
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        setTimeout(() => {
            window.location.href = "login.html";  // 로그인 페이지로 이동
        }, 2000);
    } catch (error) {
        console.error("회원가입 실패:", error.message);
    }
});
