# 📚 Sliding Window Problems - LeetCode Practice

This repository contains a collection of **Sliding Window** problems from **LeetCode**. Sliding window techniques are crucial for solving many problems involving subarrays, substrings, or continuous data segments. There are two types of sliding windows in algorithmic problems: **static** (fixed window size) and **dynamic** (variable window size).

---

## 📑 Table of Contents
1. [Problem Classification](#-problem-classification)
   - [Static Sliding Window](#static-sliding-window)
   - [Dynamic Sliding Window](#dynamic-sliding-window)
2. [Problem List](#-problem-list)
   - [Easy Level](#easy-level)
     - [Static Sliding Window](#static-sliding-window-easy)
     - [Dynamic Sliding Window](#dynamic-sliding-window-easy)
   - [Moderate Level](#moderate-level)
     - [Static Sliding Window](#static-sliding-window-moderate)
     - [Dynamic Sliding Window](#dynamic-sliding-window-moderate)
   - [Hard Level](#hard-level)
     - [Static Sliding Window](#static-sliding-window-hard)
     - [Dynamic Sliding Window](#dynamic-sliding-window-hard)
3. [How to Use](#-how-to-use)
4. [Contributing](#-contributing)
5. [License](#-license)

---

## 📖 Problem Classification

### 1. Static Sliding Window
A **static sliding window** has a **fixed size** that slides across the data. It’s used to solve problems where a subarray or substring of a specific size is involved.

### 2. Dynamic Sliding Window
A **dynamic sliding window** has a **variable size** that adjusts based on a given condition. The window expands or shrinks based on specific constraints, such as maintaining at most `k` distinct characters or satisfying a subarray sum condition.

---

## 🔍 Problem List

### 🟢 Easy Level

#### Static Sliding Window (Easy)
1. **[Maximum Sum of a Subarray of Size K](https://leetcode.com/problems/maximum-average-subarray-i/)**  
   Find the maximum sum of a contiguous subarray of size `k`.

2. **[Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)**  
   Find all start indices of anagrams of a given string `p` in another string `s`.

#### Dynamic Sliding Window (Easy)
1. **[Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)**  
   Find the minimal length of a contiguous subarray where the sum is at least `target`.

2. **[Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)**  
   Find the length of the longest substring without repeating characters.

---

### 🟡 Moderate Level

#### Static Sliding Window (Moderate)
1. **[Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)**  
   Find the maximum value in each sliding window of size `k`.

2. **[Longest Subarray of 1’s After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)**  
   Find the length of the longest subarray of 1s after deleting one element.

#### Dynamic Sliding Window (Moderate)
1. **[Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)**  
   Find the largest number of fruits you can collect in two baskets, where each basket can only hold one type of fruit.

2. **[Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)**  
   Find the number of subarrays that contain exactly `k` different integers.

---

### 🔴 Hard Level

#### Static Sliding Window (Hard)
1. **[Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)**  
   Find all starting indices of substring(s) that are a concatenation of each word from a list exactly once.

2. **[Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)**  
   Given strings `s` and `t`, find the minimum window in `s` that contains all the characters of `t`.

#### Dynamic Sliding Window (Hard)
1. **[Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)**  
   Find the length of the longest substring that contains at most `k` distinct characters.

2. **[Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)**  
   Find the median of elements inside the sliding window of size `k` as it moves from left to right.
