int search(int* nums, int numsSize, int target) {
    int low = 0;
    int high = numsSize - 1;
    int mid = -1;

    while (low <= high){
        mid  = (low + high) / 2;
        if (nums[mid] == target) return mid;
        else if (nums[mid] > target) high = mid - 1;
        else low = mid + 1;
    }

    return -1;
}

