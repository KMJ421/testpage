import { loginUser } from "./auth.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const user = await loginUser(email, password);

    // 로그인된 사용자 정보를 로컬 스토리지에 저장
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ email: user.email, uid: user.uid })
    );

    alert("로그인 성공!");
    window.location.href = "index.html"; // index.html로 리다이렉션
  } catch (error) {
    console.error("로그인 실패:", error.message);
    alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.");
  }
});
