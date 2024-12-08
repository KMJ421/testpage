// iPhone 데이터 정의
const iphone11Series = [
    { 
        name: "iPhone 11", 
        image: "phone/iphone11.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A13 Bionic APL1W85 SoC + Apple U1 + Intel XMM 7660</li>
                <li><strong>디스플레이:</strong> 6.06인치 19.5:9 비율 1792 x 828 Liquid Retina HD 디스플레이 (326 ppi) </li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/2.2)</li>
                <li><strong>후면 카메라:</strong> [기본] 1200만 화소 위상차 검출 AF, [광각] 1200만 화소, True Tone 플래시, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 4 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 64 GB, 128 GB, 256 GB NVMe 규격 내장 메모리 </li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,110 mAh (11.91 Wh / 3.83 V) </li>
                <li><strong>무게:</strong> 194g</li>
            </ul> `
    },
    { 
        name: "iPhone 11 Pro", 
        image: "phone/iphone11pro.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A13 Bionic APL1W85 SoC + Apple U1 + Intel XMM 7660</li>
                <li><strong>디스플레이:</strong> 5.8인치 19.5:9 비율 2436 x 1125 Super Retina XDR 디스플레이 (458 ppi) </li>
                <li><strong>전면 카메라:</strong> 전면 1,200만 화소</li>
                <li><strong>후면 카메라:</strong> [기본 광각] 1200만 화소 OIS 지원 위상차 검출 AF, [망원] 1200만 화소 OIS 지원 위상차 검출 AF, [초광각] 1200만 화소, 듀얼-True Tone 플래시, 광학 2배줌 지원</li>
                <li><strong>RAM:</strong> 4 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 64 GB, 256 GB, 512 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,046 mAh (11.91 Wh / 3.83 V)</li>
                <li><strong>무게:</strong> 188g</li>
            </ul> ` 
    },
    { 
        name: "iPhone 11 Pro Max", 
        image: "phone/iphone11promax.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A13 Bionic APL1W85 SoC + Apple U1 + Intel XMM 7660</li>
                <li><strong>디스플레이:</strong> 6.5인치 19.5:9 비율 2688 x 1242 Super Retina XDR 디스플레이 (458 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1,200만 화소</li>
                <li><strong>후면 카메라:</strong> [기본 광각] 1200만 화소 OIS 지원 위상차 검출 AF, [망원] 1200만 화소 OIS 지원 위상차 검출 AF, [초광각] 1200만 화소, 듀얼-True Tone 플래시, 광학 2배줌 지원</li>
                <li><strong>RAM:</strong> 4 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 64 GB, 256 GB, 512 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,969 mAh (15.04 Wh / 3.79 V)</li>
                <li><strong>무게:</strong> 226g</li>
            </ul> `
    },
];

const iphone12Series = [
    { 
        name: "iPhone 12", 
        image: "phone/iphone12.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A14 Bionic APL1W01 SoC + Apple U1 + Qualcomm Snapdragon X55 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.06인치 19.5:9 비율 2532 x 1170 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/2.2)</li>
                <li><strong>후면 카메라:</strong> [기본] 1200만 화소 위상차 검출 AF, [광각] 1200만 화소 위상차 검출 AF, True Tone 플래시, 2배 광학 줌아웃, OIS 지원, Dolby Vision 촬영 지원(최대 4K 30fps)</li>
                <li><strong>RAM:</strong> 4 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 64 GB, 128 GB, 256 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 2,815 mAh (10.78 Wh / 3.83 V)</li>
                <li><strong>무게:</strong> 162g</li>
            </ul> ` 
    },
    { 
        name: "iPhone 12 Mini", 
        image: "phone/iphone12mini.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A14 Bionic APL1W01 SoC + Apple U1 + Qualcomm Snapdragon X55 5G Modem</li>
                <li><strong>디스플레이:</strong> 5.4인치 19.5:9 비율 2340 x 1080 Super Retina XDR 디스플레이 (476 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/2.2)</li>
                <li><strong>후면 카메라:</strong> [기본] 1200만 화소 위상차 검출 AF, [광각] 1200만 화소 위상차 검출 AF, True Tone 플래시, 2배 광학 줌아웃, OIS 지원, Dolby Vision 촬영 지원(최대 4K 30fps)</li>
                <li><strong>RAM:</strong> 4 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 64 GB, 128 GB, 256 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 2,227 mAh (8.57 Wh / 3.85 V)</li>
                <li><strong>무게:</strong> 133g</li>
            </ul> `
    },
    { 
        name: "iPhone 12 Pro", 
        image: "phone/iphone12pro.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A14 Bionic APL1W01 SoC + Apple U1 + Qualcomm Snapdragon X55 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.06인치 19.5:9 비율 2532 x 1170 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/2.2)</li>
                <li><strong>후면 카메라:</strong> [기본] 1200만 화소 OIS 지원 위상차 검출 AF, [광각] 1200만 화소 위상차 검출 AF, [망원] 1200만 화소 OIS 지원 위상차 검출 AF, True Tone 플래시 2배 광학 줌인, 2배 광학 줌아웃, OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 6 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 2,815 mAh (10.78 Wh / 3.83 V)</li>
                <li><strong>무게:</strong> 187g</li>
            </ul> `
    },
    { 
        name: "iPhone 12 Pro Max", 
        image: "phone/iphone12promax.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A14 Bionic APL1W01 SoC + Apple U1 + Qualcomm Snapdragon X55 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.7인치 19.5:9 비율 2778 x 1284 Super Retina XDR 디스플레이 (458 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/2.2)</li>
                <li><strong>후면 카메라:</strong> [기본] 1200만 화소 OIS 지원 위상차 검출 AF, [광각] 1200만 화소 위상차 검출 AF, [망원] 1200만 화소 OIS 지원 위상차 검출 AF, [심도] LiDAR 스캐너, True Tone 플래시 2.5배 광학 줌인, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 6 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,687 mAh (14.13 Wh / 3.83 V)</li>
                <li><strong>무게:</strong> 226g</li>
            </ul> ` 
    },
];

const iphone13Series = [
    { 
        name: "iPhone 13", 
        image: "phone/iphone13.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A15 Bionic APL1W07 SoC + Apple U1 + Qualcomm Snapdragon X60 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.06인치 19.5:9 비율 2532 x 1170 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/2.2)</li>
                <li><strong>후면 카메라:</strong> [기본] 1200만 화소 위상차 검출 AF, [광각] 1200만 화소 위상차 검출 AF, True Tone 플래시, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 4 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,227 mAh (12.41 Wh / 3.84 V)</li>
                <li><strong>무게:</strong> 173g</li>
            </ul> ` 
    },
    {
        name: "iPhone 13 Mini", 
        image: "phone/iphone13mini.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A15 Bionic APL1W07 SoC + Apple U1 + Qualcomm Snapdragon X60 5G Modem</li>
                <li><strong>디스플레이:</strong> 5.4인치 19:5.9 비율 2340 x 1080 Super Retina XDR 디스플레이 (476 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/2.2)</li>
                <li><strong>후면 카메라:</strong> [기본] 1200만 화소 위상차 검출 AF, [광각] 1200만 화소 위상차 검출 AF, True Tone 플래시, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 4 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 2,406 mAh (9.34 Wh / 3.88 V)</li>
                <li><strong>무게:</strong> 140g</li>
            </ul> `
    },
    { 
        name: "iPhone 13 Pro", 
        image: "phone/iphone13pro.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A15 Bionic APL1W07 SoC + Apple U1 + Qualcomm Snapdragon X60 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.06인치 19.5:9 비율 2532 x 1170 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/2.2)</li>
                <li><strong>후면 카메라:</strong> [기본] 1200만 화소 OIS 지원 위상차 검출 AF, [광각] 1200만 화소 위상차 검출 AF, [망원] 1200만 화소 OIS 지원 위상차 검출 AF, [심도] LiDAR 스캐너, True Tone 플래시 3배 광학 줌인, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 6 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB, 1 TB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,095 mAh (11.97 Wh / 3.87 V)</li>
                <li><strong>무게:</strong> 203g</li>
            </ul> `
    },
    { 
        name: "iPhone 13 Pro Max", 
        image: "phone/iphone13promax.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A15 Bionic APL1W07 SoC + Apple U1 + Qualcomm Snapdragon X60 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.7인치 19.5:9 비율 2778 x 1284 Super Retina XDR 디스플레이 (458 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/2.2)</li>
                <li><strong>후면 카메라:</strong> [기본] 1200만 화소 OIS 지원 위상차 검출 AF, [광각] 1200만 화소 위상차 검출 AF, [망원] 1200만 화소 OIS 지원 위상차 검출 AF, [심도] LiDAR 스캐너, True Tone 플래시 3배 광학 줌인, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 6 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB, 1 TB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,352 mAh (16.75 Wh / 3.85 V)</li>
                <li><strong>무게:</strong> 238g</li>
            </ul> `
    },
];

const iphone14Series = [
    { 
        name: "iPhone 14", 
        image: "phone/iphone14.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A15 Bionic APL1W07 SoC + Apple U1 + Qualcomm Snapdragon X65 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.06인치 19.5:9 비율 2532 x 1170 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/1.9)</li>
                <li><strong>후면 카메라:</strong> [기본] 1200만 화소 위상차 검출 AF, [광각] 1200만 화소 위상차 검출 AF, True Tone 플래시, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 6GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3279 mAh (12.86 Wh / 3.87 V)</li>
                <li><strong>무게:</strong> 172g</li>
            </ul> `
    },
    { 
        name: "iPhone 14 Plus", 
        image: "phone/iphone14plus.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A15 Bionic APL1W07 SoC + Apple U1 + Qualcomm Snapdragon X65 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.7인치 19.5:9 비율 2778 x 1284 Super Retina XDR 디스플레이 (458 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/1.9)</li>
                <li><strong>후면 카메라:</strong> [기본] 1200만 화소 위상차 검출 AF, [광각] 1200만 화소 위상차 검출 AF, True Tone 플래시, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 6GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4325 mAh (16.68 Wh / 3.86 V)</li>
                <li><strong>무게:</strong> 203g</li>
            </ul> `
    },
    { 
        name: "iPhone 14 Pro", 
        image: "phone/iphone14pro.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A16 Bionic APL1W10 SoC + Apple U1 + Qualcomm Snapdragon X65 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.1인치 19.5:9 비율 2556 x 1179 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/1.9, 000°)</li>
                <li><strong>후면 카메라:</strong> [기본] 4800만 화소 OIS 지원 위상차 검출 AF, [광각] 1200만 화소 위상차 검출 AF, [망원] 1200만 화소 OIS 지원 위상차 검출 AF, [심도] LiDAR 스캐너, True Tone 플래시 3배 광학 줌인, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 6 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB, 1 TB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,200 mAh (12.38 Wh / 3.87 V)</li>
                <li><strong>무게:</strong> 206g</li>
            </ul> `
    },
    { 
        name: "iPhone 14 Pro Max", 
        image: "phone/iphone14promax.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A16 Bionic APL1W10 SoC + Apple U1 + Qualcomm Snapdragon X65 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.7인치 19.5:9 비율 2796 x 1290 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/1.9)</li>
                <li><strong>후면 카메라:</strong> [기본] 4800만 화소 OIS 지원 위상차 검출 AF, [광각] 1200만 화소 위상차 검출 AF, [망원] 1200만 화소 OIS 지원 위상차 검출 AF, [심도] LiDAR 스캐너, True Tone 플래시 3배 광학 줌인, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 6 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB, 1 TB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,323 mAh (16.68 Wh / 3.86 V)</li>
                <li><strong>무게:</strong> 240g</li>
            </ul> ` 
    },
];

const iphone15Series = [
    { 
        name: "iPhone 15", 
        image: "phone/iphone15.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A16 Bionic APL1W10 SoC + 2세대 초광대역 칩 + Qualcomm Snapdragon X70 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.1인치 19.5:9 비율 2556 x 1179 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/1.6)</li>
                <li><strong>후면 카메라:</strong> [기본] 4200만 화소 위상차 검출 AF, [초광각] 1200만 화소 위상차 검출 AF, True Tone 플래시, 2배 광학 줌인, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 6 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,349 mAh</li>
                <li><strong>무게:</strong> 171g</li>
            </ul> `
    },
    { 
        name: "iPhone 15 Plus", 
        image: "phone/iphone15plus.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A16 Bionic APL1W10 SoC + 2세대 초광대역 칩 + Qualcomm Snapdragon X70 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.7인치 19.5:9 비율 2796 x 1290 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1,200만 화소 AF (F/1.9)</li>
                <li><strong>후면 카메라:</strong> [기본] 4200만 화소 위상차 검출 AF, [초광각] 1200만 화소 위상차 검출 AF, True Tone 플래시, 2배 광학 줌인, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 6 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,383 mAh</li>
                <li><strong>무게:</strong> 201g</li>
            </ul> `
    },
    { 
        name: "iPhone 15 Pro", 
        image: "phone/iphone15pro.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A17 Pro APL1V02 SoC + 2세대 초광대역 칩 + Qualcomm Snapdragon X70 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.1인치 19.5:9 비율 2556 x 1179 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (F/1.9)</li>
                <li><strong>후면 카메라:</strong> [기본] 4800만 화소 OIS 지원 위상차 검출 AF, [광각] 1200만 화소 위상차 검출 AF, [망원] 1200만 화소 OIS 지원 위상차 검출 AF, [심도] LiDAR 스캐너, True Tone 플래시 3배 광학 줌인, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 128, 256, 512 GB, 1 TB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,274 mAh</li>
                <li><strong>무게:</strong> 187g</li>
            </ul> `
    },
    { 
        name: "iPhone 15 Pro Max", 
        image: "phone/iphone15promax.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A17 Pro APL1V02 SoC + 2세대 초광대역 칩 + Qualcomm Snapdragon X70 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.7인치 19.5:9 비율 2796 x 1290 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/1.9)</li>
                <li><strong>후면 카메라:</strong> [기본] 4800만 화소 OIS 지원 위상차 검출 AF, [광각] 1200만 화소 위상차 검출 AF, [망원] 1200만 화소 OIS 지원 위상차 검출 AF, [심도] LiDAR 스캐너, True Tone 플래시 5배 광학 줌인, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5 SDRAM</li>
                <li><strong>내장 메모리:</strong> 256, 512 GB, 1 TB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,422 mAh</li>
                <li><strong>무게:</strong> 221g</li>
            </ul> ` 
    },
];

const iphone16Series = [
    { 
        name: "iPhone 16", 
        image: "phone/iphone16.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A18 APL1V08 SoC + 2세대 초광대역 칩 + Qualcomm Snapdragon X71 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.1인치 19.5:9 비율 2556 x 1179 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/1.9)</li>
                <li><strong>후면 카메라:</strong> [기본] 4200만 화소 위상차 검출 AF, [초광각] 1200만 화소 위상차 검출 AF, True Tone 플래시, 2배 광학 줌인, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,556 mAh (13.19 Wh / 3.96 V)</li>
                <li><strong>무게:</strong> 170g</li>
            </ul> `
    },
    { 
        name: "iPhone 16 Plus", 
        image: "phone/iphone16plus.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A18 APL1V08 SoC + 2세대 초광대역 칩 + Qualcomm Snapdragon X71 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.7인치 19.5:9 비율 2796 x 1290 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/1.9)</li>
                <li><strong>후면 카메라:</strong> [기본] 4200만 화소 위상차 검출 AF, [초광각] 1200만 화소 위상차 검출 AF, True Tone 플래시, 2배 광학 줌인, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,665mAh (18.112 Wh / 3.88 V)</li>
                <li><strong>무게:</strong> 199g</li>
            </ul> `
    },
    { 
        name: "iPhone 16 Pro", 
        image: "phone/iphone16pro.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A18 Pro APL1V07 SoC + 2세대 초광대역 칩 + Qualcomm Snapdragon X71 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.3인치 19.6:9 비율 2622 x 1206 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/1.9)</li>
                <li><strong>후면 카메라:</strong> [기본] 4800만 화소 OIS 지원 위상차 검출 AF, [광각] 4800만 화소 위상차 검출 AF, [망원] 1200만 화소 OIS 지원 위상차 검출 AF, [심도] LiDAR 스캐너, True Tone 플래시 5배 광학 줌인, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5X SDRAM</li>
                <li><strong>내장 메모리:</strong> 128 GB, 256 GB, 512 GB, 1 TB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 3,577Ah (13.19 Wh / 3.98 V)</li>
                <li><strong>무게:</strong> 199g</li>
            </ul> `
    },
    { 
        name: "iPhone 16 Pro Max", 
        image: "phone/iphone16promax.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A18 Pro APL1V07 SoC + 2세대 초광대역 칩 + Qualcomm Snapdragon X71 5G Modem</li>
                <li><strong>디스플레이:</strong> 6.9인치 19.6:9 비율 2868 x 1320 Super Retina XDR 디스플레이 (460 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 1200만 화소 AF (ƒ/1.9)</li>
                <li><strong>후면 카메라:</strong> [기본] 4800만 화소 OIS 지원 위상차 검출 AF, [광각] 4800만 화소 위상차 검출 AF, [망원] 1200만 화소 OIS 지원 위상차 검출 AF, [심도] LiDAR 스캐너, True Tone 플래시 5배 광학 줌인, 2배 광학 줌아웃, 센서 시프트 OIS 지원, Dolby Vision 촬영 지원(최대 4K 60fps)</li>
                <li><strong>RAM:</strong> 8 GB LPDDR5X SDRAM</li>
                <li><strong>내장 메모리:</strong> 256 GB, 512 GB, 1 TB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 4,676mAh (17.48 Wh / 3.64 V)</li>
                <li><strong>무게:</strong> 227g</li>
            </ul> ` 
    },
];

const iphoneSESeries = [
    { 
        name: "iPhone SE2", 
        image: "phone/iphonese2.png", 
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A13 Bionic APL1W85 SoC + Intel XMM 7660</li>
                <li><strong>디스플레이:</strong> 4.7인치 16:9 비율 1334 x 750 Retina HD 디스플레이 (326 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 700만 화소 AF (ƒ/2.2)</li>
                <li><strong>후면 카메라:</strong> 후면 1200만 화소 위상차 검출 AF (ƒ/1.8) OIS 지원, 쿼드-LED True Tone 플래시</li>
                <li><strong>RAM:</strong> 3 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 64 GB, 128 GB, 256 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 1,821 mAh (6.96 Wh / 3.82 V)</li>
                <li><strong>무게:</strong> 148g</li>
            </ul> `
    },
    { 
        name: "iPhone SE3", 
        image: "phone/iphonese3.png",
        details: `
            <ul>
                <li><strong>칩셋:</strong> Apple A15 Bionic APL1W07 SoC + Qualcomm Snapdragon X57 5G Modem</li>
                <li><strong>디스플레이:</strong> 4.7인치 16:9 비율 1334 x 750 Retina HD 디스플레이 (326 ppi)</li>
                <li><strong>전면 카메라:</strong> 전면 700만 화소 (ƒ/2.2)</li>
                <li><strong>후면 카메라:</strong> 후면 OIS 지원 1,200만 화소 (ƒ/1.8) 위상차 검출 AF 및 쿼드 LED True Tone 플래시</li>
                <li><strong>RAM:</strong> 4 GB LPDDR4X SDRAM</li>
                <li><strong>내장 메모리:</strong> 64 GB, 128 GB, 256 GB NVMe 규격 내장 메모리</li>
                <li><strong>배터리:</strong> 내장형 Li-Ion 2018 mAh (7.82 Wh / 3.88 V)</li>
                <li><strong>무게:</strong> 144g</li>
            </ul> `
    },
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
