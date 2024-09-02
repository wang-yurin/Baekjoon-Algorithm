// 1 열의 개수와 2 행의 개수가 같아야함
function solution(arr1, arr2) {
    const row1 = arr1.length
    const row2 = arr2.length
    const col1 = arr1[0].length
    const col2 = arr2[0].length

    let answer = []
    for (let i = 0; i < row1; i++) {
        answer.push(new Array(col2).fill(0))
    }
    
    for (let i = 0; i < row1; i++) {
        for (let j = 0; j < col2; j++) {
            for (let k = 0; k < col1; k++) {
                answer[i][j] += arr1[i][k] * arr2[k][j]
            }
        }
    }
    return answer
}