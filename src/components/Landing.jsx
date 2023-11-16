import React from 'react'
import News from '../landingpages/News'
import Category from '../landingpages/Category'
import Instruction from '../landingpages/Instruction'
import Change from '../landingpages/Change'
import Newsproduct from '../landingpages/Newsproduct'
import Instructiontwo from '../landingpages/Instructiontwo'
import Recommend from '../landingpages/Recommend'
import Supplier from '../landingpages/supplier'
import Footer from '../landingpages/Footer'

function Landing() {
  return (
    <div>
        <News/>
        <Category/>
        <Instruction/>
        <Change/>
        <Newsproduct/>
        <Instructiontwo/>
        <Recommend/>
        <Supplier/>
        <Footer/>
    </div>
  )
}

export default Landing