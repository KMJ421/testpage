document.addEventListener("DOMContentLoaded", () => {
    const userStatusDiv = document.getElementById("userStatus");
    const phoneModelSelect = document.getElementById("phoneModel");
    const postInput = document.getElementById("postInput");
    const postButton = document.getElementById("postButton");
    const postsContainer = document.getElementById("postsContainer");
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");
    const currentPageSpan = document.getElementById("currentPage");

    const postsPerPage = 5; // 페이지당 표시할 게시글 수
    let currentPage = 1; // 현재 페이지

    // 로그인된 사용자 정보 가져오기 (닉네임만 추출)
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // JSON 파싱
    const loggedInNickname = loggedInUser ? loggedInUser.nickname : null;

    if (loggedInNickname) {
        userStatusDiv.textContent = `환영합니다, ${loggedInNickname}!`;
        phoneModelSelect.disabled = false;
        postInput.disabled = false;
    } else {
        userStatusDiv.textContent = "로그인이 필요합니다.";
    }

    // 게시글 데이터
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    // 게시글 렌더링
    function renderPosts(filter = "all") {
        postsContainer.innerHTML = "";

        // 최신 글이 먼저 보이도록 데이터 역순 정렬
        const sortedPosts = [...posts].reverse();
        const filteredPosts = filter === "all" ? sortedPosts : sortedPosts.filter(post => post.model === filter);

        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

        if (paginatedPosts.length === 0) {
            postsContainer.innerHTML = "<p>게시글이 없습니다.</p>"; // 메시지 중앙 정렬
            return;
        }

        paginatedPosts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.className = "post";

            postDiv.innerHTML = `
                <div class="post-header">
                    <span>${post.author}</span>
                    <span>${new Date(post.timestamp).toLocaleString()}</span>
                </div>
                <div class="post-content">
                    <strong>[${post.model}]</strong> ${post.content}
                </div>
                ${post.author === loggedInNickname ? '<button class="delete-button">삭제</button>' : ""}
            `;

            // 삭제 버튼 이벤트
            const deleteButton = postDiv.querySelector(".delete-button");
            if (deleteButton) {
                deleteButton.addEventListener("click", () => {
                    const globalIndex = posts.findIndex(p => p === post);
                    posts.splice(globalIndex, 1);
                    localStorage.setItem("posts", JSON.stringify(posts));
                    updatePagination(filteredPosts);
                    renderPosts(filter);
                });
            }

            postsContainer.appendChild(postDiv);
        });

        updatePagination(filteredPosts);
    }

    // 페이지네이션 업데이트
    function updatePagination(filteredPosts) {
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = currentPage === totalPages || totalPages === 0;
        currentPageSpan.textContent = currentPage;
    }

    // 새 게시글 작성
    postButton.addEventListener("click", () => {
        const selectedModel = phoneModelSelect.value;
        const postContent = postInput.value.trim();

        if (!selectedModel) {
            alert("스마트폰 기종을 선택해주세요.");
            return;
        }

        if (postContent) {
            posts.push({
                author: loggedInNickname, // 닉네임 사용
                model: selectedModel,
                content: postContent,
                timestamp: Date.now(),
            });
            localStorage.setItem("posts", JSON.stringify(posts));
            postInput.value = "";
            phoneModelSelect.value = "";
            currentPage = 1; // 새 글 작성 후 첫 페이지로 이동
            renderPosts();
        }
    });

    // 폼 활성화
    phoneModelSelect.addEventListener("change", () => {
        postButton.disabled = !phoneModelSelect.value || !postInput.value.trim();
    });

    postInput.addEventListener("input", () => {
        postButton.disabled = !phoneModelSelect.value || !postInput.value.trim();
    });

    // 글 필터링
    document.getElementById("filterModel").addEventListener("change", (e) => {
        const filterValue = e.target.value;
        currentPage = 1; // 필터 변경 시 첫 페이지로 이동
        renderPosts(filterValue);
    });

    // 이전 페이지 버튼
    prevPageButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderPosts();
        }
    });

    // 다음 페이지 버튼
    nextPageButton.addEventListener("click", () => {
        currentPage++;
        renderPosts();
    });

    // 초기 렌더링
    renderPosts();
});
