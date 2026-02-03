# Task 1 – Power-of-Two Max Heap
This task implements a **Power-of-Two Max Heap**, a generalized heap data structure where each parent node has \(2^k\) children instead of the traditional binary heap. The value of `k` is configurable at runtime, allowing the heap to scale from binary heaps to wide-branching heaps.
This implementation was developed as part of the **Walmart USA Advanced Software Engineering Virtual Experience Program (Forage)**.
---
## Problem Statement
Design and implement a heap data structure that satisfies the following requirements:
- Maintains the **max-heap property**
- Each parent node has **\(2^k\) children**
- The value of `k` is passed during heap initialization
- Supports efficient `insert` and `popMax` operations
- Implemented with performance and scalability in mind
---
## Implementation Overview
- The heap is implemented using an **array-based structure** for efficiency.
- Parent–child relationships are calculated using index arithmetic.
- The heap dynamically resizes to accommodate new elements.
- Heap operations ensure minimal memory usage and optimal time complexity.
---
## Features
- Configurable branching factor (`2^k`)
- Efficient insertion with upward heapification
- Efficient removal of maximum element with downward heapification
- Maintains heap property at all times
- Designed with clean, modular, and readable code
---
## Files Included
- `PowerOfTwoMaxHeap.java` / `PowerOfTwoMaxHeap.js`  
  Implementation of the Power-of-Two Max Heap
- `README.md`  
  Documentation for Task 1
---
## Concepts Applied
- Heap Data Structures
- Array-based indexing
- Time and space complexity optimization
- Object-Oriented Programming
- Algorithm design and problem solving
---
## Conclusion
This task demonstrates the ability to design and implement a **custom data structure**, optimize heap operations, and write clean, scalable code—skills essential for backend and systems engineering roles.
---
