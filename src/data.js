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
      description: "N is creater than elements to it's right",
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
      description: "Items added on N's right and left are equal",
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
      description: "One array has another number in it",
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
      description: "Self-explanatory",
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
      description: "Return duplicated items",
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
      description: "Self-explanatory",
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
      description: "Reverse at K Element",
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
      description: "",
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
      description: "this finds the first instance of N in an array",
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
      description: "",
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
    {
      problemTitle: "Pyramid Assesment",
      solved: true,
      description: "organize file in pyramid and read right edge",
      code: `textFile = \`
      296 land
      
      3 sun
      
      216 too
      
      197 huge
      
      237 dont
      
      249 such
      
      81 noun
      
      113 student
      
      30 brown
      
      111 complete
      
      157 play
      
      165 cook
      
      188 yard
      
      195 clock
      
      105 would
      
      116 plain
      
      293 excite
      
      137 fire
      
      178 wish
      
      211 cool
      
      87 child
      
      275 past
      
      261 colony
      
      186 oil
      
      292 dog
      
      125 back
      
      289 money
      
      103 kind
      
      19 open
      
      241 finger
      
      100 touch
      
      248 are
      
      29 dad
      
      236 am
      
      74 modern
      
      200 meant
      
      15 ocean
      
      229 pitch
      
      151 suit
      
      46 town
      
      59 east
      
      194 over
      
      108 group
      
      65 good
      
      114 kind
      
      170 down
      
      89 band
      
      214 especially
      
      164 organ
      
      12 of
      
      85 fire
      
      73 out
      
      205 area
      
      167 touch
      
      123 happen
      
      76 sat
      
      120 electric
      
      119 wrote
      
      66 buy
      
      8 lot
      
      117 stop
      
      133 corn
      
      70 where
      
      274 check
      
      75 live
      
      118 best
      
      95 hold
      
      9 cause
      
      259 grand
      
      223 present
      
      4 indicate
      
      150 slave
      
      281 we
      
      23 like
      
      110 visit
      
      210 state
      
      20 morning
      
      98 true
      
      72 are
      
      189 ball
      
      135 history
      
      155 seat
      
      6 rain
      
      7 less
      
      146 glass
      
      154 tone
      
      226 song
      
      202 fair
      
      93 element
      
      80 speed
      
      190 produce
      
      71 quotient
      
      162 sand
      
      143 begin
      
      298 moment
      
      122 offer
      
      41 probable
      
      68 all
      
      255 necessary
      
      153 post
      
      56 cent
      
      288 happen
      
      250 speech
      
      243 object
      
      234 silver
      
      25 third
      
      299 crease
      
      145 wait
      
      176 triangle
      
      27 idea
      
      233 clothe
      
      139 young
      
      62 discuss
      
      147 field
      
      212 company
      
      96 capital
      
      253 compare
      
      60 chart
      
      300 possible
      
      187 written
      
      283 remember
      
      168 mile
      
      69 cold
      
      152 lady
      
      290 felt
      
      265 against
      
      42 skin
      
      183 prepare
      
      268 he
      
      271 card
      
      130 organ
      
      84 object
      
      231 our
      
      22 major
      
      86 discuss
      
      13 system
      
      24 hole
      
      287 above
      
      184 they
      
      295 produce
      
      256 straight
      
      57 level
      
      161 though
      
      97 modern
      
      90 dry
      
      263 bought
      
      126 milk
      
      280 make
      
      94 show
      
      242 middle
      
      92 center
      
      33 blood
      
      203 speak
      
      107 prove
      
      40 select
      
      83 power
      
      35 come
      
      156 brown
      
      5 experiment
      
      39 strong
      
      262 hurry
      
      276 touch
      
      279 reach
      
      166 case
      
      64 beat
      
      124 over
      
      144 dry
      
      47 hill
      
      142 company
      
      1 opposite
      
      159 work
      
      34 field
      
      284 felt
      
      193 prepare
      
      49 now
      
      50 his
      
      136 stay
      
      232 toward
      
      221 observe
      
      218 time
      
      102 stop
      
      91 possible
      
      78 card
      
      224 prepare
      
      61 current
      
      238 compare
      
      67 neighbor
      
      134 thus
      
      131 include
      
      206 copy
      
      182 bit
      
      227 stead
      
      138 does
      
      285 general
      
      48 solve
      
      112 glad
      
      16 duck
      
      63 offer
      
      129 happen
      
      267 ball
      
      37 bread
      
      225 like
      
      2 machine
      
      257 come
      
      160 any
      
      291 band
      
      45 it
      
      32 section
      
      177 close
      
      277 heavy
      
      254 produce
      
      106 got
      
      149 possible
      
      82 insect
      
      207 way
      
      230 before
      
      54 men
      
      264 bird
      
      181 ease
      
      174 trade
      
      28 winter
      
      246 am
      
      148 repeat
      
      31 first
      
      21 to
      
      11 each
      
      140 guide
      
      172 column
      
      52 single
      
      213 remember
      
      36 wild
      
      272 major
      
      99 coast
      
      245 class
      
      217 done
      
      252 jump
      
      88 sister
      
      173 feel
      
      127 check
      
      199 fire
      
      278 nine
      
      185 indicate
      
      44 parent
      
      273 whole
      
      77 her
      
      101 the
      
      294 temperature
      
      258 design
      
      175 big
      
      58 skill
      
      235 friend
      
      196 hit
      
      169 wait
      
      240 instant
      
      14 blow
      
      17 about
      
      260 chick
      
      204 answer
      
      270 man
      
      26 material
      
      43 current
      
      10 think
      
      198 print
      
      163 nor
      
      180 better
      
      282 example
      
      220 people
      
      121 drink
      
      222 gun
      
      215 together
      
      244 cost
      
      51 require
      
      179 or
      
      128 people
      
      247 planet
      
      219 ease
      
      55 ready
      
      239 enough
      
      251 sugar
      
      109 deal
      
      79 with
      
      38 us
      
      228 share
      
      286 office
      
      141 protect
      
      269 low
      
      104 thus
      
      18 farm
      
      209 oxygen
      
      266 fire
      
      132 force
      
      297 select
      
      171 paragraph
      
      191 always
      
      115 poem
      
      53 chick
      
      158 planet
      
      208 fact
      
      192 moment
      
      201 term\`;
      
      const decode = (text) => {
        // I removed the whitespace from the text since I coppied and pasted it. I used a split and filter to do this
        let returnString = "";
        const textNoSpaces = text
          .split("")
          .filter((item) => item !== "\n" && item !== " ");
        const numbers = [];
        const codes = [];
      
        let temporaryString = null;
        let temporaryNumber = null;
      
        // mapping through and adding each stirng or code into the arrays I made for them
        textNoSpaces.forEach((item, index) => {
          //if its a number we check if a string exists and push it / same goes for numbers
          if (parseInt(item) || item === "0") {
            if (temporaryString) {
              codes.push(temporaryString);
              temporaryString = null;
            }
            if (temporaryNumber) {
              temporaryNumber += item;
            } else {
              temporaryNumber = item;
            }
          } else {
            if (temporaryNumber) {
              numbers.push(parseInt(temporaryNumber));
              temporaryNumber = null;
            }
            if (temporaryString) {
              temporaryString += item;
            } else {
              temporaryString = item;
            }
          }
          // had to add this to prevent an unbalanced list
          if (index === textNoSpaces.length - 1) {
            if (temporaryNumber) numbers.push(parseInt(temporaryNumber));
            if (temporaryString) codes.push(temporaryString);
          }
        });
      
        /*
        I noticed that a pyramid on the right edge you can calculate and you dont need to loop the entire thing
        this is a nice work around since I am adding complexity by useing indexOf inside of the loop,
        in hindsight I could probably have done this a little cleaner by sorting the arrays first 
        */
      
        let multiplier = 1;
        for (let i = 0; i < codes.length; i += multiplier) {
          const index = numbers.indexOf(i + 1);
          multiplier = multiplier + 1;
          returnString += \` \${codes[index]}\`;
        }
      
        return returnString;
      };
      
      console.log(decode(textFile));`,
    },
    {
      problemTitle: "Is BST",
      solved: true,
      description: "Return true if BST",
      code: `/*
      I typically dont really work with B trees so this is going to be a bit weird for me. 
      I think there is a "right way" to do this that I could just look up the concept for and get a head
      start, but i dont really want to do that. If yo are wondering why this is an nightmare to look at
      that is probably why.
      
      i wrote out some of the code on a sheet of paper. My idea is this
      
      push unexplored nodes into an array then itterate through them
      whilst itterating, add an attribute of visited as well as an attribute of parrent data
      this visited will prevent revisits and the parent data will contain an object that maybe has something like
      "must be greater than x" "must be less than Y" or something like that.
      if it's not, then we will return -1 and if we get through all of them we will return 1 (i think ill have to look 
        at the req again later)
      */
      
      const isBST = (root) => {
        let location = root;
        location.parentData = { max: null, min: null };
        let nodes = [root];
        let isBST = true;
      
        while (nodes.length > 0) {
          location = nodes[nodes.length - 1];
          location.visited = true;
      
          // checking to see if BST
          if (location.parentData.max) {
            if (location.parentData.max <= location.data) {
              isBST = false;
              nodes = [];
              console.log(location);
            }
          }
      
          // checking to see if BST
          if (location.parentData.min) {
            if (location.parentData.min >= location.data) {
              isBST = false;
              nodes = [];
              console.log(location);
            }
          }
      
          // Adding the left node and setting the location data
          if (location.left && !location.left.visited) {
            if (location.parentData.left) {
              location.left.parentData = location.parentData;
            } else {
              location.left.parentData = {
                min: location.parentData.min,
                max: location.data,
              };
            }
            nodes.unshift(location.left);
          }
      
          // Adding the right node and setting the location data
          if (location.right && !location.right.visited) {
            if (location.parentData.right) {
              location.right.parentData = location.parentData;
            } else {
              location.right.parentData = {
                min: location.data,
                max: location.parentData.max,
              };
            }
            nodes.unshift(location.right);
          }
      
          nodes.pop();
        }
      
        return isBST;
      };
      
      const data = {
        data: 20,
        left: {
          data: 10,
          left: { data: 1, left: null, right: null },
          right: { data: 15, left: null, right: null },
        },
        right: {
          data: 30,
          left: { data: 30, left: null, right: null },
          right: { data: 31, left: null, right: null },
        },
      };
      
      const data1 = {
        data: 0,
        left: {
          data: 6,
          left: {
            data: 4,
            left: { data: 2, left: null, right: null },
            right: { data: 5, left: null, right: null },
          },
          right: {
            data: 9,
            left: null,
            right: {
              data: 7,
              left: null,
              right: { data: 3, left: null, right: null },
            },
          },
        },
        right: {
          data: 0,
          left: { data: 0, left: null, right: null },
          right: { data: 0, left: null, right: { data: 8, left: null, right: null } },
        },
      };
      
      const data3 = {
        data: 10,
        left: {
          data: 5,
          left: { data: 4, left: null, right: null },
          right: {
            data: 12,
            left: null,
            right: { data: 20, left: null, right: null },
          },
        },
        right: { data: 15, left: null, right: null },
      };
      
      const data4 = {
        data: 0,
        left: {
          data: 6,
          left: {
            data: 4,
            left: { data: 2, left: null, right: null },
            right: { data: 5, left: null, right: null },
          },
          right: {
            data: 9,
            left: { data: 7, left: null, right: null },
            right: { data: 3, left: null, right: null },
          },
        },
        right: { data: 8, left: null, right: null },
      };
      
      // 0 6 N 4 9 2 5 7 N N 3 N N N 8 N N N N
      
      const isBSTGFGSubmission = (root) => {
        let location = root;
        location.parentData = { max: null, min: null };
        let nodes = [root];
        let isBST = true;
      
        while (nodes.length > 0) {
          location = nodes[nodes.length - 1];
          location.visited = true;
      
          if (location.parentData.max) {
            if (location.parentData.max <= location.data) {
              isBST = false;
              nodes = [];
            }
          }
      
          if (location.parentData.min) {
            if (location.parentData.min >= location.data) {
              isBST = false;
              nodes = [];
            }
          }
      
          if (location.left && !location.left.visited) {
            if (location.parentData.left) {
              location.left.parentData = location.parentData;
            } else {
              location.left.parentData = {
                min: location.parentData.min,
                max: location.data,
              };
            }
            nodes.unshift(location.left);
          }
      
          if (location.right && !location.right.visited) {
            if (location.parentData.right) {
              location.right.parentData = location.parentData;
            } else {
              location.right.parentData = {
                min: location.data,
                max: location.parentData.max,
              };
            }
            nodes.unshift(location.right);
          }
      
          nodes.pop();
        }
      
        return isBST;
      };
      
      console.log(isBSTGFGSubmission(data4));`,
    },
    {
      problemTitle: "Max Occured Int",
      solved: true,
      description: "Description in code (too  long)",
      code: `/*
      Given n integer ranges, the task is to find the maximum occurring integer in these ranges. If more than one such integer exists, find the smallest one. The ranges are given as two arrays L[] and R[].  L[i] consists of starting point of range and R[i] consists of corresponding end point of the range.
      
      For example consider the following ranges.
      L[] = {2, 1, 3}, R[] = {5, 3, 9)
      Ranges represented by above arrays are.
      [2, 5] = {2, 3, 4, 5}
      [1, 3] = {1, 2, 3}
      [3, 9] = {3, 4, 5, 6, 7, 8, 9}
      The maximum occurred integer in these ranges is 3.
      
      my initial thought was to create a  list of all ranges [2, 5] [1, 3] [3, 9]
      then iterate through numbers 1 -> 9 (highest number) and if they fit within range
      number > listOfRanges[0] && number < listOfRanges[1] that number is incremented on a 
      object that has a key of the number and a value of times counted
      the highest count with the lowest number would be returned
      
      this is not a good way of solving it, though it would work it would make too many loops
      and probably fail on the complexity check of geeks for geeks
      
      i think the idea will work but the execution is lacking
      
      i'm tring to avoid simply iterating through the lists and counting since youd have to loop
      then loop within the loop, ill try to do that first to get an idea though
      
      i actually just noticed they provice the maxx right away so im going to change my game plan 
      to match the first game plan again since that step is already covered
      
      */
      
      const maximumOccuredV1 = (l, r, n, maxx) => {
        let answer = -1;
        let answerCount = 0;
      
        for (let count = 0; count < maxx; count++) {
          let hitsPerCount = 0;
      
          for (let index = 0; index < n; index++) {
            if (l[index] <= count && r[index] >= count) {
              hitsPerCount += hitsPerCount + 1;
            }
          }
          // this is kinda nice because now i dont have to make sure the number is that lowest of the most occured
          if (hitsPerCount > answerCount) {
            answer = count;
            answerCount = hitsPerCount;
          }
        }
      
        return answer;
      };
      
      /* 
      i think this would have passed all the test cases but as i figured it does take a little too long on some of the test cases
      
      what i could do is iterate through the left and right list and on each range create a list of numbers 
      
      {1, 5} -> [1, 2, 3, 4, 5]
      {1, 2} -> [1, 2]
      
      in order to make this step avoid looping a ton of times i figure at the start of the function i can create a number array from 0 -> max
      after creating that i can simply slice that array at each respective index 
      
      numArray = [0, 1, 2, 3, 4, 5]
      
      {1, 5} = numArray[1, 5]
      
      push those numbers to an array 
      
      [1, 2, 3, 4, 5, 1, 2]
      
      iterate through that list and go from there, i'm just not sure how much better it really is, i may as well make it though
      
      ill figure out how to find the most occured after i type this out because im betting ill find something better along the way 
      
      */
      
      const maximumOccuredV2 = (l, r, n, maxx) => {
        let countingArray = Array.from({ length: maxx }, (_, index) => 1 + index);
        const allNumbersInRanges = [];
        const numbersByCount = {};
        let mostOccured = -1;
        let mostOccuredAmount = 0;
      
        for (let i = 0; i < n; i++) {
          let subArray = countingArray.slice(l[i] - 1, r[i] + 1);
          allNumbersInRanges.push(...subArray);
        }
      
        for (let i = 0; i < allNumbersInRanges.length; i++) {
          if (!numbersByCount[allNumbersInRanges[i]]) {
            numbersByCount[allNumbersInRanges[i]] = 1;
          } else {
            numbersByCount[allNumbersInRanges[i]] =
              numbersByCount[allNumbersInRanges[i]] + 1;
          }
        }
      
        Object.keys(numbersByCount).map((number) => {
          if (numbersByCount[number] > mostOccured) {
            mostOccured = number;
            mostOccuredAmount = numbersByCount[number];
          }
        });
      
        return mostOccured;
      };
      
      /* 
      ok so v2 is still pretty complicated
      im just going to copy v2 and try to cut down on the complexity i think it has some promise still
      
      i think that i could probably make the counting array just 0 and then increment that counting array baised on the position 
      */
      
      const maximumOccuredV3 = (l, r, n, maxx) => {
        let countingArray = Array.from({ length: maxx }, (_, index) => {
          return { count: 0, number: index + 1 };
        });
        let mostOccured = -1;
        let mostOccuredAmount = 0;
      
        for (let i = 0; i < n; i++) {
          let subArray = countingArray.slice(l[i] - 1, r[i] + 1);
          subArray.forEach((numberObj) => {
            numberObj.count = numberObj.count + 1;
          });
        }
      
        countingArray.forEach((numberObj) => {
          if (numberObj.count > mostOccuredAmount) {
            mostOccured = numberObj.number;
            mostOccuredAmount = numberObj.count;
          }
        });
      
        return mostOccured;
      };
      
      const maximumOccuredV4 = (l, r, n, maxx) => {
        let countingArray = Array.from({ length: maxx }, (_, index) => {
          return { count: 0, number: index + 1 };
        });
        let mostOccured = -1;
        let mostOccuredAmount = 0;
      
        for (let i = 0; i < n; i++) {
          let subArray = countingArray.slice(l[i] - 1, r[i] + 1);
          subArray.forEach((numberObj) => {
            numberObj.count = numberObj.count + 1;
            if (numberObj.count > mostOccuredAmount) {
              mostOccured = numberObj.number;
              mostOccuredAmount = numberObj.count;
            }
          });
        }
      
        return mostOccured;
      };
      
      /*
      clearly this is getting me nowhere, i have thought of a new way to do this,
      first you loop through and find the difference in the ranges and their start points
      
      [2, 5] = {2, 3, 4, 5}           start: 2 travel: 4
      [1, 3] = {1, 2, 3}              start: 1 travel: 2
      [3, 9] = {3, 4, 5, 6, 7, 8, 9}  start: 3 travel: 6
      [1, 4] = {1, 2, 3, 4}           start: 1 travel: 4
      
      then you count out the max value and create arrays to represent travel in the proper index
      first loop:
         1       2    4    5   6   7   8   9   9
      [ [2, 4], [4], [6], [], [], [], [], [], [] ]
      
      next we iterate through this and use the length of the item/array to determine how many instances were present in
      each of the ranges
      
      1: 2
      
      but then we dont have the right number for the others?
      so we will add all of the numbers into the next index and subtract 1
      
      second loop: 
         1       2          4    5   6   7   8   9   9
      [ [2, 4], [4, 1, 3], [6], [], [], [], [], [], [] ]
      
      third loop:
         1       2          4          5   6   7   8   9   9
      [ [2, 4], [4, 1, 3], [6, 3, 4], [], [], [], [], [], [] ]
      
      forth loop:
         1       2    4    5   6   7   8   9   9
      [ [2, 4], [4, 1, 3], [6], [], [], [], [], [], [] ]
      
      third loop:
         1       2    4    5   6   7   8   9   9
      [ [2, 4], [4, 1, 3], [6], [], [], [], [], [], [] ]
      
      third loop:
         1       2    4    5   6   7   8   9   9
      [ [2, 4], [4, 1, 3], [6], [], [], [], [], [], [] ]
      
         1       2    4    5   6   7   8   9   9
      [ [2, 4], [4, 1, 3], [6], [], [], [], [], [], [] ]
      
         1       2    4    5   6   7   8   9   9
      [ [2, 4], [4, 1, 3], [6], [], [], [], [], [], [] ]
      
         1       2    4    5   6   7   8   9   9
      [ [2, 4], [4, 1, 3], [6], [], [], [], [], [], [] ]
      
      ect...
      
      the length will be compared against the current highest number and replaced as needed
      
      */
      
      const maximumOccuredV5 = (l, r, n, maxx) => {
        let answer = -1;
        let answerCount = 0;
        const travelByIndex = Array.from({ length: maxx }, (_, index) => {
          return [];
        });
      
        for (let i = 0; i < n; i++) {
          travelByIndex[l[i]].push(r[i] - l[i]);
        }
      
        travelByIndex.forEach((item, index) => {
          if (item.length > 0) {
            item.forEach((subItem) => {
              if (subItem - 1 > -1 && travelByIndex[index + 1]) {
                travelByIndex[index + 1].push(subItem - 1);
              }
              if (item.length > answerCount) {
                answer = index;
                answerCount = item.length;
              }
            });
          }
          // console.log(index, item);
        });
      
        return answer;
      };
      
      console.log(maximumOccuredV5([1, 4, 3, 1], [15, 8, 5, 4], 4, 15));`,
    },
    {
      problemTitle: "Second largest number",
      solved: true,
      description: "find the second largest number",
      code: `    print2largest(arr,n){
        //code here
        let largest = null
        let secondLargest = null
        
        for(let i = 0; i < n; i++){
            if(!largest){
                largest = arr[i]
            } else {
                if(arr[i] > largest){
                    secondLargest = largest
                    largest = arr[i]
                }
            }
            if(largest > arr[i] && secondLargest < arr[i]){
                secondLargest = arr[i]
            }
        }
        
        if(!secondLargest){
            return -1
        } else{
            return secondLargest
        }
    }`,
    },
    {
      problemTitle: "Remove N for Smallest Number",
      solved: false,
      description: "Make smallest number out of array by removing N numbers",
      code: `/*
      given a string number such as 1290029919 remove N chars
  
      the goal is to get the smallest number possible
  
      im going to pretty much show my thought process for this problem
  
      rule 1: If you can remove all numbers before a set of '0's that takes priority
      example: N = 3 // 1290029919 -> 29919
  
       -> incorrect rule 2: If creating leading zeros is impossible, remove the highest number
  
      after gameplanning this or a bit i realize that this is not true
      in the number 8792 given N = 1 it is better to remove the 0th index of 8 
      to give a leading 7
  
      rule 1 is still true
  
      i think the next important thing as proven by the not so good second rulse should
      be to ensure that the leading number is as small as possible
  
      rule 2: ensure the leading number is as small as possible
      rule 3: if the leading number will always be the same, remove the highest number of the
      lowest index
  
      since i'm going to be submiting this to geeks for geeks i want to make the first itteration
      as fool proof as possible. I want to eventually be able to do this through my "rules" 
      however i want points and i'm pretty sure i'll have a better chance at brute force. 
      after I complete the brute foce way ill use it to error check my other "rules" function.
  */
  
  const bruteForceV1 = (str, n) => {
    /*
      the game plan will be simple, create an array from the string that returns numbers
      '123' -> [1, 2, 3]
  
      create every possibility 
      '123' 2 -> [3][2][1]
  
      sort and return index 0 joined
      [1][2][3] -> '1'
      */
  
    const numArr = str.split("");
    let choiceObject = { 1: [[...numArr]] };
    if (numArr.length <= n) return 0;
  
    /*
      I think im going to create an object actually the objext will have keys from 1 -> N
      {
          1: [2, 3], [1, 3], [1, 2]
          2: [3], [2], [1], [3], [1], [2]
      }
  
      the lowest number of the highest key will be the lowest possible number
      */
  
    for (let i = 1; i < n + 2; i++) {
      if (i + 1 !== n + 2) choiceObject[i + 1] = [];
      if (choiceObject[i]) {
        choiceObject[i].forEach((subArray) => {
          subArray.forEach((number, index) => {
            const newArray = subArray
              .slice(0, index)
              .concat(subArray.slice(index + 1));
            if (choiceObject[i + 1]) choiceObject[i + 1].push(newArray);
          });
        });
      }
    }
  
    /*
    This is just a really bad way to do this since it's very complex but i think it works
    */
  
    const lastList = choiceObject[n + 1].map((item) => {
      return parseInt(item.join(""));
    });
  
    console.log(choiceObject);
    return lastList.sort((a, b) => a - b)[0];
  };
  
  console.log(bruteForceV1("971149", 5));
  
  /*
  "149811"
  '1290029919'
  '971149', 6 //broken test case
  
  */`,
    },
  ],
};
