document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // 폼 기본 동작 차단

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // 로컬 스토리지에서 계정 정보 가져오기
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // 입력값과 저장된 값 비교
    if (email === storedEmail && password === storedPassword) {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("errorMessage").style.display = "none";
    } else {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("successMessage").style.display = "none";
    }
});
