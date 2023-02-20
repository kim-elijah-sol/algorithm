/**
 * 설명
 * You probably know the "like" system from Facebook and other pages. 
 * People can "like" blog posts, pictures or other items. 
 * We want to create the text that should be displayed next to such an item.

 * 결과 값
 * []                                -->  "no one likes this"
 * ["Peter"]                         -->  "Peter likes this"
 * ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
 * ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
 * ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 */

function likes(names) {
  // 사람 수가 1명 미만인 경우에는 like의 3인칭단수 표현으로 likes를 사용
  const prefix = names.length <= 1 ? "likes this" : "like this";

  // 사람 이름 영역의 텍스트
  let surfix = "no one";

  // 사람 수가 1명 이상인 경우
  if (names.length >= 1) {
    // 사람 수가 2명 이하인 경우 and로 묶어주기
    if (names.length <= 2) surfix = names.join(" and ");
    // 사람 수가 3명 이상인 경우
    else {
      // 첫번째 사람과, 두번째 사람의 이름은 무조건 그대로 나오고
      // 뒷 사람들은 남은 인원에 따라 달라지기 때문에 비구조화 할당
      const [f, s, ...rest] = names;

      const restName = rest.length === 1 ? rest[0] : `${rest.length} others`;

      surfix = `${f}, ${s} and ${restName}`;
    }
  }

  return `${surfix} ${prefix}`;
}
