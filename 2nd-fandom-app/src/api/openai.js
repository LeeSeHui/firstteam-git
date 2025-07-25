export async function getChatReply(message, isButton = false) {
    const mockReplies = {
      '잔여 포인트 현황': '현재 보유 포인트는 5,000점입니다!',
      '출석 현황': '이번 달 20회 출석 완료!',
      '투표 현황': '진행 중인 투표: 3개, 참여 완료: 1개',
      '포인트 사용': '포인트 샵에서 굿즈로 교환하실 수 있습니다!',
    };
  
    if (isButton && mockReplies[message]) {
      return mockReplies[message];
    }
  
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: message }],
      }),
    });
  
    const data = await response.json();
    return data.choices[0].message.content;
  }
  