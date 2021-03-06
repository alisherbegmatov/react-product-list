import React from 'react' // import React

function Product (props) {
  const { name, description, price } = props
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  )
}

export default Product // Export Product
