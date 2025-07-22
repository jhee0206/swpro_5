// services/chatbotService.js

// qaData.js에서 답변 데이터만 가져옵니다.
import { qaData } from '../constants/qaData.js';

export function getBotAnswer(key) {
    // key에 해당하는 답변 내용을 qaData에서 찾습니다.
    const answer = qaData[key];

    // ★★★ 핵심 변경점: answer가 undefined일 경우, 안전한 기본 메시지를 반환합니다. ★★★
    // 이렇게 하면 이 함수는 절대 undefined를 반환하지 않아, 하위 컴포넌트의 오류를 방지합니다.
    return answer || "죄송합니다, 요청하신 정보를 찾을 수 없습니다.";
}
