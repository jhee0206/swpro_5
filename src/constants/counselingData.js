// src/constants/counselingData.js

/** 상담 기관 > 상위 권역 버튼 목록 */
export const counselingProvinces = [
    {
        label: '수도권',
        action: 'select_counseling_province'
    },
    {
        label: '강원권',
        action: 'select_counseling_province'
    },
    {
        label: '충청권',
        action: 'select_counseling_province'
    },
    {
        label: '전라권',
        action: 'select_counseling_province'
    },
    {
        label: '경상권',
        action: 'select_counseling_province'
    },
    {
        label: '제주권',
        action: 'select_counseling_province'
    },
];

/** 각 권역에 속한 하위 지역 버튼 목록 */
export const counselingSubRegions = {
    '수도권': [
        {
            label: '서울',
            action: 'show_counseling_info'
        },
        {
            label: '경기',
            action: 'show_counseling_info'
        },
        {
            label: '인천',
            action: 'show_counseling_info'
        },
    ],
    '강원권': [
        {
            label: '강원',
            action: 'show_counseling_info'
        }
    ],
    '충청권': [
        {
            label: '대전',
            action: 'show_counseling_info'
        }
    ],
    '전라권': [
        {
            label: '전북',
            action: 'show_counseling_info'
        }
    ],
    '경상권': [
        {
            label: '대구',
            action: 'show_counseling_info'
        },
        {
            label: '경남',
            action: 'show_counseling_info'
        },
    ],
    '제주권': [
        {
            label: '제주',
            action: 'show_counseling_info'
        }
    ],
};

/** 각 지역별 최종 치료기관 정보 */
export const counselingCenterData = {
    '서울': {
        name: '광진구 국립정신건강센터',
        address: '주소 미정',
        contact: '02-2204-0114',
        imageUrl: '/images/placeholder.jpg'
    },
    '경기': {
        name: '용인시 경기도립정신병원',
        address: '주소 미정',
        contact: '031-330-6200',
        imageUrl: '/images/placeholder.jpg'
    },
    '인천': {
        name: '서구 인천참사랑병원',
        address: '주소 미정',
        contact: '032-571-9111',
        imageUrl: '/images/placeholder.jpg'
    },
    '강원': {
        name: '원주시 원주세브란스기독병원',
        address: '주소 미정',
        contact: '033-741-0114',
        imageUrl: '/images/placeholder.jpg'
    },
    '대전': {
        name: '중구 참다남병원',
        address: '주소 미정',
        contact: '042-222-0122',
        imageUrl: '/images/placeholder.jpg'
    },
    '전북': {
        name: '익산시 원광대학교병원',
        address: '주소 미정',
        contact: '1577-3773',
        imageUrl: '/images/placeholder.jpg'
    },
    '대구': {
        name: '동구 대동병원',
        address: '주소 미정',
        contact: '053-663-1008',
        imageUrl: '/images/placeholder.jpg'
    },
    '경남': {
        name: '창녕군 국립부곡병원',
        address: '주소 미정',
        contact: '055-536-6440',
        imageUrl: '/images/placeholder.jpg'
    },
    '제주': {
        name: '제주 연강참병원',
        address: '주소 미정',
        contact: '064-759-9641',
        imageUrl: '/images/placeholder.jpg'
    },
};
