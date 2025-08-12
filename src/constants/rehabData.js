// src/constants/rehabData.js

/** "재활센터" 클릭 시 처음 보여줄 두 가지 주요 기관 유형 */
export const rehabCategories = [
    {
        key: 'addiction_center',
        label: '중독관리통합지원센터(전국)',
        action: 'select_category'
    },
    {
        key: 'one_step_center',
        label: '한걸음센터(전국)',
        action: 'select_category'
    },
];

/**
 * 중독관리통합지원센터(전국) 데이터
 * import 에러 해결을 위해 변수명을 원래 이름으로 복원하고 export 합니다.
 */
export const seoulAddictionCenters = {
    buttons: [
        { label: '서울', action: 'select_province' },
        { label: '경기도', action: 'select_province' },
        { label: '강원', action: 'show_final_info', source: 'addiction_center' },
        { label: '충청도', action: 'select_province' },
        { label: '전라도', action: 'select_province' },
        { label: '경상도', action: 'select_province' },
        { label: '제주', action: 'show_final_info', source: 'addiction_center' }
    ],
    subRegions: {
        '서울': [
            { label: '강북구', action: 'show_final_info', source: 'addiction_center' },
            { label: '노원구', action: 'show_final_info', source: 'addiction_center' },
            { label: '도봉구', action: 'show_final_info', source: 'addiction_center' },
        ],
        '경기도': [
            { label: '경기', action: 'show_final_info', source: 'addiction_center' },
            { label: '인천', action: 'show_final_info', source: 'addiction_center' }
        ],
        '충청도': [
            { label: '충북', action: 'show_final_info', source: 'addiction_center' },
            { label: '충남', action: 'show_final_info', source: 'addiction_center' },
            { label: '대전', action: 'show_final_info', source: 'addiction_center' }
        ],
        '전라도': [
            { label: '전북', action: 'show_final_info', source: 'addiction_center' },
            { label: '전남', action: 'show_final_info', source: 'addiction_center' },
            { label: '광주', action: 'show_final_info', source: 'addiction_center' }
        ],
        '경상도': [
            { label: '경북', action: 'show_final_info', source: 'addiction_center' },
            { label: '경남', action: 'show_final_info', source: 'addiction_center' },
            { label: '대구', action: 'show_final_info', source: 'addiction_center' },
            { label: '울산', action: 'show_final_info', source: 'addiction_center' },
            { label: '부산', action: 'show_final_info', source: 'addiction_center' }
        ],
    },
    data: {
        '강북구': [{
            name: '강북구중독관리통합지원센터',
            address: '서울특별시 강북구 삼양로19길 154, 2층',
            contact: '02-989-9223',
            website: 'http://gbalcohol.co.kr/'
        }],
        '노원구': [{
            name: '노원구중독관리통합지원센터',
            address: '서울특별시 노원구 노원로 16길 15, 912동 1층',
            contact: '02-6941-3677',
            website: 'http://www.nowon-addiction.or.kr'
        }],
        '도봉구': [{
            name: '도봉구중독관리통합지원센터',
            address: '서울특별시 도봉구 방학로 53 백윤빌딩 2층',
            contact: '02-6082-6793',
            website: 'http://www.dbalcohol.or.kr'
        }],
        '부산': [
            {
                name: '부산중독관리센터',
                address: '부산광역시 서구 구덕로 179 융합의학연구동 2층',
                contact: '051-246-7570',
                website: 'http://www.busancamc.org'
            },
            {
                name: '사상구중독관리통합지원센터',
                address: '부산광역시 사상구 가야대로 196번길 51, 3층 (학장동, 다누림센터)',
                contact: '051-988-1191',
                website: 'http://sasangacc.com'
            },
            {
                name: '해운대중독관리통합지원센터',
                address: '부산광역시 해운대구 반송로 853 반송보건지소 1층',
                contact: '051-545-1172',
                website: 'http://www.해운대중독관리통합지원센터.com'
            },

        ],
        '대구': [
            {
                name: '달서구중독관리통합지원센터',
                address: '대구광역시 달서구 학산로 50 월성문화관내',
                contact: '053-638-3778',
                website: 'http://www.dcamc.or.kr'
            },
            {
                name: '대구동구중독관리통합지원센터',
                address: '대구광역시 동구 아양로 246-1 3층',
                contact: '053-957-8817',
                website: 'http://www.alcohol21.net'
            }
        ],
        '인천': [
            {
                name: '계양구중독관리통합지원센터',
                address: '인천광역시 계양구 계양대로 126 계양구의회청사 1층',
                contact: '032-555-8765',
                website: 'http://www.goacc.or.kr'
            },
            {
                name: '남동구중독관리통합지원센터',
                address: '인천 남동구 간석동 169-1, 5층',
                contact: '032-468-6412',
                website: 'http://nd-jungdok.or.kr'
            },
            {
                name: '동구중독관리통합지원센터',
                address: '인천광역시 동구 송림로 113, 2층',
                contact: '032-764-1183',
                website: 'http://www.icdacc.org'
            },
            {
                name: '부평구중독관리통합지원센터',
                address: '인천광역시 부평구 마장로 410번길 5, 청천 2동 178-44',
                contact: '032-507-3404',
                website: 'http://www.bpalcohol.or.kr'
            },{
                name: '연수구중독관리통합지원센터',
                address: '인천광역시 연수구 앵고개로 183 남동부수도사업소 2층',
                contact: '032-236-9477',
                website: 'http://www.ickosacc.com'
            },


        ],
        '광주': [
            {
                name: '광주광산구중독관리통합지원센터',
                address: '광주광역시 광산구 상무대로 239-1 5층',
                contact: '062-714-1233',
                website: 'http://www.gsgacc.or.kr'
            },
            {
                name: '광주남구중독관리통합지원센터',
                address: '광주광역시 남구 독립로 25-1',
                contact: '062-413-1195',
                website: 'http://namguacc.or.kr'
            },
            {
                name: '광주동구중독관리통합지원센터',
                address: '광주광역시 동구 구성로 190 흥국생명빌딩 2층',
                contact: '062-222-5666',
                website: 'http://www.dgacc.kr'
            },
            {
                name: '광주북구중독관리통합지원센터',
                address: '광주광역시 북구 중가로 26 4층',
                contact: '062-526-3370',
                website: 'http://www.yohanacc.or.kr'
            },
            {
                name: '광주서구중독관리통합지원센터',
                address: '광주광역시 서구 회재로 897-1 용현빌딩 2층',
                contact: '062-654-3802~3',
                website: 'http://dsracc.or.kr'
            },
        ],
        '대전': [
            {
                name: '대전대덕구중독관리통합지원센터',
                address: '대전광역시 대덕구 중리서로42, 3층',
                contact: '042-635-8275',
                website: 'http://www.ddgacc.com'
            },
            {
                name: '대전동구중독관리통합지원센터',
                address: '대전광역시 동구 동대전로333, 3층',
                contact: '042-286-8275~6',
                website: 'http://www.lifeacc.or.kr/'
            },
            {
                name: '대전서구중독관리통합지원센터',
                address: '대전광역시 서구 갈마로 40, 3층',
                contact: '042-527-9125',
                website: 'http://www.djsaddiction.or.kr'
            },
            {
                name: '유성구중독관리통합지원센터',
                address: '대전광역시 유성구 노은동로 75번길 85-30, 3층',
                contact: '042-826-3250',
                website: 'http://www.yscamc.or.kr'
            },
            {
                name: '대전중구중독관리통합지원센터',
                address: '대전광역시 중구 계룡로 920번안길 74 종근빌딩, 2층',
                contact: '042-251-9730',
                website: 'http://www.djjgamc.or.kr'
            },
        ],
        '울산': [
            {
                name: '울산남구중독관리통합지원센터',
                address: '울산광역시 남구 화합로 105, 로하스빌딩 5층',
                contact: '052-275-1117',
                website: 'http://www.usaddiction.or.kr'
            },
            {
                name: '울산중구중독관리통합지원센터',
                address: '울산광역시 중구 태화로 216, 3층',
                contact: '052-245-9007',
                website: 'https://blog.naver.com/ujamcenter'
            }
        ],
        '경기': [
            {
                name: '경기광역중독관리통합지원센터',
                address: '경기도 수원시 장안로 262, 4층 401호',
                contact: '031-269-6692',
            },
            {
                name: '고양시중독관리통합지원센터',
                address: '경기도 고양시 일산동구 일산로 86(백석동) 1층',
                contact: '031-932-7071',
                website: 'http://www.gamc.or.kr'
            },
            {
                name: '김포시중독관리통합지원센터',
                address: '경기도 김포시 사우중로 108, 김포시보건소 별관2층',
                contact: '031-998-4005',
            },
            {
                name: '성남시중독관리통합지원센터',
                address: '경기도 성남시 수정로 218, 수정구보건소 5층',
                contact: '031-751-2768~9',
                website: 'http://www.snac.or.kr'
            },
            {
                name: '수원시중독관리통합지원센터',
                address: '경기도 수원시 팔달구 매산로 89 구중부소방서 2층',
                contact: '031-256-9478',
                website: 'http://www.kosacc.or.kr/'
            },
            {
                name: '안산시중독관리통합지원센터',
                address: '경기도 안산시 단원구 고잔동 515 구단원보건소2층',
                contact: '031-411-8445~6',
                website: 'http://www.ansanacc.or.kr'
            },
            {
                name: '안양시중독관리통합지원센터',
                address: '경기도 안양시 만안구 안양로 119 계양빌딩 7층',
                contact: '031-464-0175',
                website: 'http://www.acamc.co.kr'
            },
            {
                name: '의정부시중독관리통합지원센터',
                address: '경기도 의정부시 둔야로 33번길 8, 광희빌딩 5층',
                contact: '031-829-5001',
                website: 'http://www.uamc.co.kr'
            },
            {
                name: '파주시중독관리통합지원센터',
                address: '경기도 파주시 조리읍 봉천로 68, 2층',
                contact: '031-948-8004',
                website: 'http://www.pajuacc.com'
            },
            {
                name: '화성시중독관리통합지원센터',
                address: '경기도 화성시 정남면 서봉로 998 정남보건지소 1층',
                contact: '031-354-6614',
                website: 'http://www.hsalcohol.kr'
            },
        ],
        '강원': [
            {
                name: '강원광역중독관리통합지원센터',
                address: '강원도 춘천시 후석로 42(석사동) 시티빌딩4층',
                contact: '033-251-1970',
                website: 'https://gwmh.or.kr:446'
            },
            {
                name: '강릉시중독관리통합지원센터',
                address: '강원도 강릉시 용지로 144 리치빌딩 4층',
                contact: '033-653-9667',
                website: 'http://www.gnamc.or.kr'
            },
            {
                name: '원주시중독관리통합지원센터',
                address: '강원도 원주시 원일로139 원주건강문화센터 지하1층',
                contact: '033-748-5119',
                website: 'http://www.alja.or.kr'
            },
            {
                name: '춘천시중독관리통합지원센터',
                address: '강원도 춘천시 삭주로 84 수인빌딩 3층',
                contact: '033-255-3482',
                website: 'http://www.alcoholfree.or.kr'
            }
        ],
        '충북': [
            {
                name: '충북광역중독관리통합지원센터',
                address: '충북 청주시 서원구 1순환로 767 지오빌딩 2층',
                contact: '043-217-0597',
                website: 'https://www.cbmind.or.kr'
            },
            {
                name: '청주중독관리통합지원센터',
                address: '충북 청주시 상당구 대성로172번길 21(흥덕보건소별관) 3층',
                contact: '043-272-0067',
                website: 'http://www.cjacc.or.kr'
            }
        ],
        '충남': [
            {
                name: '아산시중독관리통합지원센터',
                address: '충남 아산시 번영로216번길 18, 아산시보건소 별관 1층',
                contact: '041-537-3332',
                website: 'https://www.asan.go.kr/health/mind/index.php'
            },
            {
                name: '천안시중독관리통합지원센터',
                address: '충남 천안시 동남구 버들로 40, 영덕빌딩 1층',
                contact: '041-577-8097~8',
                website: 'http://www.cheonanac.or.kr'
            }
        ],
        '전북': [
            {
                name: '전북광역중독관리통합지원센터',
                address: '전북 전주시 덕진구 정여립로 1115 나눔둥지타운 407호',
                contact: '063-251-0650',
                website: 'https://www.jbmhc.or.kr'
            },
            {
                name: '군산시중독관리통합지원센터',
                address: '전북 군산시 공단대로 482 4층',
                contact: '063-464-0061~3',
                website: 'http://www.gunsanacc.org'
            },
            {
                name: '전주시중독관리통합지원센터',
                address: '전북 전주시 덕진구 가리내로 10, 2층',
                contact: '063-223-4567',
                website: 'http://www.jaddiction.org/'
            },
            {
                name: '익산시중독관리통합지원센터',
                address: '전북 익산시 무왕로 975, 2층',
                contact: '063-859-7124',
                website: '-'
            }
        ],
        '전남': [
            {
                name: '목포시중독관리통합지원센터',
                address: '전남 목포시 석현로48 하당보건지소 3층',
                contact: '061-284-9694',
                website: 'http://www.jncsw.org/mamc/'
            },
            {
                name: '여수시중독관리통합지원센터',
                address: '전남 여수시 시청서4길 47 여수시보건소',
                contact: '061-659-4288',
                website: 'https://www.yeosu.go.kr/health'
            }
        ],
        '경북': [
            {
                name: '구미중독관리통합지원센터',
                address: '경북 구미시 검성로 115-1',
                contact: '054-474-9791',
                website: 'http://gmaddiction.or.kr/'
            },
            {
                name: '포항중독관리통합지원센터',
                address: '경북 포항시 북구 삼흥로 98, 북구보건소 별관 2층',
                contact: '054-270-4191',
                website: 'https://www.pohang.go.kr/health/index.do'
            }
        ],
        '경남': [
            {
                name: '경남광역중독관리통합지원센터',
                address: '경남 창원시 의창구 동읍 동읍로 457번길 48 (경남사회복지센터)',
                contact: '055-239-1400',
                website: 'https://www.gnmhc.or.kr/sub02/sub03_01.php'
            },
            {
                name: '김해중독관리통합지원센터',
                address: '경남 김해시 주촌면 주선로 29-1, 건강생활지원센터 1층',
                contact: '055-314-0317',
                website: 'http://www.ghacc.co.kr/'
            },
            {
                name: '마산중독관리통합지원센터',
                address: '경남 창원시 마산합포구 합포로 2, 3층',
                contact: '055-247-6994',
                website: 'http://www.masanacc.or.kr'
            },
            {
                name: '양산시중독관리통합지원센터',
                address: '경남 양산중앙로 7-32 양산시 보건복지센터 5층',
                contact: '055-367-9072',
                website: 'http://www.yscamc.org'
            },
            {
                name: '진주중독관리통합지원센터',
                address: '경남 진주시 진주대로 816번길 20, 2층',
                contact: '055-758-7801',
                website: 'http://www.jinjuacc.org'
            },
            {
                name: '창원중독관리통합지원센터',
                address: '경남 창원시 성산구 중앙대로 162번길 8, 4층',
                contact: '055-225-7851',
                website: 'http://www.cwacc.or.kr/'
            }
        ],
        '제주': [
            {
                name: '제주광역중독관리통합지원센터',
                address: '제주특별자치도 제주시 아란13길15 제주대학교병원내 별관',
                contact: '064-717-3000',
                website: 'http://jejumind.or.kr'
            },
            {
                name: '서귀포중독관리통합지원센터',
                address: '제주특별자치도 서귀포시 중앙로 101번길 52, 서귀포보건소 2층',
                contact: '064-760-6552',
                website: 'http://www.seogwipo.go.kr/group/health/seogwipo/main.htm'
            },
            {
                name: '제주중독관리통합지원센터',
                address: '제주특별자치도 제주시 서사로 184 4층',
                contact: '064-759-0911',
                website: 'http://jejuaddiction.org'
            }
        ],
    }
};

/**
 * 한걸음센터(전국) 데이터
 * import 에러 해결을 위해 변수명을 원래 이름으로 복원하고 export 합니다.
 */
export const nationwideDrugCenters = {
    provinces: [
        { label: '서울', action: 'show_final_info', source: 'one_step_center' },
        { label: '경기도', action: 'select_province' },
        { label: '강원', action: 'show_final_info', source: 'one_step_center' },
        { label: '충청도', action: 'select_province' },
        { label: '전라도', action: 'select_province' },
        { label: '경상도', action: 'select_province' },
        { label: '제주', action: 'show_final_info', source: 'one_step_center' }
    ],
    subRegions: {
        '경기도': [
            { label: '경기', action: 'show_final_info', source: 'one_step_center' },
            { label: '인천', action: 'show_final_info', source: 'one_step_center' }
        ],
        '충청도': [
            { label: '충북', action: 'show_final_info', source: 'one_step_center' },
            { label: '충남', action: 'show_final_info', source: 'one_step_center' },
            { label: '대전', action: 'show_final_info', source: 'one_step_center' }
        ],
        '전라도': [
            { label: '전북', action: 'show_final_info', source: 'one_step_center' },
            { label: '전남', action: 'show_final_info', source: 'one_step_center' },
            { label: '광주', action: 'show_final_info', source: 'one_step_center' }
        ],
        '경상도': [
            { label: '경북', action: 'show_final_info', source: 'one_step_center' },
            { label: '경남', action: 'show_final_info', source: 'one_step_center' },
            { label: '대구', action: 'show_final_info', source: 'one_step_center' },
            { label: '울산', action: 'show_final_info', source: 'one_step_center' },
            { label: '부산', action: 'show_final_info', source: 'one_step_center' }
        ],
    },
    data: {
        '대전': [{
            name: '대전함께한걸음센터',
            address: '대전시 동구 대전로 866, 페이퍼칼라 302호',
            contact: '042-710-3753',
        }],
        '서울': [
            {
                name: '서울함께한걸음센터',
                address: '서울시 서초구 효령로 194 (서초3동 1489-3) 57',
                contact: '02-6958-5128',
            },
        ],
        '중앙': [{
            name: '중앙함께한걸음센터',
            address: '서울 영등포구 선유동2로 57',
            contact: '02-2679-0436',
            website: 'http://www.drugfree.or.kr/'
        }],
        '경기': [{
            name: '경기함께한걸음센터',
            address: '경기도 수원시 팔달구 경수대로 708, 2층 ',
            contact: '031-257-7582',
            website: 'http://www.ggdrugfree.or.kr/v3/main.html'
        }],
        '인천': [{
            name: '인천함께한걸음센터',
            address: '인천시 서구 가정로 316, 인정빌딩 4층',
            contact: '032-437-7910',
            website: 'http://www.indrugfree.or.kr/'
        }],
        '충남': [{
            name: '충남함께한걸음센터',
            address: '충남 천안시 서북구 쌍용대로 251, 3층',
            contact: '041-592-1342',
        }],
        '강원': [{
            name: '강원함께한걸음센터',
            address: '강원도 강릉시 강릉대로 280, 2층',
            contact: '033-823-0626',
        }],
        '충북': [{
            name: '충북함께한걸음센터',
            address: '충북 청주시 서원구 예체로 112, 5층',
            contact: '043-221-4133',
        }],
        '대구': [{
            name: '대구함께한걸음센터',
            address: '대구시 수성구 희망로 136, 3층',
            contact: '053-764-1207',
        }],
        '경북': [{
            name: '경북함께한걸음센터',
            address: '경북 구미시 송원동로 14-8, 2층',
            contact: '054-451-0127',
        }],
        '울산': [{
            name: '울산함께한걸음센터',
            address: '울산광역시 중구 염포로 88, 2층',
            contact: '052-222-0600',
        }],
        '경남': [{
            name: '경남함께한걸음센터',
            address: '경남 창원시 성산구 중앙대로 257, 2층',
            contact: '055-287-9993',
        }],
        '부산': [{
            name: '부산함께한걸음센터',
            address: '부산시 동구 중앙대로 272 (초량동) (부산시약사회관 4층) ',
            contact: '051-462-1022',
            website: 'http://www.busandrugfree.or.kr/'
        }],
        '전북': [{
            name: '전북함께한걸음센터',
            address: '전북 전주시 완산구 백제대로 319. 5층',
            contact: '063-232-5112',
        }],
        '광주': [{
            name: '광주함께한걸음센터',
            address: '광주광역시 상무대로 1106, 5층',
            contact: '062-374-2818',
        }],
        '전남': [{
            name: '전남함께한걸음센터',
            address: '전남 순천시 연향번영길 102, 2층',
            contact: '061-804-9777',
        }],
        '제주': [{
            name: '제주함께한걸음센터',
            address: '제주시 동광로 4, 삼옥빌딩 5층',
            contact: '064-805-9795',
        }],
    }
};
//1