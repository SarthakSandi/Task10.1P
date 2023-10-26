import React from 'react'
import Headerr from './Header'
import FeaturedTutorials from './FeaturedTutorials'
import Footer from './Footer'
import './Homepage.css'
import {Header} from 'semantic-ui-react'

export default function Homepage() {
    return (
        <div>
            <Headerr />
            <Header />
            <div className='img'>
                <img src="https://augstudy.com/aug-website-files/wp-content/uploads/2018/01/institutions/deakin_university_740x400.jpg" alt="deakin" />
            </div>
            <div className="ui container">


                <FeaturedTutorials />
                <FeaturedTutorials />
                <Header />
                <Footer />

            </div>
        </div>
    )
}
