import React from 'react'
import data from '../../data'
import Product from './Product'

function AllProducts (props) {
  const { category } = props
  return (
    <div className='AllProducts'>
      {data.filter((obj) => category.includes(obj.category) || category[0] === 'All').map((obj) => (
        <Product key={obj.description} {...obj} />
      ))}
    </div>
  )
}

export default AllProducts
 