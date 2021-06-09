import data from './data.json' // imports data.json

const allCategories = data.map(obj => obj.category)

const cat = allCategories.reduce((acc, cat) => {
  acc[cat] = 0
  return acc
}, {})

const categoriesUnique = Object.keys(cat)

const categoriesWithCounts = allCategories.reduce((acc, cat) => {
  if (acc[cat] === undefined) {
    acc[cat] = 1
  } else {
    acc[cat] += 1
  }
  return acc
}, {})

const namesAndCategories = categoriesUnique.map((name) => ({ name, count: categoriesWithCounts[name] }))

namesAndCategories.push({ name: 'All', count: data.length })

export default data // export the native JS array

export {
  allCategories,
  categoriesUnique,
  categoriesWithCounts,
  namesAndCategories
}
 