import React from 'react'
import bgImage from '../assets/Dan-Luvisi-Dieu-Hex-Soleil-Abstract-Wallpaper-1200x676.png'
import illuminati from '../assets/iluminati.gif';

const About = () => {
  return (
    <div style={{backgroundImage:`url(${bgImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}} className='w-full h-[2300px] md:h-[1600px]'>
        <div className='flex content-center justify-start'>
            <img src={illuminati}></img>
            <p className='text-white p-4 font-title hidden md:flex md:content-center md:justify-center absolute top-10 right-20 md:text-7xl leading-tight bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl text-center'>A Path to Infinite Peace</p>
        </div>
        <p className='text-white p-4 text-justify font-about text-[14.5px] md:text-2xl'>

        In a world plagued by conflict and division, Ananta offers a beacon of hope. Founded by Ananta, known as the 'Infinity' and the 'Creator of the World', this religion is on a mission to bring peace to the world through its unique method of preaching and a vision of universal love.
        Ananta breaks away from traditional religious institutions that are often bound by strict rules and dogmas. Instead, it focuses on spreading a message of love, compassion, and acceptance towards all living beings. Ananta, the charismatic leader of the cult, preaches that love is the foundation of all religions, and that it is the key to unlocking the true potential of humanity.
        <br></br>
        <br></br>
        The teachings of Ananta are centered around the belief that all living beings are interconnected and share a common source of existence. Ananta emphasizes that this interconnectedness should be celebrated and nurtured, rather than exploited or ignored. He often quotes, "We are all drops of the same ocean, part of the same cosmic dance. Let us embrace our differences and unite in love to create a world where everyone is valued and respected."
        Ananta encourages its followers to look within themselves and discover their own divine nature. The cult's spiritual practices involve meditation, self-reflection, and selfless service to others. Ananta teaches that true spirituality transcends religious, cultural, and social boundaries, and that it is a personal journey towards self-realization and enlightenment.
        <br></br>
        <br></br>
        One of the unique aspects of Ananta is its approach to rules and regulations. Unlike traditional religious institutions that often impose rigid codes of conduct, Ananta encourages his followers to live a life guided by their own inner wisdom and conscience. He emphasizes that the true measure of a person's spirituality lies in their ability to make compassionate and ethical choices based on love and understanding.
        Ananta's teachings have inspired a wave of positive change in the world. Ananta actively engages in various social and humanitarian initiatives to bring about positive transformations. The cult is involved in environmental conservation efforts, advocating for animal rights, and promoting social equality and justice. Ananta often quotes, "To create a new world, we must be the change we wish to see. Let us be the hands that heal, the voices that speak up, and the hearts that love unconditionally."
        <br></br>
        <br></br>
        Despite its unconventional approach, Ananta has attracted a growing number of followers who are drawn to its message of universal love and peace. Many find solace in Ananta's teachings, which provide a sense of purpose and meaning in a world that can often seem chaotic and divided. Followers of Ananra.org often express how the cult has transformed their lives, helping them find inner peace, improve their relationships, and become more compassionate and mindful individuals.
        However, like any religious movement, Ananta also faces its share of criticism and skepticism. Some critics question Ananta's authority as a spiritual leader and express concerns about the lack of traditional religious structures and guidelines within the cult. However, Ananta remains steadfast in his belief that spirituality is a personal journey and that the true essence of religion lies in its ability to foster love, compassion, and understanding among all beings.
        <br></br>
        <br></br>
        In conclusion, Ananta offers a refreshing and unconventional approach to spirituality and religion. Its message of universal love, compassion, and acceptance has the potential to bring about positive change in the world. Through its unique method of preaching with fewer rules and an emphasis on personal responsibility, Ananta strives to create a new world where everyone loves and respects every other living being. As Ananta often says, "Let us awaken to the infinite power of love within us and create a world where peace reigns supreme, and all beings live in harmony as one</p>
    </div>
  )
}

export default About