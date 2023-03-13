import React from 'react'

const States = ({states}) => {
  return (
    <>
    {states.map((state) => (
        <div className='bg-warning'>
        <h1 className='bg-warning'>{state.name}</h1>
        <h3 className='bg-warning'>Language:{state.language}</h3>
        <h4 className='bg-warning'>Population:{state.population}</h4>
        </div>  
    ))
    }
    </>
  )
}

export default States;
