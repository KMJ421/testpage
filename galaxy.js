const sSeries = [
    { 
        name: "Galaxy S10e", 
        image: "phone/s10e.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 9 Series (9820) SoC.</li>
                <li><strong>디스플레이:</strong> 5.8인치 19:9 비율 2280 x 1080 Infinity-O Display (438 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,000만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀, [초광각] 1,600만 화소</li>
                <li><strong>RAM:</strong> 6 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB UFS 2.1 규격</li>
                <li><strong>외장 메모리:</strong> micro SDXC (규격상 2 TB, 512 GB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,100 mAh</li>
                <li><strong>무게:</strong> 150g</li>
            </ul>
        `
    },
    { 
        name: "Galaxy S10", 
        image: "phone/s10.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 9 Series (9820) SoC.</li>
                <li><strong>디스플레이:</strong> 6.1인치 19:9 비율 3040 x 1440 Infinity-O Display (551 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,000만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀, [망원] OIS 지원 1,200만 화소, [초광각] 1,600만 화소</li>
                <li><strong>RAM:</strong> 8 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 / 512 GB UFS 2.1 규격</li>
                <li><strong>외장 메모리:</strong> micro SDXC (규격상 2 TB, 512 GB 공식 지원)</li>
                <li><strong>배터리:</strong> Li-Ion 3,400 mAh</li>
                <li><strong>무게:</strong> 157g</li>
            </ul>
        `
    },
    { 
        name: "Galaxy S10+", 
        image: "phone/s10+.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 9 Series (9820) SoC.</li>
                <li><strong>디스플레이:</strong> 6.4인치 19:9 비율 3040 x 1440 Infinity-O Display (522 ppi)6.4인치 19:9 비율 3040 x 1440 Infinity-O Display (522 ppi)</li>
                <li><strong>전면 카메라:</strong> [기본] 1,000만 화소 듀얼 픽셀 AF, [심도] 800만 화소</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀, [망원] OIS 지원 1,200만 화소, [초광각] 1,600만 화소</li>
                <li><strong>RAM:</strong> 8 / 12 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 / 512 GB / 1 TB UFS 2.1 규격</li>
                <li><strong>외장 메모리:</strong> micro SDXC (규격상 2 TB, 512 GB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,100 mAh</li>
                <li><strong>무게:</strong> 198g</li>
            </ul>
        `
    },
    { 
        name: "Galaxy S10 5G", 
        image: "phone/s10_5G.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 9 Series (9820) SoC.</li>
                <li><strong>디스플레이:</strong> 6.7인치 19:9 비율 3040 x 1440 Infinity-O Display (505 ppi)</li>
                <li><strong>전면 카메라:</strong> [기본] 1,000만 화소 듀얼 픽셀 AF, [심도] HQVGA급 ToF 센서</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀, [망원] OIS 지원 1,200만 화소, [초광각] 1,600만 화소, [심도] HQVGA급 ToF 센서</li>
                <li><strong>RAM:</strong> 8 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 / 512 GB UFS 2.1 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,500 mAh</li>
                <li><strong>무게:</strong> 198g</li>
            </ul>   `
    },
    { 
        name: "Galaxy S20 5G", 
        image: "phone/s20_5G.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 865 SM8250</li>
                <li><strong>디스플레이:</strong> 6.2인치 20:9 비율 3200 x 1440 Infinity-O Display (566 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,000만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀, [광각 - 망원] OIS 지원 6,400만 화소, [초광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 12 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB UFS 3.0 규격</li>
                <li><strong>외장 메모리:</strong> micro SDXC (최대 1 TB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,880mAh</li>
                <li><strong>무게:</strong> 163g</li>
            </ul> `
    },
    { 
        name: "Galaxy S20+ 5G", 
        image: "phone/s20+_5G.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 865 SM8250</li>
                <li><strong>디스플레이:</strong> 6.7인치 20:9 비율 3200 x 1440 Infinity-O Display (525 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,000만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀, [광각 - 망원] OIS 지원 6,400만 화소, [초광각] 1,200만 화소, [심도] VGA급 ToF 센서</li>
                <li><strong>RAM:</strong> 12 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 GB UFS 3.0 규격</li>
                <li><strong>외장 메모리:</strong> micro SDXC (최대 1 TB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,500 mAh</li>
                <li><strong>무게:</strong> 186g</li>
            </ul> `
    },
    { 
        name: "Galaxy S20 Ultra 5G", 
        image: "phone/s20ultra_5G.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 865 SM8250</li>
                <li><strong>디스플레이:</strong> 6.9인치 20:9 비율 3200 x 1440 Infinity-O Display (511 ppi)</li>
                <li><strong>전면 카메라:</strong> 4,000만 화소 PDAF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 1억 800만 화소, [망원] OIS 지원 4,800만 화소, [초광각] 1,200만 화소, [심도] VGA급 ToF 센서</li>
                <li><strong>RAM:</strong> 12 / 16 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 / 512 GB UFS 3.0 규격</li>
                <li><strong>외장 메모리:</strong> micro SDXC (최대 1 TB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 5,000 mAh</li>
                <li><strong>무게:</strong> 220g</li>
            </ul> `
    },
];

const zSeries = [
    { name: "Galaxy Z Fold4", image: "phone/zfold1.jpg", details: "Galaxy Z Fold4의 상세 정보입니다." },
    { name: "Galaxy Z Flip3", image: "phone/zflip1.jpg", details: "Galaxy Z Flip3의 상세 정보입니다." },
];

const aSeries = [
    { name: "Galaxy A53", image: "phone/a23.jpg", details: "Galaxy A53의 상세 정보입니다." },
    { name: "Galaxy A72", image: "phone/a33.jpg", details: "Galaxy A72의 상세 정보입니다." },
];

const allPhones = [
    ...sSeries.map(phone => ({ ...phone, series: "sSeries" })),
    ...zSeries.map(phone => ({ ...phone, series: "zSeries" })),
    ...aSeries.map(phone => ({ ...phone, series: "aSeries" })),
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderPhones(series, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // 기존 내용 초기화

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
            <div class="phone-details">${phone.details}</div>
        `;

        container.appendChild(phoneDiv);
    });

    addToggleEvent(); // 디테일 토글 이벤트 추가
    addCartEvent();   // 장바구니 추가 이벤트 추가
}

function addToggleEvent() {
    const toggleButtons = document.querySelectorAll(".toggle-details");

    toggleButtons.forEach((toggleButton, index) => {
        const newButton = toggleButton.cloneNode(true);
        toggleButton.parentNode.replaceChild(newButton, toggleButton); // 기존 버튼 교체

        newButton.addEventListener("click", (e) => {
            const details = e.target.closest(".phone").querySelector(".phone-details");
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                e.target.textContent = "▲"; // 버튼 변경
            } else {
                details.style.display = "none";
                e.target.textContent = "▼"; // 버튼 변경
            }
        });
    });
}

function addCartEvent() {
    const cartIcons = document.querySelectorAll(".cart-icon");

    cartIcons.forEach((cartIcon) => {
        const newCartIcon = cartIcon.cloneNode(true);
        cartIcon.parentNode.replaceChild(newCartIcon, cartIcon); // 기존 아이콘 교체

        newCartIcon.addEventListener("click", (e) => {
            const phoneName = e.target.closest(".phone-header").querySelector("h3").textContent;
            const phone = allPhones.find(phone => phone.name === phoneName);

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

function addSearchEvent() {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim().toLowerCase();

        if (query) {
            const phone = allPhones.find(phone => phone.name.toLowerCase().includes(query));
            if (phone) {
                const phoneElement = [...document.querySelectorAll(".phone")].find(
                    element => element.querySelector("h3").textContent === phone.name
                );
                if (phoneElement) {
                    phoneElement.scrollIntoView({ behavior: "smooth", block: "center" });
                    phoneElement.style.boxShadow = "0 0 10px 2px #0078d4";
                    setTimeout(() => phoneElement.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)", 2000);
                }
            } else {
                alert("해당 기종을 찾을 수 없습니다.");
            }
        }
    });
}

// Galaxy 시리즈 렌더링
renderPhones(sSeries, "sSeries");
renderPhones(zSeries, "zSeries");
renderPhones(aSeries, "aSeries");

// 검색 이벤트 추가
addSearchEvent();