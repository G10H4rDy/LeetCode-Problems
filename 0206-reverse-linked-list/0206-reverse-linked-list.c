/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* reverseList(struct ListNode* head) {
    
    struct ListNode* reversedNode = NULL;

    struct ListNode* ptr = head;
    while(ptr != NULL){
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = ptr->val;
        n->next = reversedNode;
        reversedNode = n;
        ptr = ptr->next;
    }

    return reversedNode;
}