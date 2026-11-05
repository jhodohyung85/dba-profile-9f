// 경력 시작일: 2012년 2월 (사람인 DA팀 입사)
export const CAREER_START = new Date(2012, 1, 1)

// 시작일부터 오늘까지 만 연차를 계산합니다.
export function getYearsOfExperience(now: Date = new Date()): number {
  let years = now.getFullYear() - CAREER_START.getFullYear()
  const beforeAnniversary =
    now.getMonth() < CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() && now.getDate() < CAREER_START.getDate())
  if (beforeAnniversary) years -= 1
  return years
}
