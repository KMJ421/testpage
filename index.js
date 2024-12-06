document.addEventListener("DOMContentLoaded", () => {
    const userInfoDiv = document.getElementById("userInfo");
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // 객체로 변환

    // 사용자 정보 표시
    if (loggedInUser) {
        userInfoDiv.innerHTML = `
            환영합니다, ${loggedInUser.nickname}님! <!-- 닉네임 표시 -->
            <button class="logout-button" id="logoutButton">로그아웃</button>
        `;

        // 로그아웃 버튼 클릭 시 동작
        const logoutButton = document.getElementById("logoutButton");
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser"); // 사용자 정보 제거
            alert("로그아웃 되었습니다.");
            // 로그아웃 후 사용자 정보 숨김
            userInfoDiv.innerHTML = "로그인이 필요합니다.";
        });
    } else {
        userInfoDiv.textContent = "로그인이 필요합니다.";
    }
});
