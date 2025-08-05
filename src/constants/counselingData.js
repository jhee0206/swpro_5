// src/constants/counselingData.js

/** 상담 기관 > 상위 권역 버튼 목록 */
export const counselingProvinces = [
    { label: '수도권', action: 'select_counseling_province' },
    { label: '강원권', action: 'select_counseling_province' },
    { label: '충청권', action: 'select_counseling_province' },
    { label: '전라권', action: 'select_counseling_province' },
    { label: '경상권', action: 'select_counseling_province' },
    { label: '제주권', action: 'select_counseling_province' },
];

/** 각 권역에 속한 하위 지역 버튼 목록 */
export const counselingSubRegions = {
    '수도권': [
        { label: '서울', action: 'show_counseling_info' },
        { label: '경기', action: 'show_counseling_info' },
        { label: '인천', action: 'show_counseling_info' },
    ],
    '강원권': [ { label: '강원', action: 'show_counseling_info' } ],
    '충청권': [
        { label: '대전', action: 'show_counseling_info' },
        { label: '충북', action: 'show_counseling_info' },
        { label: '충남', action: 'show_counseling_info' }
    ],
    '전라권': [
        { label: '전북', action: 'show_counseling_info' },
        { label: '전남', action: 'show_counseling_info' },
        { label: '광주', action: 'show_counseling_info'},
    ],
    '경상권': [

        { label: '대구', action: 'show_counseling_info' },
        { label: '경남', action: 'show_counseling_info' },
        { label: '경북', action: 'show_counseling_info' },
        { label: '부산', action: 'show_counseling_info'},
        { label: '울산', action: 'show_counseling_info'},

    ],
    '제주권': [ { label: '제주', action: 'show_counseling_info' } ],
};

/** 각 지역별 최종 치료기관 정보 (모든 값을 배열로 수정) */
export const counselingCenterData = {
    '서울': [ // 지역 정보를 배열로 감쌉니다.
        {
            name: '국립정신건강센터(광진구)',
            address: '서울특별시 광진구 용마산로 127',
            contact: '02-2204-0114',
            website:'https://www.hopegj.or.kr/'

        },
        {
            name: '서울특별시 은평병원(은평구)',
            address: '서울 은평구 백련산로 90',
            contact: '02-300-8114',
            website: 'https://ephosp.seoul.go.kr/'
        }
    ],
    '부산':[
        {
            name: '부산의료원(연제구)',
            address: '부산 연제구 월드컵대로 359',
            contact: '051-507-3000',
            website: 'https://www.busanmc.or.kr/busanmc/'
        },
        {
            name: '부산시립정신병원(사상구)',
            address: '부산광역시 사상구 학감대로39번길 104-36',
            contact: '051-310-7710',
            website: 'http://www.bmmh.or.kr/'
        }
    ],
    '경기': [
        {
            name: '경기도의료원의정부병원(의정부시)',
            address: '경기 의정부시 흥선로 142',
            contact: '031-828-5000',
            website: 'https://www.medical.or.kr/uijeongbu/index.do'
        },

        {
            name: '용인정신병원(용인시)',
            address: '경기도 용인시 기흥구 중부대로 940',
            contact: '031-288-0114',
            website: 'https://www.yonginmh.co.kr/'
        },

        {
            name: '경기도립정신병원(용인시)',
            address: '경기도 용인시 기흥구 중부대로 940',
            contact: '031-330-6200',
            website: 'https://www.mentalhospital.or.kr/'
        },
        {
            name: '계요병원(의왕시)',
            address: '경기도 의왕시 오전로 15',
            contact: '031-455-3333',
            website: 'https://www.keyo.co.kr/fd/fd01.php'
        },

        {
            name: '아주편한병원(수원시))',
            address: '경기도 수원시 장안구 경수대로 1111',
            contact: '031-269-5665',
            website: 'http://www.ajougoodhospital.co.kr/'
        },

        {
            name: '이천소망병원(이천시)',
            address: '경기 이천시 호법면 중부대로 797-26',
            contact: '031-637-7400',
            website: 'https://somanghospital.com/somang/intro/main/intro.php'
        },

        {
            name: 'W진병원(부천시)',
            address: '경기 부천시 원미구 신흥로 244',
            contact: '032-321-1433',
            website: 'https://www.wjinhospital.com/'
        },

    ],
    '인천': [
        {
            name: '인천광역시의료원(동구)',
            address: '인천 동구 방축로 217',
            contact: '032-580-6000',
            website: 'https://www.icmc.or.kr/'
        },
        {
            name: '인천참사랑병원(서구)',
            address: '인천 서구 원창로240번길 9',
            contact: '032-571-9111',
            website: 'http://www.clh.co.kr/'
        }
    ],
    '울산': [
        {
            name: '국립나주병원(나주시)',
            address: '전남 나주시 산포면 세남로 1328-31',
            contact: '061-330-4114',
            website: 'https://www.najumh.go.kr/main.do'
        }
    ],
    '전남': [
        {
            name: '마더스병원(남구)',
            address: '울산광역시 남구 화합로 107',
            contact: '052-270-7000',
            website: 'http://motherth.co.kr/'
        }
    ],
    '광주': [
        {
            name: '광주시립정신병원(광산구)',
            address: '광주 광산구 삼도로 84-3',
            contact: '062-949-5200',
            website: 'http://www.gcmh.or.kr/'
        }
    ],
    '강원': [
        {
            name: '원주세브란스기독병원(원주시)',
            address: '강원 원주시 일산로 20',
            contact: '033-741-0114',
            website: 'https://www.ywmc.or.kr/web/www/home'
        },
        {
            name: '국립춘천병원(춘천시)',
            address: '강원특별자치도 춘천시 동산면 영서로 824',
            contact: '033-260-3000',
            website: 'https://www.cnmh.go.kr/'
        }
    ],
    '대전': [
        {
            name: '참다남병원(중구)',
            address: '대전광역시 중구 보문로 254',
            contact: '042-222-0122',
            website: 'http://www.mahm.co.kr/main/index.html'
        },
        {
            name: '마인드병원(서구)',
            address: '대전 서구 대덕대로 242번길 48',
            contact: '042-528-6550',
            website: 'http://mindhosp.com/'
        }
    ],
    '충북': [
        {
            name: '청주의료원(청주시)',
            address: '충북 청주시 서원구 흥덕로 48',
            contact: '043-279-0114',
            website: 'https://www.cjmc.or.kr/intro.php'
        }
    ],
    '충남' : [
        {
            name: '국립공주병원(공주시)',
            address: '충남 공주시 고분티로 623-21',
            contact: '041-850-5700',
            website: 'https://www.knmh.go.kr/'
        }
    ],
    '전북': [
        {
            name: '원광대학교병원(익산시)',
            address: '전북특별자치도 익산시 무왕로 895',
            contact: '1577-3773',
            website: 'https://www.wkuh.org/main/main.do'
        },
        {
            name: '신세계병원(김제시)',
            address: '전북특별자치도 김제시 금산면 용산리 301-14',
            contact: '063-545-8700',
            website: 'http://www.newworldhospital.com/'
        },
        {
            name: '전라북도마음사랑병원(완주군)',
            address: '전북특별자치도 완주군 소양면 소양로 465-23',
            contact: '063-240-2100',
            website: 'http://www.maeumsarang.co.kr/'
        }
    ],
    '대구': [
        {
            name: '대동병원(동구)',
            address: '대구광역시 동구 화랑로 169',
            contact: '053-663-1008',
            website: 'http://www.ddhosp.com/'
        },
        {
            name: '대구의료원(서구)',
            address: '대구 서구 평리로 157',
            contact: '053-560-7575',
            website: 'https://www.daegumc.co.kr/main/main.do'

        }
    ],
    '경북': [
        {
            name: '포항의료원(포항시)',
            address: '경상북도 포항시 북구 용흥로 36',
            contact: '054-247-0551',
            website: 'https://pmc.or.kr/front/main.do'
        }
    ],
    '경남': [
        {
            name: '국립부곡병원(창녕군)',
            address: '경남 창녕군 부곡면 부곡리 70',
            contact: '055-536-6440',
            website: 'https://www.bgnmh.go.kr/'
        },
        {
            name: '양산병원(양산시)',
            address: '경남 양산시 모래들1길 91',
            contact: '055-379-0202',
            website: 'http://how2care.co.kr/v2/main/index.php'
        }
    ],
    '제주': [
        {
            name: '연강참병원(제주시)',
            address: '제주특별자치도 제주시 특별자치도, 용담일동 번지 아세아빌딩 지하 2829-14 1층',
            contact: '064-759-9641',
            website: 'http://www.yeonkang.org/'
        }
    ],
};
