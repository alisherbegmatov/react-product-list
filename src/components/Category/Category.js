import React from 'react'
import CategoryButton from './CategoryButton.js'
import { namesAndCategories } from '../../data.js'

function Category (props) {
  const { category, onClick } = props
  return (
    <div className='Category'>
      {namesAndCategories.map((obj) => {
        const { name, count } = obj
        const className = category.includes(name) ? 'selected' : ''
        return <CategoryButton onClick={() => onClick(name)} name={name} count={count} className={className} />
      })}
    </div>
  )
}

export default Category
