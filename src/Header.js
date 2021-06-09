import React from 'react' // import React

function Header (props) {
  const { titile } = props
  return (
    <div className='Header'>
      <h1>{titile}</h1>
    </div>
  )
}

export default Header // Export Header
