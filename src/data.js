import pages from "../public/pages.json";
const pageKey = "pages";

let pageJson = localStorage.getItem(pageKey);
let pagesStore = JSON.parse(pageJson) ? JSON.parse(pageJson) : pages;

function save() {
  localStorage.setItem(pageKey, JSON.stringify(pagesStore));
}

export default {
  addPage(page) {
    pagesStore.push(page);
    save();
  },
  getAllPages() {
    return pagesStore;
  },
  getSinglePage(index) {
    return pagesStore[index];
  },
  editPage(index, page) {
    pagesStore[index] = page;
    save();
  },
  removePage(index) {
    pagesStore.splice(index, 1);
    save();
  },
  geeksForGeeksProblems: [
    {
      problemTitle: "Find Array Leaders",
      solved: true,
      code: `const findArrayLeaders = (a, n) => {
    const arrayLeaders = [];
    a.forEach((number) => {
      while (
        number > arrayLeaders[arrayLeaders.length - 1] &&
        arrayLeaders.length > 0
      ) {
        arrayLeaders.pop();
      }
      arrayLeaders.push(number);
    });
    return arrayLeaders;
  };
  
  console.log(findArrayLeaders([16, 17, 4, 3, 5, 2], 5));`,
    },
    {
      problemTitle: "Equilibrium Point",
      solved: true,
      code: `const equilibriumPoint = (a, n) => {
        let answer = -1;
        let right = a.reduce((prev, cur) => prev + cur);
        let left = 0;
      
        for (let i = 0; i < n; i++) {
          right = right - a[i];
          if (i !== 0) {
            left = left + a[i - 1];
          }
          if (right === left) {
            answer = i + 1;
            i = n + 1;
          }
        }
      
        return answer;
      };
      
      console.log(equilibriumPoint([1, 3, 5, 2, 2], 5));`,
    },
    {
      problemTitle: "Find Extra",
      solved: true,
      code: `//one array has another number in it

      findExtra = (a, b, n) => {
        //code here
        let extraNumberIndex = -1;
        for (let i = 0; i < n; i++) {
          if (i - 1 !== n && a[i] !== b[i]) {
            extraNumberIndex = i;
            i = n + 1;
          }
        }
      
        return extraNumberIndex !== -1 ? extraNumberIndex : n;
      };
      
      console.log(findExtra([2, 4, 6, 8, 10], [2, 4, 6, 8, 9, 10], 5));`,
    },
    {
      problemTitle: "First and Last Occurance",
      solved: true,
      code: `indexes = (v, x) => {
        // code here
        let returnArr = [null, null];
      
        for (let i = 0; i < v.length; i++) {
          if (v[i] === x) {
            if (returnArr[0] === null) {
              returnArr = [i, i];
            } else {
              returnArr[1] = i;
            }
          }
        }
      
        return [
          returnArr[0] !== null ? returnArr[0] : -1,
          returnArr[1] !== null ? returnArr[1] : -1,
        ];
      };
      
      console.log(indexes([0, 1, 4, 6, 3, 1, 4], 1));`,
    },
    {
      problemTitle: "Items Duplicated in Array",
      solved: true,
      code: `const itemsDuplicatedInArray = (a, n) => {
        const numSet = new Set([]);
        let numSetLen = 0;
        const duplicatedItems = new Set([]);
      
        a.forEach((item) => {
          numSet.add(item);
          if (numSetLen === numSet.size) {
            duplicatedItems.add(item);
          }
          numSetLen = numSet.size;
        });
      
        return Array.from(duplicatedItems).sort((a, b) => a - b);
      };
      
      console.log(itemsDuplicatedInArray([0, 3, 1, 2, 4, 4, 3], 5));`,
    },
    {
      problemTitle: "Missing Number in Array",
      solved: true,
      code: `//User function Template for javascript

      missingNumber = (array, n) => {
        //code here
        let returnValue = 0;
        let arrTotal = 0;
      
        for (let i = 1; i < n; i++) {
          arrTotal = arrTotal + array[i - 1];
          returnValue = returnValue + i;
          if (i === n - 1) {
            returnValue = returnValue + i + 1;
          }
        }
      
        return returnValue - arrTotal;
      };
      
      console.log(missingNumber([1, 2, 3, 4, 6], 6));`,
    },
    {
      problemTitle: "Reorder K Element",
      solved: true,
      code: `const reorderByK = (q, k) => {
        let returnArr = [];
        for (let i = 0; i < q.length; i++) {
          if (i < k) {
            returnArr.unshift(q[i]);
          } else {
            returnArr.push(q[i]);
          }
        }
        return returnArr;
      };
      
      console.log(reorderByK([1, 2, 3, 4, 5], 3));`,
    },
    {
      problemTitle: "Sort K Array",
      solved: true,
      code: `const sortKArr = (arr, k) => {
        let sortArr = [...arr].sort((a, b) => a - b);
        let returnValue = "Yes";
        arr.forEach((item, index) => {
          if (Math.abs(index - sortArr.indexOf(item)) > k) {
            console.log(index, item);
            returnValue = "No";
            sortArr = [];
          }
        });
      
        return returnValue;
      };
      
      const sortKArr1 = (arr, k) => {
        let answer = "Yes";
        let arrays = [];
        let sortedArr = [...arr].sort((a, b) => a - b);
      
        arr.forEach((item, index) => {
          let tempArr = [...arr];
      
          if (index + k < arr.length) {
            arrays.push(
              new Set(tempArr.slice(index - k < 0 ? 0 : index - k, index + k))
            );
          } else {
            arrays.push(
              new Set(tempArr.slice(index - k < 0 ? 0 : index - k, arr.length))
            );
          }
        });
      
        sortedArr.forEach((item, index) => {
          if (!arrays[index].has(item)) {
            answer = "No";
          }
        });
      
        console.log(arrays);
        return answer;
      };
      
      const sortKArr2 = (arr, k) => {
        let sortArr = [...arr].sort((a, b) => a - b);
        let returnValue = "Yes";
      
        arr.forEach((item, index) => {
          let kAdjust = k - 1;
          let tempSet = null;
          let tempArr = [...sortArr];
          if (index + k < arr.length) {
            tempSet = new Set(
              tempArr.slice(index - k < 0 ? 0 : index - kAdjust, index + kAdjust)
            );
          } else {
            tempSet = new Set(
              tempArr.slice(index - k < 0 ? 0 : index - kAdjust, arr.length)
            );
          }
      
          if (!tempSet.has(item)) {
            console.log("no");
            returnValue = "No";
          }
        });
      
        return returnValue;
      };
      
      const sortKArr3 = (arr, k) => {
        let sortArr = [...arr].sort((a, b) => a - b);
        let returnValue = "Yes";
        let kAdjust = k + 1;
      
        arr.forEach((item, index) => {
          let tempArr = null;
          if (index + kAdjust < arr.length) {
            tempArr = sortArr.slice(
              index - kAdjust < 0 ? 0 : index - kAdjust,
              index + kAdjust
            );
          } else {
            tempArr = sortArr.slice(
              index - kAdjust < 0 ? 0 : index - kAdjust,
              arr.length
            );
          }
      
          if (!tempArr.includes(item)) {
            returnValue = "No";
            return;
          }
        });
      
        return returnValue;
      };
      // 3, 2, 1, 5, 6, 4
      // 1, 2, 3, 4, 5, 6
      console.log(sortKArr3([3, 2, 1, 5, 6, 4], 2));`,
    },
    {
      problemTitle: "Transition Point",
      solved: true,
      code: `// i dont know why this is even a GFG problem
      // this finds the first instance of 1 in an array
      
      transitionPoint = (arr, n) => {
        let transitionPoint = -1;
        for (let i = 0; i < n; i++) {
          if (arr[i] === 1) {
            transitionPoint = i;
            i = i + n;
          }
        }
      
        return transitionPoint;
      };
      
      console.log(transitionPoint([0, 0, 0, 1, 0], 4));`,
    },
    {
      problemTitle: "Two Repeated",
      solved: true,
      code: `twoRepeated = (arr, N) => {
        let numSet = new Set([]);
        let returnArr = [];
      
        for (let i = 0; i < arr.length; i++) {
          if (!numSet.has(arr[i])) {
            numSet.add(arr[i]);
          } else {
            returnArr.push(arr[i]);
          }
          if (returnArr.length === 2) {
            i = i + N;
          }
        }
      
        return returnArr;
      };
      
      console.log(
        twoRepeated(
          [
            40, 59, 24, 7, 20, 22, 41, 57, 45, 50, 9, 55, 27, 62, 1, 56, 49, 36, 42,
            14, 6, 4, 58, 21, 12, 31, 34, 43, 33, 37, 60, 3, 11, 35, 38, 26, 18, 29,
            46, 44, 53, 47, 8, 28, 10, 5, 63, 17, 19, 23, 52, 51, 41, 61, 2, 32, 36,
            13, 48, 16, 25, 39, 15, 30, 54,
          ],
          63
        )
      );`,
    },
  ],
};
