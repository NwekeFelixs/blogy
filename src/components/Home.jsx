import React from 'react'
import './css/style.css'
import Header from './fragments/Header'
import HeroSection from './fragments/Hero'
import FeaturedSection from './fragments/Featured'
import RecentPostsSection from './fragments/RecentPost'
import RecommendedSection from './fragments/Recommended'
import NewsletterSection from './fragments/NewsLetter'
import Footer from './fragments/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <main>
        <HeroSection/>
        <FeaturedSection/>
        <RecentPostsSection/>
        <RecommendedSection/>
        <NewsletterSection/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
