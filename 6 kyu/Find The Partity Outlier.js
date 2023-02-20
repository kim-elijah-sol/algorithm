/**
 * 설명
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
 * The array is either entirely comprised of odd integers or entirely comprised of even integers 
 * except for a single integer N. 
 * Write a method that takes the array as an argument and returns this "outlier" N.

 * 결과 값
 * [2, 4, 0, 100, 4, 11, 2602, 36]
 * Should return: 11 (the only odd number)

 * [160, 3, 1719, 19, 11, 13, -21]
 * Should return: 160 (the only even number)
 */

function findOutlier(ints) {
  const odds = [];
  const evens = [];

  for (const int of ints) {
    // 홀/짝 판별 후 배열에 추가
    if (int % 2 !== 0) odds.push(int);
    else evens.push(int);

    // 두 배열 모두 값이 있고,
    // 배열의 길이가 다르다면 한 곳에 데이터가 치우치는 중으로 간주
    if (odds.length && evens.length && odds.length !== evens.length) {
      return odds.length === 1 ? odds[0] : evens[0];
    }
  }
}
