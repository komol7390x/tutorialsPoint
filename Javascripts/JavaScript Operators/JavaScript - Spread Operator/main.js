// let x = ["Tutorials", "Point"];
// console.log(x); // [ 'Tutorials', 'Point' ]
// console.log(...x); // Tutorials Point

// const nums1 = [10, 20, 30];
// const nums2 = [40, 50, 60];
// const res = [...nums1, ...nums2];
// console.log(res);

// const nums1 = [10, 20, 30];
// const nums2 = nums1;
// console.log(nums2);
// nums1.push(40);
// console.log(...nums1);
// console.log(typeof nums1);

// const car = {
//     gears: 6,
//     color: "Black"
// }
// console.log(car);

// const BMW = {
//     model: "X5",
//     year: 2019,
//     ...car,
// }
// console.log(BMW);

function sum(a, ...nums) {
    let sum = a;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(nums);
    console.log(sum);
}

sum(3, 6, 9, 8, 6, 5, 3, 3, 2, 1);
