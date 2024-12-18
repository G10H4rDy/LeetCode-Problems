class Solution {
    public int strStr(String haystack, String needle) {
        
        if (needle.length() > haystack.length()) return -1;
        
        for (int i = 0; i < haystack.length(); i++){
            int needleIndex = 0;
            int iNow = i;
            while(iNow < haystack.length() && haystack.charAt(iNow) == needle.charAt(needleIndex)){
                if(needleIndex == needle.length() - 1){
                    return ( iNow - needle.length() + 1);
                }
                iNow++;
                needleIndex++;
            }
        }

        return -1;
    }
}