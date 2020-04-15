import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Hero>
      <Banner
        title='Welcome'
        subtitle='to the Friends of Challenging Behaviour Counselling Services'
      >
        <Link to='/rooms' className='btn-primary'>
          Rooms
        </Link>
      </Banner>
    </Hero>
  )
}
