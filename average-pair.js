// add whatever parameters you deem necessary
function averagePair(arr, avg) {
    if (arr.length < 2) return false;

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let result = (arr[left] + arr[right]) / 2;
        if (result === avg) {
            return true;
        } else if (result < avg) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}
