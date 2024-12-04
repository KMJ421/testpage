document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cartContainer");
    const compareButton = document.getElementById("compareButton");

    // 장바구니 데이터 로드
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>장바구니가 비어 있습니다.</p>";
            return;
        }

        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <div class="details">
                    ${item.details}
                </div>
                <div class="buttons">
                    <button class="view-details">사양 보기</button>
                    <button class="delete" data-index="${index}">삭제</button>
                </div>
            `;

            cartContainer.appendChild(cartItem);
        });

        // 이벤트 핸들러 추가
        document.querySelectorAll(".delete").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.dataset.index;
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            });
        });

        document.querySelectorAll(".view-details").forEach(button => {
            button.addEventListener("click", (e) => {
                const details = e.target.closest(".cart-item").querySelector(".details");
                details.style.display = details.style.display === "block" ? "none" : "block";
            });
        });
    }

    // 장바구니 비우기
    compareButton.addEventListener("click", () => {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    });

    renderCart();
});
