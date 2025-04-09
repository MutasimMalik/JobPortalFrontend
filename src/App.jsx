import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <HomeCards></HomeCards>
    <JobListings></JobListings>
    <ViewAllJobs></ViewAllJobs>
    </>
  )
}

export default App