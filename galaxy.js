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
    { 
        name: "Galaxy S20 FE 5G", 
        image: "phone/s20fe_5G.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 865 SM8250</li>
                <li><strong>디스플레이:</strong> 6.5인치 20:9 비율 2400 x 1080 Infinity-O Display (407 ppi)</li>
                <li><strong>전면 카메라:</strong> 3,200만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀, [망원] OIS 지원 800만 화소, [초광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 6 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB UFS 3.1 규격</li>
                <li><strong>외장 메모리:</strong> micro SDXC (최대 1 TB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,500 mAh</li>
                <li><strong>무게:</strong> 190g</li>
            </ul> `
    },
    { 
        name: "Galaxy S21 5G", 
        image: "phone/s21_5G.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 2100 SoC.</li>
                <li><strong>디스플레이:</strong> 6.2인치 20:9 비율 2400 x 1080 Infinity-O Display (421ppi)</li>
                <li><strong>전면 카메라:</strong> 1,000만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀, [광각 - 망원] OIS 지원 6,400만 화소, [초광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 GB UFS 3.1 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,000 mAh</li>
                <li><strong>무게:</strong> 169g</li>
            </ul> `
    },
    { 
        name: "Galaxy S21+ 5G", 
        image: "phone/s21+_5G.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 10 Series (2100) SoC.</li>
                <li><strong>디스플레이:</strong> 6.7인치 20:9 비율 2400 x 1080 Infinity-O Display (394 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,000만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀, [광각 - 망원] OIS 지원 6,400만 화소, [초광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 GB UFS 3.1 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-ion 4800mAh</li>
                <li><strong>무게:</strong> 200g</li>
            </ul> `
    },
    { 
        name: "Galaxy S21 Ultra 5G", 
        image: "phone/s21ultra_5G.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 2000 Series (2100) SoC.</li>
                <li><strong>디스플레이:</strong> 6.8인치 20:9 비율 3200 x 1440 Infinity-O Display (515ppi)</li>
                <li><strong>전면 카메라:</strong> 4,000만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 1억 800만 화소 슈퍼 스피드 듀얼 픽셀, [3배 망원] OIS 지원 1,000만 화소, [10배 폴디드 망원] OIS 지원 1,000만 화소, [초광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 12 / 16 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 / 512 GB UFS 3.1 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-ion 5000 mAh</li>
                <li><strong>무게:</strong> 227g</li>
            </ul> `
    },
    { 
        name: "Galaxy S21 FE 5G", 
        image: "phone/s21fe_5G.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 2100 S5E9840</li>
                <li><strong>디스플레이:</strong> 6.4인치 20:9 비율 2400 x 1080 Infinity-O Display (411ppi)</li>
                <li><strong>전면 카메라:</strong> 3,200만 화소</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀, [망원] 800만 화소, [초광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 6 / 8 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 / 256 GB UFS 3.1 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,500 mAh</li>
                <li><strong>무게:</strong> 177g</li>
            </ul> `
    },
    { 
        name: "Galaxy S22", 
        image: "phone/s22.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 8 Gen 1 SM8450</li>
                <li><strong>디스플레이:</strong> 6.1인치 19.5:9 비율 2340 × 1080 Infinity-O Display (425 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,000만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [기본] OIS 지원 5,000만 화소 슈퍼 스피드 듀얼 픽셀, [망원] OIS 지원 1,000만 화소, [초광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 GB UFS 3.1 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3700 mAh</li>
                <li><strong>무게:</strong> 167g</li>
            </ul> `
    },
    { 
        name: "Galaxy S22+", 
        image: "phone/s22+.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 8 Gen 1 SM8450</li>
                <li><strong>디스플레이:</strong> 6.6인치 19.5:9 비율 2340 × 1080 Infinity-O Display (393 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,000만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 5,000만 화소 슈퍼 스피드 듀얼 픽셀, [망원] OIS 지원 1,000만 화소, [초광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 GB UFS 3.1 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,500 mAh</li>
                <li><strong>무게:</strong> 195g</li>
            </ul> `
    },
    { 
        name: "Galaxy S22 Ultra", 
        image: "phone/s22ultra.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 8 Gen 1 SM8450</li>
                <li><strong>디스플레이:</strong> 6.8인치 19.3:9 비율 3,088 × 1,440 Infinity-O Display (500 ppi)</li>
                <li><strong>전면 카메라:</strong> 4,000만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 1억 800만 화소 슈퍼 스피드 듀얼 픽셀, [3배 망원] OIS 지원 1,000만 화소, [10배 폴디드 망원] OIS 지원 1,000만 화소, [초광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 12 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 / 512 GB / 1 TB UFS 3.1 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-ion 5,000 mAh</li>
                <li><strong>무게:</strong> 228g</li>
            </ul> `
    },
    { 
        name: "Galaxy S23", 
        image: "phone/s23.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 8 Gen 2 for Galaxy</li>
                <li><strong>디스플레이:</strong> 6.1인치 19.5:9 비율 2340 × 1080 Infinity-O Display (425 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,200만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [기본] OIS 지원 5,000만 화소 슈퍼 스피드 듀얼 픽셀 AF, [망원] OIS 지원 1,000만 화소 AF, [초광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5X SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 / 512 GB UFS 4.0 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,900 mAh</li>
                <li><strong>무게:</strong> 168g</li>
            </ul> `
    },
    { 
        name: "Galaxy S23 Ultra", 
        image: "phone/s23ultra.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 8 Gen 2 for Galaxy</li>
                <li><strong>디스플레이:</strong> 6.8인치 19.3:9 비율 3088 × 1440 Infinity-O Display (500 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,200만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 2억 화소 슈퍼 스피드 듀얼 픽셀 AF, [3배 망원] OIS 지원 1,000만 화소 AF, [10배 폴디드 망원] OIS 지원 1,000만 화소 AF, [초광각] 1,200만 화소 AF</li>
                <li><strong>RAM:</strong> 12 GB LPDDR5X SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 / 512 GB / 1 TB UFS 4.0 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 5,000 mAh</li>
                <li><strong>무게:</strong> 223g</li>
            </ul> `
    },
    { 
        name: "Galaxy S24", 
        image: "phone/s24.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 2400</li>
                <li><strong>디스플레이:</strong> 6.2인치 19.5:9 비율 2340 × 1080 Infinity-O Display (418 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,200만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 5,000만 화소 슈퍼 스피드 듀얼 픽셀 AF, [망원] OIS 지원 1,000만 화소 AF, [초광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5X SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 / 512 GB UFS 4.0 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,000 mAh</li>
                <li><strong>무게:</strong> 167g</li>
            </ul> `
    },
    { 
        name: "Galaxy S24+", 
        image: "phone/s24+.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 2400</li>
                <li><strong>디스플레이:</strong> 6.7인치 19.5:9 비율 3120 × 1440 Infinity-O Display (516 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,200만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 5,000만 화소 슈퍼 스피드 듀얼 픽셀 AF, [망원] OIS 지원 1,000만 화소 AF, [초광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 12 GB LPDDR5X SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 / 512 GB UFS 4.0 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,900 mAh</li>
                <li><strong>무게:</strong> 196g</li>
            </ul> `
    },
    { 
        name: "Galaxy S24 Ultra", 
        image: "phone/s24ultra.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 8 Gen 3 for Galaxy</li>
                <li><strong>디스플레이:</strong> 6.8인치 19.5:9 비율 3120 × 1440 Infinity-O Display (506 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,200만 화소 듀얼 픽셀 AF</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] OIS 지원 2억 화소 슈퍼 스피드 듀얼 픽셀 AF, [3배 망원] OIS 지원 1,000만 화소 AF, [5배 폴디드 망원] OIS 지원 5,000만 화소 AF,[초광각] 1,200만 화소 AF</li>
                <li><strong>RAM:</strong> 12 GB LPDDR5X SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 / 512 GB / 1 TB UFS 4.0 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 5,000mAh</li>
                <li><strong>무게:</strong> 232g</li>
            </ul> `
    },
    { 
        name: "Galaxy S24 FE", 
        image: "phone/s24fe.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 2400e Mobile Processor (S5E9945)</li>
                <li><strong>디스플레이:</strong> 6.7인치 (170.1 mm)[크기] 19.5:9 비율 2340 × 1080 Dynamic AMOLED 2X Infinity-O Display (385 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1,000만 화소 (F/2.4 & 80˚)</li>
                <li><strong>후면 카메라:</strong> [광각 - 메인] 5,000만 화소, [3배 망원] 800만 화소, [초광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5X SDRAM</li>
                <li><strong>내장 메모리:</strong> 256GB UFS 4.0 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,700 mAh</li>
                <li><strong>무게:</strong> 213g</li>
            </ul> `
    },
];

const zSeries = [
    { 
        name: "Galaxy Z Fold", 
        image: "phone/zfold1.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 855 SM8150</li>
                <li><strong>디스플레이:</strong> [메인] 7.3인치 4.2:3 비율 2152 x 1536 Infinity Flex Display (362 ppi), [커버] 4.6인치 21:9 비율 HD+(1680 x 720) Super AMOLED (399 ppi)</li>
                <li><strong>전면 카메라:</strong> 커버: 1,000만 화소, 내부 전면: [기본] 1,000만 화소, [심도] 800만 화소</li>
                <li><strong>후면 카메라:</strong> [기본] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀, [망원] OIS 지원 1,200만 화소, [광각] 1,600만 화소</li>
                <li><strong>RAM:</strong> 12 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 512 GB UFS 3.0 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4235 mAh</li>
                <li><strong>무게:</strong> 276g</li>
            </ul> `
    },
    { 
        name: "Galaxy Z Fold2", 
        image: "phone/zfold2.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 865+ SM8250-AB</li>
                <li><strong>디스플레이:</strong> [메인] 7.6인치 2208 X 1768 Infinity-O Display | Infinity Flex Display (372 ppi), [커버] 6.2인치 25:9 비율 2326 X 840 Infinity-O Display (387 ppi)</li>
                <li><strong>전면 카메라:</strong> [기본] 1,000만 화소</li>
                <li><strong>후면 카메라:</strong> [기본] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀, [망원] OIS 지원 1,200만 화소, [광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 12 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 GB UFS 3.1 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4500 mAh</li>
                <li><strong>무게:</strong> 282g</li>
            </ul> `
    },
    { 
        name: "Galaxy Z Flip", 
        image: "phone/zflip1.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> LTE:퀄컴 스냅드래곤 855+ SM8150-AC, 5G: 퀄컴 스냅드래곤 865+ SM8250-AB</li>
                <li><strong>디스플레이:</strong> [메인] 6.7인치 22:9 비율 2636 x 1080 Infinity-O | Infinity Flex Display (425 ppi), [커버] 1.1인치 300 x 112 Super AMOLED (303 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,000만 화소 듀얼 픽셀</li>
                <li><strong>후면 카메라:</strong> [기본] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀, [광각] 1,200만 화소</li>
                <li><strong>RAM:</strong> 8 GB LPDDR4X/5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 GB UFS 3.0 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,300 mAh</li>
                <li><strong>무게:</strong> 183g</li>
            </ul> `
    },
    { 
        name: "Galaxy Z Fold3", 
        image: "phone/zfold3.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 888 SM8350</li>
                <li><strong>디스플레이:</strong> [메인] 7.6인치 2208 X 1768 New Infinity | Infinity Flex Display (374 ppi), [커버] 6.2인치 24.5:9 비율 2268 X 832 Infinity-O Display (387 ppi)</li>
                <li><strong>전면 카메라:</strong> 커버: 1,000만 화소, 내부 전면: 400만 화소</li>
                <li><strong>후면 카메라:</strong> [초광각] 1,200만 화소, [광각] OIS 지원 1,200만 화소 듀얼 픽셀, [망원] 1,200만 화소</li>
                <li><strong>RAM:</strong> 12 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 / 512GB UFS 3.1 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,400 mAh</li>
                <li><strong>무게:</strong> 271g</li>
            </ul> `
    },
    { 
        name: "Galaxy Z Flip3", 
        image: "phone/zflip3.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 888 SM8350</li>
                <li><strong>디스플레이:</strong> [메인] 6.7인치 22:9 비율 2640 x 1080 Infinity-O Display | Infinity Flex Display (425 ppi), [커버] 1.9인치 1.97:1 비율 512 x 260 Super AMOLED (320 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,000만 화소</li>
                <li><strong>후면 카메라:</strong> [초광각] 1,200만 화소, [광각] OIS 지원 1,200만 화소 듀얼 픽셀</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 GB UFS 3.1 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,300 mAh</li>
                <li><strong>무게:</strong> 183g</li>
            </ul> `
    },
    { 
        name: "Galaxy Z Fold4", 
        image: "phone/zfold4.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 8+ Gen 1 SM8475</li>
                <li><strong>디스플레이:</strong> [메인] 7.6인치 2176 × 1812 New Infinity Flex Display (374ppi), [커버] 6.2인치 23.1:9 비율 2316 × 904 Infinity-O Display (402ppi)</li>
                <li><strong>전면 카메라:</strong> 커버: 1,000만 화소, 내부 전면: 400만 화소</li>
                <li><strong>후면 카메라:</strong> [초광각] 1,200만 화소, [광각] OIS 지원 5,000만 화소 슈퍼 스피드 듀얼 픽셀, [망원] 1,000만 화소</li>
                <li><strong>RAM:</strong> 12 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 GB / 512 GB / 1 TB UFS 3.1 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,400mAh</li>
                <li><strong>무게:</strong> 254g</li>
            </ul> `
    },
    { 
        name: "Galaxy Z Flip4", 
        image: "phone/zflip4.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 8+ Gen1 SM8475</li>
                <li><strong>디스플레이:</strong> [메인] 6.7인치 22:9 비율 2640 × 1080 Infinity-O | Infinity Flex Display (425ppi), [커버] 1.9인치 1.97:1 비율 512 × 260 Super AMOLED (320ppi)</li>
                <li><strong>전면 카메라:</strong> 1,000만 화소</li>
                <li><strong>후면 카메라:</strong> [초광각] 1,200만 화소, [광각] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 GB / 512 GB UFS 3.1 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,700mAh</li>
                <li><strong>무게:</strong> 187g</li>
            </ul> `
    },
    { 
        name: "Galaxy Z Fold5", 
        image: "phone/zfold5.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 8 Gen 2 for Galaxy</li>
                <li><strong>디스플레이:</strong> [메인] 7.6인치 2176 × 1812 New Infinity Flex Display (374ppi), [커버] 6.2인치 23.1:9 비율 2316 × 904 Infinity-O Display (402ppi)</li>
                <li><strong>전면 카메라:</strong> 커버: 1,000만 화소, 내부 전면: 400만 화소</li>
                <li><strong>후면 카메라:</strong> [초광각] 1,200만 화소, [광각] OIS 지원 5,000만 화소 슈퍼 스피드 듀얼 픽셀, [망원] 1,000만 화소</li>
                <li><strong>RAM:</strong> 12 GB LPDDR5X SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 GB / 512 GB / 1 TB UFS 4.0 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,400mAh</li>
                <li><strong>무게:</strong> 253g</li>
            </ul> `
    },
    { 
        name: "Galaxy Z Flip5", 
        image: "phone/zflip5.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 8 Gen 2 for Galaxy</li>
                <li><strong>디스플레이:</strong> [메인] 6.7인치 22:9 비율 2640 × 1080 Infinity-O | Infinity Flex Display (-ppi), [Flex Window] 3.4인치 -:- 비율 720 × 748 Super AMOLED (306ppi)</li>
                <li><strong>전면 카메라:</strong> 1,000만 화소</li>
                <li><strong>후면 카메라:</strong> [초광각] 1,200만 화소, [광각] OIS 지원 1,200만 화소 슈퍼 스피드 듀얼 픽셀</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5X SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 GB / 512 GB UFS 4.0 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,700mAh</li>
                <li><strong>무게:</strong> 187g</li>
            </ul> `
    },
    { 
        name: "Galaxy Z Fold6", 
        image: "phone/zfold6.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 8 Gen 3 for Galaxy SM8650-AC Platform.</li>
                <li><strong>디스플레이:</strong> [메인] 7.6인치 (193.2 mm) 7:6 비율 2160 x 1856 New Infinity & Infinity Flex Display (375 ppi), [커버] 6.3인치 (158.9 mm) 22:9 비율 2376 x 968 Infinity-O Display (402 ppi)</li>
                <li><strong>전면 카메라:</strong> 커버: 1,000만 화소, 내부 전면: 400만 화소</li>
                <li><strong>후면 카메라:</strong> [초광각] 1,200만 화소, [광각] OIS 지원 5,000만 화소 슈퍼 스피드 듀얼 픽셀, [3배 망원] 1,000만 화소</li>
                <li><strong>RAM:</strong> 12 GB LPDDR5X SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 GB / 512 GB / 1 TB UFS 4.0 규격</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,400mAh</li>
                <li><strong>무게:</strong> 239g</li>
            </ul> `
    },
    { 
        name: "Galaxy Z Flip6", 
        image: "phone/zflip6.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 8 Gen 3 for Galaxy Mobile Platform (SM8650-AC)</li>
                <li><strong>디스플레이:</strong> [메인] 6.7인치 (170.3 mm) 22:9 비율 2640 × 1080 Dynamic AMOLED 2X Infinity Flex & O Display (425 ppi), [Flex Window] 3.4인치 (86.1 mm)[커버] 720 × 748 Super AMOLED (305 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,000만 화소</li>
                <li><strong>후면 카메라:</strong> [초광각] 1,200만 화소, [광각] OIS 지원 5,000만 화소</li>
                <li><strong>RAM:</strong> 12 GB LPDDR5X SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 / 512 GB UFS 4.0 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,000 mAh</li>
                <li><strong>무게:</strong> 187g</li>
            </ul> `
    },
];

const aSeries = [
    { 
        name: "Galaxy A23", 
        image: "phone/a23.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 퀄컴 스냅드래곤 680 SM6225</li>
                <li><strong>디스플레이:</strong> 6.6인치 20:9 비율 2400 x 1080 Infinity-V Display (402 ppi)</li>
                <li><strong>전면 카메라:</strong> 800만 화소 AF</li>
                <li><strong>후면 카메라:</strong> [기본] OIS 지원 5,000만 화소, [초광각] 500만 화소, [심도] 200만 화소, [접사] 200만 화소</li>
                <li><strong>RAM:</strong> 4 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB UFS 2.2 규격</li>
                <li><strong>외장 메모리:</strong> micro SDXC (규격상 2 TB, 1 TB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Po 5000 mAh</li>
                <li><strong>무게:</strong> 195g</li>
            </ul> `
    },
    { 
        name: "Galaxy A33", 
        image: "phone/a33.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 10 Series (1280) SoC.</li>
                <li><strong>디스플레이:</strong> 6.4인치 20:9 비율 2400 x 1080 Infinity-O Display (411 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,300만 화소 AF</li>
                <li><strong>후면 카메라:</strong> [기본] OIS 지원 4,800만 화소, [초광각] 800만 화소, [심도] 200만 화소, [접사] 500만 화소</li>
                <li><strong>RAM:</strong> 6 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB UFS 2.2 규격</li>
                <li><strong>외장 메모리:</strong> micro SDXC (규격상 1 TB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 5,000 mAh</li>
                <li><strong>무게:</strong> 186g</li>
            </ul> `
    },
    { 
        name: "Galaxy A53", 
        image: "phone/a53.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 10 Series (1280) SoC.</li>
                <li><strong>디스플레이:</strong> 6.5인치 20:9 비율 2400 x 1080 Infinity-O Display (405 ppi)</li>
                <li><strong>전면 카메라:</strong> 3,200만 화소 AF</li>
                <li><strong>후면 카메라:</strong> [기본] OIS 지원 6,400만 화소, [초광각] 1,200만 화소, [심도] 500만 화소, [접사] 500만 화소</li>
                <li><strong>RAM:</strong> 6 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB UFS 2.2 규격</li>
                <li><strong>외장 메모리:</strong> micro SDXC (규격상 2 TB, 1 TB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 5,000 mAh</li>
                <li><strong>무게:</strong> 189g</li>
            </ul> `
    },
    { 
        name: "Galaxy A24", 
        image: "phone/a24.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 미디어텍 Helio G99 MT6789 SoC.</li>
                <li><strong>디스플레이:</strong> 6.5인치 (164.2 mm) 19.5:9 비율 2340 x 1080 Super AMOLED Infinity-U Display (399 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1,300만 화소 (F/2.2)</li>
                <li><strong>후면 카메라:</strong> [기본] OIS 지원 5,000만 화소, [초광각] 500만 화소, [접사] 200만 화소</li>
                <li><strong>RAM:</strong> 4 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB UFS 2.2 규격 내장 메모리</li>
                <li><strong>외장 메모리:</strong> micro SDXC (최대 1 TB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 5,000 mAh</li>
                <li><strong>무게:</strong> 195g</li>
            </ul> `
    },
    { 
        name: "Galaxy A34", 
        image: "phone/a34.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 미디어텍 MT6877V Dimensity 1080 5G</li>
                <li><strong>디스플레이:</strong> 6.6인치(166.5mm) 19.5:9 비율 2340 x 1080 Infinity-U Display (393 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,300만 화소 AF</li>
                <li><strong>후면 카메라:</strong> [기본] OIS 지원 4,800만 화소, [초광각] 800만 화소. [접사] 500만 화소</li>
                <li><strong>RAM:</strong> 6 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB UFS 2.2 규격</li>
                <li><strong>외장 메모리:</strong> micro SDXC (규격상 1 TB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 5,000 mAh</li>
                <li><strong>무게:</strong> 199g</li>
            </ul> `
    },
    { 
        name: "Galaxy A54 (Quantum4)", 
        image: "phone/a54.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 10 Series (1380) SoC.</li>
                <li><strong>디스플레이:</strong> 6.4인치 (163.1 mm) 19.5:9 비율 2340 x 1080 Infinity-O Display (401 ppi)</li>
                <li><strong>전면 카메라:</strong> 3,200만 화소 (F/2.2)</li>
                <li><strong>후면 카메라:</strong> [기본] OIS 지원 5,000만 화소, [초광각] 1200만 화소, [접사] 500만 화소</li>
                <li><strong>RAM:</strong> 8 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB UFS 2.2 규격 내장 메모리</li>
                <li><strong>외장 메모리:</strong> micro SDXC (최대 1 TB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 5,000 mAh</li>
                <li><strong>무게:</strong> 202g</li>
            </ul> `
    },
    { 
        name: "Galaxy A25", 
        image: "phone/a25.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 1280 Mobile Processor (S5E8825)</li>
                <li><strong>디스플레이:</strong> 6.5인치 (164.2 mm) 19.5:9 비율 2340 × 1080 Super AMOLED Infinity-U Display (399 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1,300만 화소 (F/2.2)</li>
                <li><strong>후면 카메라:</strong> [기본] OIS 지원 5,000만 화소, [초광각] 800만 화소, [접사] 200만 화소</li>
                <li><strong>RAM:</strong> 6 GB LPDDR4X SDRAM,</li>
                <li><strong>내장 메모리:</strong> 128 GB UFS 2.2 규격 내장 메모리</li>
                <li><strong>외장 메모리:</strong> microSDXC (최대 1 TB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 5,000 mAh</li>
                <li><strong>무게:</strong> 197g</li>
            </ul> `
    },
    { 
        name: "Galaxy A35", 
        image: "phone/a35.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 1380 Mobile Processor (S5E8835)</li>
                <li><strong>디스플레이:</strong> 6.6인치 (168.3 mm) 19.5:9 비율 2340 × 1080 Super AMOLED Infinity-O Display (389 ppi)</li>
                <li><strong>전면 카메라:</strong> 1,300만 화소 AF</li>
                <li><strong>후면 카메라:</strong> [기본] OIS 지원 5,000만 화소, [초광각] 800만 화소, [접사] 500만 화소</li>
                <li><strong>RAM:</strong> 6 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB UFS 2.2 규격 내장 메모리</li>
                <li><strong>외장 메모리:</strong> micro SDXC (규격상 1 TB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 5,000 mAh</li>
                <li><strong>무게:</strong> 209g</li>
            </ul> `
    },
    { 
        name: "Galaxy A55 (Quantum5)", 
        image: "phone/a55.jpg", 
        details: `
            <ul>
                <li><strong>프로세서:</strong> 삼성 엑시노스 1480 Mobile Processor (S5E8845)</li>
                <li><strong>디스플레이:</strong> 6.6인치 (168.3 mm) 19.5:9 비율 2340 × 1080 Super AMOLED Infinity-O Display (389 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 센서 IMX616 | 3200만 화소 (F/2.2 & 81˚)</li>
                <li><strong>후면 카메라:</strong> [기본] OIS 지원 5,000만 화소, [초광각] 1200만 화소, [접사] 500만 화소</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB UFS 3.1 규격 내장 메모리</li>
                <li><strong>외장 메모리:</strong> micro SDXC (최대 1 TB 공식 지원)</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 5,000 mAh</li>
                <li><strong>무게:</strong> 213g</li>
            </ul> `
    },
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