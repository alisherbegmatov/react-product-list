import React from 'react' // import React
import CategoryButton from './CategoryButton.js' // import CategoryButton
import { namesAndCategories } from '../../data.js' // import namesAndCategories

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

export default Category // Export Category
