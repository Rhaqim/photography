import React from 'react'
import Hero from '../components/Hero'

import Portfolio from '../components/Portfolio'

const portfolio = () => {
  return (
    <div>
        <Hero heading="Portfolio" message={"Picture's I've taken over the years"} />
        <Portfolio />
    </div>
  )
}

export default portfolio