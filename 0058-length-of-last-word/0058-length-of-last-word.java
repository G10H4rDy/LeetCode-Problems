class Solution {
    public int lengthOfLastWord(String s) {
        int lastChar = s.length() - 1;

        // Cut trailing whitespaces
        while(s.charAt(lastChar) == ' '){
            lastChar--;
        }

        // Measure the word
        int length = 0;
        while(lastChar >= 0){
            if (s.charAt(lastChar) != ' '){
            length++;
            lastChar--;
            }else{
                break;
            }
        }

        return length;

        
    }
}