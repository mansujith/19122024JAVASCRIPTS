let array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let largest = array[0]; 
for (let i = 1; i < array.length; i++) { 
    if (array[i] > largest) {
        largest = array[i]; 
    }
}
console.log(largest);
