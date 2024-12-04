// iPhone 데이터 정의
const iphone11Series = [
    { name: "iPhone 11", image: "images/iphone11.jpg", details: "iPhone 11의 상세 정보입니다." },
    { name: "iPhone 11 Pro", image: "images/iphone11pro.jpg", details: "iPhone 11 Pro의 상세 정보입니다." },
    { name: "iPhone 11 Pro Max", image: "images/iphone11promax.jpg", details: "iPhone 11 Pro Max의 상세 정보입니다." },
];

const iphone12Series = [
    { name: "iPhone 12", image: "images/iphone12.jpg", details: "iPhone 12의 상세 정보입니다." },
    { name: "iPhone 12 Mini", image: "images/iphone12mini.jpg", details: "iPhone 12 Mini의 상세 정보입니다." },
    { name: "iPhone 12 Pro", image: "images/iphone12pro.jpg", details: "iPhone 12 Pro의 상세 정보입니다." },
    { name: "iPhone 12 Pro Max", image: "images/iphone12promax.jpg", details: "iPhone 12 Pro Max의 상세 정보입니다." },
];

const iphone13Series = [
    { name: "iPhone 13", image: "images/iphone13.jpg", details: "iPhone 13의 상세 정보입니다." },
    { name: "iPhone 13 Mini", image: "images/iphone13mini.jpg", details: "iPhone 13 Mini의 상세 정보입니다." },
    { name: "iPhone 13 Pro", image: "images/iphone13pro.jpg", details: "iPhone 13 Pro의 상세 정보입니다." },
    { name: "iPhone 13 Pro Max", image: "images/iphone13promax.jpg", details: "iPhone 13 Pro Max의 상세 정보입니다." },
];

const iphone14Series = [
    { name: "iPhone 14", image: "images/iphone14.jpg", details: "iPhone 14의 상세 정보입니다." },
    { name: "iPhone 14 Plus", image: "images/iphone14plus.jpg", details: "iPhone 14 Plus의 상세 정보입니다." },
    { name: "iPhone 14 Pro", image: "images/iphone14pro.jpg", details: "iPhone 14 Pro의 상세 정보입니다." },
    { name: "iPhone 14 Pro Max", image: "images/iphone14promax.jpg", details: "iPhone 14 Pro Max의 상세 정보입니다." },
];

const iphone15Series = [
    { name: "iPhone 15", image: "images/iphone15.jpg", details: "iPhone 15의 상세 정보입니다." },
    { name: "iPhone 15 Plus", image: "images/iphone15plus.jpg", details: "iPhone 15 Plus의 상세 정보입니다." },
    { name: "iPhone 15 Pro", image: "images/iphone15pro.jpg", details: "iPhone 15 Pro의 상세 정보입니다." },
    { name: "iPhone 15 Pro Max", image: "images/iphone15promax.jpg", details: "iPhone 15 Pro Max의 상세 정보입니다." },
];

const iphone16Series = [
    { name: "iPhone 16", image: "images/iphone16.jpg", details: "iPhone 16의 상세 정보입니다." },
    { name: "iPhone 16 Pro", image: "images/iphone16pro.jpg", details: "iPhone 16 Pro의 상세 정보입니다." },
];

const iphoneSESeries = [
    { name: "iPhone SE (2nd Gen)", image: "images/iphonese2.jpg", details: "iPhone SE (2세대)의 상세 정보입니다." },
    { name: "iPhone SE (3rd Gen)", image: "images/iphonese3.jpg", details: "iPhone SE (3세대)의 상세 정보입니다." },
];

// 모든 iPhone 데이터를 결합
const allIphones = [
    ...iphone11Series.map(phone => ({ ...phone, series: "iphone11Series" })),
    ...iphone12Series.map(phone => ({ ...phone, series: "iphone12Series" })),
    ...iphone13Series.map(phone => ({ ...phone, series: "iphone13Series" })),
    ...iphone14Series.map(phone => ({ ...phone, series: "iphone14Series" })),
    ...iphone15Series.map(phone => ({ ...phone, series: "iphone15Series" })),
    ...iphone16Series.map(phone => ({ ...phone, series: "iphone16Series" })),
    ...iphoneSESeries.map(phone => ({ ...phone, series: "iphoneSESeries" })),
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 핸드폰 목록 렌더링
function renderPhones(series, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ""; // 기존 내용을 초기화

    series.forEach(phone => {
        const phoneDiv = document.createElement("div");
        phoneDiv.className = "phone";

        phoneDiv.innerHTML = `
            <div class="phone-header">
                <img src="${phone.image}" alt="${phone.name}">
                <h3>${phone.name}</h3>
                <div class="action-buttons">
                    <i class="cart-icon">🛒</i>
                    <button class="toggle-details">▼</button>
                </div>
            </div>
            <div class="phone-details" style="display: none;">${phone.details}</div>
        `;

        container.appendChild(phoneDiv);
    });

    // 이벤트 등록
    addToggleEvent(container);
    addCartEvent(container);
}

// 디테일 토글 이벤트 추가
function addToggleEvent(container) {
    const toggleButtons = container.querySelectorAll(".toggle-details");
    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const details = button.closest(".phone").querySelector(".phone-details");
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                button.textContent = "▲";
            } else {
                details.style.display = "none";
                button.textContent = "▼";
            }
        });
    });
}

// 장바구니 추가 이벤트 추가
function addCartEvent(container) {
    const cartIcons = container.querySelectorAll(".cart-icon");
    cartIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const phoneName = icon.closest(".phone-header").querySelector("h3").textContent;
            const phone = allIphones.find(p => p.name === phoneName);

            if (phone && !cart.some(item => item.name === phone.name)) {
                cart.push(phone);
                localStorage.setItem("cart", JSON.stringify(cart));
                alert(`${phone.name}이 장바구니에 추가되었습니다.`);
            } else {
                alert("이미 장바구니에 추가된 상품입니다.");
            }
        });
    });
}

// 검색 기능 추가
function addSearchEvent() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim().toLowerCase();
        const result = allIphones.find(phone => phone.name.toLowerCase().includes(query));

        if (result) {
            const phoneElement = [...document.querySelectorAll(".phone")].find(
                element => element.querySelector("h3").textContent === result.name
            );
            if (phoneElement) {
                phoneElement.scrollIntoView({ behavior: "smooth", block: "center" });
                phoneElement.style.boxShadow = "0 0 10px 2px #0078d4";
                setTimeout(() => phoneElement.style.boxShadow = "none", 2000);
            }
        } else {
            alert("해당 기종을 찾을 수 없습니다.");
        }
    });
}

// iPhone 시리즈 렌더링
renderPhones(iphone11Series, "iphone11Series");
renderPhones(iphone12Series, "iphone12Series");
renderPhones(iphone13Series, "iphone13Series");
renderPhones(iphone14Series, "iphone14Series");
renderPhones(iphone15Series, "iphone15Series");
renderPhones(iphone16Series, "iphone16Series");
renderPhones(iphoneSESeries, "iphoneSESeries");

// 검색 이벤트 추가
addSearchEvent();
