import React from 'react'
import bgImage from '../assets/Dan-Luvisi-Dieu-Hex-Soleil-Abstract-Wallpaper-1200x676.png'
import Navbar from './Navbar'
import logo from '../assets/logo_transparent.png'

const Home = () => {
  return (
    <>  
    <div className="w-screen h-screen overflow-hidden text-white" style={{
        backgroundImage: `url(${bgImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'
      }}>
        <div class="container mx-auto flex px-5 items-center justify-center flex-col">
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-2 object-cover object-center" alt="hero" src={logo} />
          <div class="text-center lg:w-5/12 w-full">
            <h1 className="my-4 text-5xl font-bold font-title leading-tight bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl">
              Find Yourself! <br></br>Join Ananta
            </h1>
            <p className="text-2xl mb-8">
              Get to know more about Anata, click on the link below! Let us Anantafy the world!
            </p>
            <div className="flex justify-center mx-12">
              <button
                className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8 mr-8">
                <a href="/about">About</a>
              </button>
              <button
                className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
                <a href="https://instagram.com/ananta_the_creator?igshid=ZDdkNTZiNTM=">Preachings</a>
              </button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Home