// src/constants/rehabData.js

/** "재활센터" 클릭 시 처음 보여줄 두 가지 주요 기관 유형 */
export const rehabCategories = [
    {
        key: 'addiction_seoul',
        label: '중독관리통합센터(서울)',
        action: 'select_category'
    },
    {
        key: 'eradication_nationwide',
        label: '마약퇴치운동센터(전국)',
        action: 'select_category'
    },
];

/** 중독관리통합센터(서울시) 데이터 */
export const seoulAddictionCenters = {
    buttons: [
        {
            label: '강북구',
            action: 'show_final_info',
            source: 'seoul_addiction'
        },
        {
            label: '노원구',
            action: 'show_final_info',
            source: 'seoul_addiction'
        },
        {
            label: '도봉구',
            action: 'show_final_info',
            source: 'seoul_addiction'
        },
    ],
    data: {
        '강북구': {
            name: '강북구중독관리통합지원센터',
            address: '서울 강북구 삼양로19길 154',
            contact: '02-989-9223~4',
            imageUrl: '/images/placeholder.jpg'
        },
        '노원구': {
            name: '노원구중독관리통합지원센터',
            address: '서울 노원구 노원로16길 15',
            contact: '02-6941-3677',
            imageUrl: '/images/nowon_center.jpg'
        },
        '도봉구': {
            name: '도봉구중독관리통합지원센터',
            address: '서울 도봉구 방학로 53',
            contact: '02-6082-6793~4',
            imageUrl: '/images/placeholder.jpg'
        },
    }
};

/** 마약퇴치 운동센터(전국) 데이터 */
export const nationwideDrugCenters = {
    provinces: [
        {
            label: '서울',
            action: 'select_province'
        },
        {
            label: '경기',
            action: 'select_province'
        },
        {
            label: '강원',
            action: 'select_province'
        },
        {
            label: '충청',
            action: 'select_province'
        },
        {
            label: '전라',
            action: 'select_province'
        },
        {
            label: '경상',
            action: 'select_province'
        },
        {
            label: '제주',
            action: 'select_province'
        }
    ],

    subRegions: {
        '서울': [
            {
                label: '서울',
                action: 'show_final_info',
                source: 'nationwide'
            },
            {
                label: '중앙',
                action: 'show_final_info',
                source: 'nationwide'
            }
        ],
        '경기': [
            {
                label: '경기',
                action: 'show_final_info',
                source: 'nationwide'
            },
            {
                label: '인천',
                action: 'show_final_info',
                source: 'nationwide'
            }
        ],
        '강원': [
            {
                label: '강원',
                action: 'show_final_info',
                source: 'nationwide'
            }
        ],
        '충청': [
            {
                label: '충북',
                action: 'show_final_info',
                source: 'nationwide'
            },
            {
                label: '충남',
                action: 'show_final_info',
                source: 'nationwide'
            },
            {
                label: '대전',
                action: 'show_final_info',
                source: 'nationwide'
            }
        ],
        '전라': [
            {
                label: '전북',
                action: 'show_final_info',
                source: 'nationwide'
            },
            {
                label: '전남',
                action: 'show_final_info',
                source: 'nationwide'
            },
            {
                label: '광주',
                action: 'show_final_info',
                source: 'nationwide'
            }
        ],
        '경상': [
            {
                label: '경북',
                action: 'show_final_info',
                source: 'nationwide'
            },
            {
                label: '경남',
                action: 'show_final_info',
                source: 'nationwide'
            },
            {
                label: '대구',
                action: 'show_final_info',
                source: 'nationwide'
            },
            {
                label: '울산',
                action: 'show_final_info',
                source: 'nationwide'
            },
            {
                label: '부산',
                action: 'show_final_info',
                source: 'nationwide'
            }
        ],
        '제주': [
            {
                label: '제주',
                action: 'show_final_info',
                source: 'nationwide'
            }
        ],
    },

    data: {
        '대전': {
            name: '대전함께한걸음센터',
            address: '대전광역시 서구 계룡로 553번안길 26',
            contact: '042-254-8553',
            imageUrl: '/images/daejeon_center.jpg'
        },
        '서울': {
            name: '서울함께한걸음센터',
            address: '주소 미정',
            contact: '02-6958-5128',
            imageUrl: '/images/placeholder.jpg'
        },
        '중앙': {
            name: '중앙마약퇴치운동본부',
            address: '주소 미정',
            contact: '02-2679-0436',
            imageUrl: '/images/placeholder.jpg'
        },
        '경기': {
            name: '경기함께한걸음센터',
            address: '주소 미정',
            contact: '031-257-7582',
            imageUrl: '/images/placeholder.jpg'
        },
        '충남': {
            name: '충남함께한걸음센터',
            address: '주소 미정',
            contact: '041-592-1342',
            imageUrl: '/images/daejeon_center.jpg'
        },
        '강원': {
            name: '강원함께한걸음센터',
            address: '주소 미정',
            contact: '033-823-0626',
            imageUrl: '/images/daejeon_center.jpg'

        },
        '충북': {
            name: '충북함께한걸음센터',
            address: '주소 미정',
            contact: '070-4415-4137',
            imageUrl: '/images/daejeon_center.jpg'
        },
        '대구': {
            name: '대구함께한걸음센터',
            address: '주소 미정',
            contact: '053-764-1207',
            imageUrl: '/images/daejeon_center.jpg'
        },
        '경북': {
            name: '경북함께한걸음센터',
            address: '주소 미정',
            contact: '054-451-0127',
            imageUrl: '/images/daejeon_center.jpg'
        },
        '울산': {
            name: '울산함께한걸음센터',
            address: '주소 미정',
            contact: '052-222-000',
            imageUrl: '/images/daejeon_center.jpg'
        },
        '경남': {
            name: '경남함께한걸음센터',
            address: '주소 미정',
            contact: '055-715-8883',
            imageUrl: '/images/daejeon_center.jpg'
        },
        '부산': {
            name: '부산함께한걸음센터',
            address: '주소 미정',
            contact: '051-462-1022',
            imageUrl: '/images/daejeon_center.jpg'
        },
        '전북': {
            name: '전북함께한걸음센터',
            address: '주소 미정',
            contact: '063-232-5112~3',
            imageUrl: '/images/daejeon_center.jpg'
        },
        '광주': {
            name: '광주함께한걸음센터',
            address: '주소 미정',
            contact: '062-374-2818',
            imageUrl: '/images/daejeon_center.jpg'
        },
        '전남': {
            name: '전남함께한걸음센터',
            address: '주소 미정',
            contact: '061-804-9777',
            imageUrl: '/images/daejeon_center.jpg'
        },
        '제주': {
            name: '제주함께한걸음센터',
            address: '주소 미정',
            contact: '064-805-9795',
            imageUrl: '/images/daejeon_center.jpg'
        },
    }
}
