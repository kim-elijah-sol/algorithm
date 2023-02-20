/**
 * 설명
 * Given an array of integers, find the one that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.

 * 결과 값
 * [7] should return 7, because it occurs 1 time (which is odd).
 * [0] should return 0, because it occurs 1 time (which is odd).
 * [1,1,2] should return 2, because it occurs 1 time (which is odd).
 * [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
 * [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 */

function findOdd(A) {
  return (
    A
      // 값과 등장 수 매핑
      .reduce((acc, current) => {
        if (acc.some((item) => item.value === current)) {
          return acc.map((item) =>
            item.value === current
              ? {
                  ...item,
                  count: (item.count += 1),
                }
              : item
          );
        }

        return acc.concat({
          value: current,
          count: 1,
        });
      }, [])
      // 홀수 번 등장한 데이터 찾기
      .find((item) => item.count % 2 !== 0).value
  );
}
