import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    const userStatusDiv = document.getElementById("userStatus");
    const phoneModelSelect = document.getElementById("phoneModel");
    const postInput = document.getElementById("postInput");
    const postButton = document.getElementById("postButton");
    const postsContainer = document.getElementById("postsContainer");
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");
    const currentPageSpan = document.getElementById("currentPage");
    const filterModelSelect = document.getElementById("filterModel");

    const postsPerPage = 5;
    let currentPage = 1;
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let loggedInUser = null;

    // Firebase 인증 상태 확인
    onAuthStateChanged(auth, (user) => {
        if (user) {
            loggedInUser = user.email;
            userStatusDiv.innerHTML = `
                환영합니다, ${loggedInUser}!
                <button id="logoutButton" class="logout-button">로그아웃</button>
            `;

            const logoutButton = document.getElementById("logoutButton");
            logoutButton.addEventListener("click", async () => {
                try {
                    await signOut(auth);
                    alert("로그아웃되었습니다.");
                    location.reload();
                } catch (error) {
                    console.error("로그아웃 실패:", error);
                }
            });

            phoneModelSelect.disabled = false;
            postInput.disabled = false;
            postButton.disabled = !phoneModelSelect.value || !postInput.value.trim(); // 초기 버튼 상태
        } else {
            loggedInUser = null;
            userStatusDiv.textContent = "로그인이 필요합니다.";
            phoneModelSelect.disabled = true;
            postInput.disabled = true;
            postButton.disabled = true; // 버튼 비활성화
        }
    });

    // 게시글 렌더링 함수
    const renderPosts = (filter = "all") => {
        postsContainer.innerHTML = "";

        const sortedPosts = [...posts].sort((a, b) => b.timestamp - a.timestamp);
        const filteredPosts = filter === "all"
            ? sortedPosts
            : sortedPosts.filter((post) => post.model === filter);

        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

        if (paginatedPosts.length === 0) {
            postsContainer.innerHTML = "<p>게시글이 없습니다.</p>";
            return;
        }

        paginatedPosts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.className = "post";
            postDiv.innerHTML = `
                <div>
                    <strong>${post.model}</strong> - ${post.content}
                </div>
                <div>
                    <small>작성자: ${post.author} | ${new Date(post.timestamp).toLocaleString()}</small>
                </div>
            `;
            postsContainer.appendChild(postDiv);
        });

        updatePagination(filteredPosts.length);
    };

    // 페이지네이션 업데이트
    const updatePagination = (totalPosts) => {
        const totalPages = Math.ceil(totalPosts / postsPerPage);

        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = currentPage === totalPages || totalPages === 0;
        currentPageSpan.textContent = `${currentPage} / ${totalPages}`;
    };

    // 글 작성
    postButton.addEventListener("click", () => {
        const selectedModel = phoneModelSelect.value;
        const content = postInput.value.trim();

        if (!selectedModel || !content) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        if (loggedInUser) {
            posts.push({
                model: selectedModel,
                content,
                author: loggedInUser,
                timestamp: Date.now(),
            });

            localStorage.setItem("posts", JSON.stringify(posts));
            postInput.value = "";
            phoneModelSelect.value = "";
            currentPage = 1; // 새 글 작성 후 첫 페이지로 이동
            renderPosts();
        } else {
            alert("로그인 후 글을 작성할 수 있습니다.");
        }
    });

    // 입력 값 변경 시 버튼 활성화
    phoneModelSelect.addEventListener("change", () => {
        postButton.disabled = !phoneModelSelect.value || !postInput.value.trim();
    });

    postInput.addEventListener("input", () => {
        postButton.disabled = !phoneModelSelect.value || !postInput.value.trim();
    });

    // 글 필터링
    filterModelSelect.addEventListener("change", (e) => {
        const filterValue = e.target.value;
        currentPage = 1;
        renderPosts(filterValue);
    });

    // 페이지 버튼 이벤트
    prevPageButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderPosts(filterModelSelect.value);
        }
    });

    nextPageButton.addEventListener("click", () => {
        const totalPosts = filterModelSelect.value === "all"
            ? posts.length
            : posts.filter((post) => post.model === filterModelSelect.value).length;

        if (currentPage * postsPerPage < totalPosts) {
            currentPage++;
            renderPosts(filterModelSelect.value);
        }
    });

    // 초기 렌더링
    renderPosts();
});
