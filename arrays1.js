/** 
1. Create an array and name it `groceries`, add 6 groceries to it
2. Print the second element from the array `groceries`
3. Print how many elements are in the array (i.e length of the array)
4. Print the last element in the array 
5. Remove the last element from the array and print it
6. Add two new and different elements to the end of the array 
7. Create a new array named `firstThreeItems` and 
    it’s elements are the first three elements from the `groceries` array.
*/

const groceries = ["apple", "oranges", "lettuce", "kale", "lemons", "spices"];
console.log(groceries[1]);
console.log(groceries.length);
console.log(groceries[groceries.length - 1]);

console.log(groceries.pop()); //removing the element
console.log(groceries); //printing the array after removing the element
groceries.push("juice", "grapes");
console.log(groceries); //printing after adding the 2 elements
const firstThreeItems = groceries.slice(0, 3);
console.log(firstThreeItems);

/**
 🌶️🌶️🌶️ **Challenge** 

1. Delete the 3rd element in the array
2. Insert a new element at the beginning of the array
3. Remove the first two elements and replace them 
    with “ketchup” and “chili”
 */

groceries.splice(2, 1); //deleting 3rd element
console.log(groceries);

groceries.unshift("mangoes"); //insert a new element at the beginning
console.log(groceries);

groceries.splice(0, 2, "ketchup", "chilli"); //replacing
console.log(groceries);
