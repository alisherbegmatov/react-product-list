import React from 'react' // import React
import data from '../../data' // import data
import Product from './Product' // import Product

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

export default AllProducts // export AllProducts
