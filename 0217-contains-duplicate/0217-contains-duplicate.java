import java.util.HashMap;
import java.util.Map;


class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Create a Map using HashMap
        Map<Integer, Boolean> map = new HashMap<>();
      
       //here, we can write all other required operations
        for (int i = 0; i < nums.length; i++){
            if (map.get(nums[i]) == null){
                map.put(nums[i], true);
            }else return true;
        }

        return false;
    }
}