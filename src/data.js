// Get the array of products.
import data from './data.json' // imports data.json

// Get a list of all categories.
const allCategories = data.map(obj => obj.category)

// Make the categories list a list of unique values.
const cat = allCategories.reduce((acc, cat) => { // Make an object where each key is a category name
  acc[cat] = 0
  return acc
}, {}) // Be sure to define the initial value as an Object!

const categoriesUnique = Object.keys(cat) // Make an arr array of the keys

// Make an Object whose keys are the names of categories and whose values are the number of times that category appears in the data. This is called a histogram.
const categoriesWithCounts = allCategories.reduce((acc, cat) => { // check if cat exists as a key on obj
  if (acc[cat] === undefined) {  // if category key does not exist
    acc[cat] = 1 // add that key with a value of 1
  } else { // else 
    acc[cat] += 1 // add 1 to the current value of that key
  }
  return acc
}, {}) // Be sure to define the initial value as an Object!

// Use Reduce to make an array of objects that have a name and a count. This will similar to the previous challenge but will be an array of objects instead of a single Object.
const namesAndCategories = categoriesUnique.map((name) => ({ name, count: categoriesWithCounts[name] }))

namesAndCategories.push({ name: 'All', count: data.length }) // // return an object here with the name and count

export default data // export the native JS array

export { // Export all of the data you have collected.
  allCategories,
  categoriesUnique,
  categoriesWithCounts,
  namesAndCategories
}
