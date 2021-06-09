// Import your exported data into the App component. If the exports matched the example in Challenge 6 the import would look like this:
import React, { useState } from 'react' // import React
import Header from './Header.js' // import Header from Header.js
import Category from './components/Category/Category' // Import Category from folder Category in folder components
import AllProducts from './components/AllProducts/AllProducts' // Import AllProducts from folder AllProducts in folder components
import './App.css' // import App.css

// React App
function App () {
  const [category, setCategory] = useState(['All'])
  return (
    <div className='App'>
      <Header // Header Component
        key='Cheaply'
        titile='Cheaply'
      />
      <Category // Category Component
        category={category}
        onClick={(newCategory) => {
          if (newCategory !== 'All') {
            if (category.includes('All')) {
              setCategory([newCategory])
            } else if (category.includes(newCategory)) {
              const index = category.indexOf(newCategory)
              category.splice(index, 1)
              setCategory([...category])
            } else {
              setCategory([...category, newCategory])
            }
          } else {
            setCategory(['All'])
          }
        }}
      />
      <AllProducts // AllProducts Component
        category={category}
      />
    </div>
  )
}

export default App // Export App
