import React from 'react'
import Button from '../Components/Button/Button'

const Home = () => {
  return (
    <>
        <h1 className=''>Home</h1>
        <Button  name='spinner' ></Button>
        <Button size='sm'>Primary</Button>
        <Button size='md' variant='primary'>Primary</Button>
        <Button size='md' variant='secondary'>Primary</Button>
        <Button size='lg' variant='danger'>Primary</Button>
        <Button>Primary</Button>
        <Button loading={true}>loading</Button>
        <Button disabled={true}>loading</Button>
        <Button disabled={true}>loading</Button>
    </>
  )
}

export default Home