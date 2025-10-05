document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copy-button');
    const accountNumberSpan = document.getElementById('account-number');
    const toast = document.getElementById('toast');

    // 계좌번호 복사 버튼이 존재할 경우에만 이벤트 리스너 추가
    if (copyButton && accountNumberSpan) {
        copyButton.addEventListener('click', () => {
            // span 요소에서 순수 텍스트만 추출
            const accountNumberText = accountNumberSpan.innerText;

            // Clipboard API를 사용하여 텍스트 복사
            navigator.clipboard.writeText(accountNumberText)
                .then(() => {
                    // 복사 성공 시 토스트 메시지 표시
                    showToast('계좌번호가 복사되었습니다!');
                })
                .catch(err => {
                    // 복사 실패 시 에러 로그 출력 및 사용자 알림
                    console.error('클립보드 복사 실패:', err);
                    showToast('복사에 실패했습니다. 다시 시도해주세요.');
                });
        });
    }

    // 토스트 메시지를 화면에 표시하는 함수
    function showToast(message) {
        if (toast) {
            toast.textContent = message;
            toast.classList.add('show');

            // 3초 후 토스트 메시지 숨기기
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }
});