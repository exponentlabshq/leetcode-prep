# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: Optional[ListNode]
        :type l2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        # Initialize pointers and carry
        current1, current2 = l1, l2
        carry = 0
        dummy = ListNode(0)
        current = dummy
        
        # Traverse both lists
        while current1 or current2 or carry:
            # Extract values (0 if node is None)
            val1 = current1.val if current1 else 0
            val2 = current2.val if current2 else 0
            
            # Calculate sum and carry
            total = val1 + val2 + carry
            digit = total % 10
            carry = total // 10
            
            # Create new node
            current.next = ListNode(digit)
            current = current.next
            
            # Move pointers
            current1 = current1.next if current1 else None
            current2 = current2.next if current2 else None
        
        return dummy.next
