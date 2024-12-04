document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // 폼 제출 기본 동작 막기

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // 로컬 스토리지에서 기존 사용자 데이터 가져오기
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // 이메일 중복 확인
    const isEmailExists = existingUsers.some(user => user.email === email);

    if (isEmailExists) {
        emailError.style.display = "block";
        return; // 제출 중단
    } else {
        emailError.style.display = "none";
    }

    // 비밀번호 유효성 검사 (6자리 이상)
    if (password.length < 6) {
        passwordError.style.display = "block";
        return; // 제출 중단
    } else {
        passwordError.style.display = "none";
    }

    // 새로운 사용자 데이터 추가
    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers)); // 업데이트된 사용자 리스트 저장

    // 성공 메시지 표시
    document.getElementById("successMessage").style.display = "block";

    // 일정 시간 후 로그인 페이지로 이동
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
});
