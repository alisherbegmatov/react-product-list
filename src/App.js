import React, { useState } from 'react'
import Header from './Header.js'
import Category from './components/Category/Category'
import ProductList from './components/AllProducts/AllProducts'
import './App.css'

function App () {
  const [category, setCategory] = useState(['All'])
  return (
    <div className='App'>
      <Header
        key='Cheaply'
        titile='Cheaply'
      />
      <Category
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
      <ProductList
        category={category}
      />
    </div>
  )
}

export default App
 