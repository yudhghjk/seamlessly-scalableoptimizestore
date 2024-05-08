const stoogeSort = (arr, i = 0, j = arr.length - 1) => {
  if (arr[i] > arr[j]) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  if (i + 1 >= j) {
    return arr;
  }
  const t = Math.floor((j - i + 1) / 3);
  stoogeSort(arr, i, j - t);
  stoogeSort(arr, i + t, j);
  stoogeSort(arr, i, j - t);
  return arr;
};
