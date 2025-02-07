import React from 'react'
import Hero from '../components/Hero'
import Programs from '../components/Programs'
import Achievement from '../components/Achievement'
import SkilledCandidates from '../components/SkilledCandidates'
import Batches from '../components/Batches'
import Testimonials from '../components/Testimonials'
import Welcome from '../components/Welcome'
import Courses from '../components/Courses'
import Certificates from '../components/Certificates'
import BootCamp from '../components/BootCamp'
import Faqs from '../components/Faqs'

const Home = () => {
    return (
        <>
            <Hero />
            <Programs />
            <Achievement />
            <SkilledCandidates />
            <Batches/>
            <Testimonials/>
            <Welcome/>
            <Courses/>
            <Certificates/>
            <BootCamp/>
            <Faqs/>
        </>
    )
}

export default Home
