import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'

const contact = () => {
  return (
    <div>
        <Hero heading="Contact" message={"Fill the form below to get in touch with me."}/>
        <Contact />
    </div>
  )
}

export default contact