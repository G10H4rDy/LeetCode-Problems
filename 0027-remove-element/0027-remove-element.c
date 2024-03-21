int removeElement(int* nums, int numsSize, int val) {
    if (numsSize == 0) return 0;

    // int *newArr[numsSize];
    int k = 0;
    for (int i = 0; i < numsSize; i++)
    {
        if(nums[i] == val)
        {
            continue;
        }else{
            nums[k] = nums[i];
            k++;
        }
    }

    // for (int i = 0; i < k ; i++)
    // {

    //     nums[i] = newArr[i];
    // }

    // Add 1 to last index to return sizeof array
    return k ;
}