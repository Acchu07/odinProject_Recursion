function merge(arrLeft, arrRight)
{
    const sortedArray = [];
    let counterLeft = 0;
    let counterRight = 0;
    while ((arrLeft.length !== 0) && (arrRight.length !== 0))
    {
        if (arrLeft[0] > arrRight[0])
        {
            sortedArray.push(arrRight[0])
            arrRight.shift();
        }
        else
        {
            sortedArray.push(arrLeft[0])
            arrLeft.shift();
        }
    }
    while (arrLeft.length !== 0)
    {
        sortedArray.push(arrLeft[0])
        arrLeft.shift();
    }
    while (arrRight.length !== 0)
    {
        sortedArray.push(arrRight[0])
        arrRight.shift();
    }
    return sortedArray;

}

function mergeSort(arrayToSort)
{
    if (arrayToSort.length === 1)
    {
        return arrayToSort;
    }
    const splitValue = Math.round(arrayToSort.length / 2);
    let leftArrayHalf = arrayToSort.slice(0, splitValue)
    let rightArrayHalf = arrayToSort.slice(splitValue, arrayToSort.length);
    leftArrayHalf = mergeSort(leftArrayHalf)
    rightArrayHalf = mergeSort(rightArrayHalf)
    const sortedArray = merge(leftArrayHalf, rightArrayHalf)
    return sortedArray;
}



// const arrayToSort2 = [3, 2, 5]
// const arrayToSort2 = [2,7,5,1,6,9,8]
const arrayToSort2 = [2,1];
console.log(mergeSort(arrayToSort2));