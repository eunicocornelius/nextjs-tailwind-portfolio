// TODOS: - Change data into real portfolio content instead of placeholders
//        - Replace image with your own face
//        - Improve Portfolio section into something more animated and interactive
//        - Add accessibility functionality using arrow keys
//        - Move mock data somewhere else to prevent bloating

import Head from 'next/head'
import deved from '../public/dev-ed-wave.png'

import { useState } from 'react'

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import RoundedAvatar from './components/RoundedAvatar'
import SocialMedia from './components/SocialMedia'
import SkillList from './components/SkillList'
import Portfolio from './components/Portfolio'
import ContactForm from './components/ContactForm'
import WorldMap from './components/WorldMap'
import CountrySelection from './components/CountrySelection'

export default function Home() {

  // Temporary Mock Data 
  const tempSocialMedia = {
      github: 'https://github.com/eunicocornelius',
      linkedin: 'https://www.linkedin.com/in/eunico-cornelius/',
      instagram: 'https://www.instagram.com/eunico1/',
  }

  const skillsetList = [
    {
      title:'Beautiful Designs',
      image:'/design.png',
      desc:'Creating elegant designs suited for your needs following core design theory.',
      toolTitle: 'Design Tools I Use',
      tools: ['Photoshop','Figma','Adobe XD']
    },
    {
      title:'Clean Programming',
      image:'/code.png',
      desc:'Algorithm understanding, clean programming accompanied by fast learning to achieve high softwaree standards.',
      toolTitle: 'Programming Languages I Use',
      tools: ['Javascript','ReactJS','C#','Git']
    },
    {
      title:'Team Player',
      image:'/consulting.png',
      desc:'Worked globally with lots of different culture and friendly faces. Not to mention, agile methodologies with a side of constructive criticism that gets the job done.',
      toolTitle: 'Management Tools I Use',
      tools: ['Jira','SCRUM','Kanban','A/B Testing']
    },
  ]

  const portfolioList = [
    {
      title: 'Devconnector',
      desc:'MERN stack forum deployed using Heroku',
      image:'/web1.png',
      url: 'https://mernstack-devconnector.herokuapp.com/',
    },
    {
      title: 'Devconnector',
      desc:'MERN stack forum deployed using Heroku',
      image:'/web2.png',
      url: '#',
    },
    {
      title: 'Devconnector',
      desc:'MERN stack forum deployed using Heroku',
      image:'/web3.png',
      url: '#',
    },
    {
      title: 'Devconnector',
      desc:'MERN stack forum deployed using Heroku',
      image:'/web4.png',
      url: '#',
    },
    {
      title: 'Devconnector',
      desc:'MERN stack forum deployed using Heroku',
      image:'/web5.png',
      url: '#',
    },
    {
      title: 'Devconnector',
      desc:'MERN stack forum deployed using Heroku',
      image:'/web6.png',
      url: '#',
    },
  ]

  const companiesList = [
    {
      name: 'PT. Indocement Tunggal Prakarsa',
      logo: '/company_logos/company_indocement',
      desc: ['Introduced frontend dashboard upgrade for the company using .NET', 'Improved web supervision of 50+ facilities by providing realtime data using SignalR','Created new chat feature for improved communications via dashboard between facilities'],
      location: 'Jakarta',
      country: 'Indonesia',
      startDate: '11/2016',
      endDate: '02/2017',
      role: 'Web Developer',
      skills: ['ASP.NET', 'C#', 'SignalR'],
      industry: 'Cement Company',
    },
    {
      name: 'Seriotec GmbH',
      logo: '/company_logos/company_seriotec',
      desc: ['Built and optimized front-end features', 'Developed live new feed displaying most recent new using API calls', 'Created and trained a chatbot in Facebook Messenger that allows customers to purchase cinema tickets autonomously in Facebook'],
      location: 'Munich',
      country: 'Germany',
      startDate: '03/2018',
      endDate: '08/2018',
      role: 'Fullstack Feveloper Intern',
      skills: ['HTML', 'CSS', 'PHP', 'JS', 'Processwire'],
      industry: 'Media/Film',
    },
    {
      name: 'PT. Inti Sinergi Teknologi',
      logo: '/company_logos/company_inergi',
      desc: ['Developed end-to-end machine-learning app using Python, Tensorflow, and Keras converting physical photo IDs into digital text', 'Single Handedly built a self-developed CRNN neural network with an accuracy of 95% that is the central piece of the photo ID app','Created the web interface for the machine learning model in Flask / HTML enabling users to use the ML tool in real-time.', 'Submitted a white paper with a team of three, containing technical findings of the neural network project', 'Built machine learning model that converts images of electricity meters (PLN) into digital form with 80% accuracy using 1 million+ self annotated image data', 'Built backend server REST API to serve the model above and company projects using MongoDB, Werkzeug, Bcrypt, and FlaskJWT', 'Conducted user load testing on docker swarm using locust and multiple docker containers with 6 nodes (1 manager, 5 workers)'],
      location: 'Jakarta',
      country: 'Indonesia',
      startDate: '02/2019',
      endDate: '07/2020',
      role: 'Research Assistant & Software Developer',
      skills: ['Python', 'Tensorflow', 'Keras', 'Flask', 'HTML', 'MongoDB', 'Werkzeug', 'Bcrypt', 'FlaskJWT', 'Docker Swarm'],
      industry: 'Software',
    },
    {
      name: 'PT. Cognixy',
      logo: '/company_logos/company_cognixy',
      desc: ['Developed in an agile environment team an Intelligent Attendance System that utilizes neural networks to detect human beings and their thermal signatures to prevent covid spread with Python (Flask), ZMQ, Redis, MySQL, Quasar and VueJS', 'Built attendance mailing system that envelops NN model above to notify employers of COVID symptomatic employees', 'Product bought by ShapesAI and used for COVID awareness in London, broadcasted on BBC', 'Designed and developed UI for mailing system frontend', 'Integrated image recognition API into the mailing system interface', 'Developed E2E CI/CD workflow using bitbucket pipelines with Cypress for automation testing per container', 'Created D3JS dashboard that warns COVID risks in train stops for Indonesian Railway Company (KCI)'],
      location: 'Jakarta',
      country: 'Indonesia',
      startDate: '07/2020',
      endDate: '09/2020',
      role: 'Fullstack Developer',
      skills: ['VueJS', 'Python', 'Flask', 'ZMQ', 'Redis', 'MySQL', 'Quasar', 'Git', 'Trello' ],
      industry: 'Software',
    },
    {
      name: 'Labster ApS',
      logo: '/company_logos/labster',
      desc: ['Succeeded in boosting production efficiency by 300% using team coordination and agile methods using Jira (SCRUM and Kanban)', 'Managed, developed and released into production more than 30 higher education simulations with topics in natural sciences including stereochemistry, synthesis of aspirin, melting point apparatus and more with accessibility friendly features via XML and Unity with A/B testing', 'Built reusable code templates and building blocks that are reusable developers to quickly implement for multiple other simulations', 'Fixed bugs, version controlled, and maintained on 20+ simulations that satisfy quality assured standards for production'],
      location: 'Bali',
      country: 'Indonesia',
      startDate: '01/2021',
      endDate: '09/2022',
      role: 'Content Unity Developer',
      skills: ['XML', 'C#', 'Unity', 'Jira', 'Figma', 'Git'],
      industry: 'Educational Software',
    },
  ]

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = (e) =>{
    setDarkMode(!darkMode)
  }

  

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Eunico Cornelius&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        {/* Landing Page Intro Section */}
        <section className='min-h-screen'>
          <Navbar resume={'./resume.pdf'} darkmode={darkMode} handleDarkMode={handleDarkMode}/>
          <div className='flex flex-col lg:flex-row lg:mt-28'>
            <div className='flex-1 flex justify-center align-middle z-10'>
              <RoundedAvatar avatar={deved}/>
            </div>
            <div className='flex-1 flex justify-center align-middle flex-col z-10'>
              <Intro name="Eunico Cornelius" role="Developer and Designer" desc="Globally adapt professional developer providing SAAS services for programming and prototyping content needs. Contact me down below for further enquiries!"/>
              <SocialMedia socialList={tempSocialMedia}/>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className='mb-32 mt-32 md:mt-0'>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Skills I Offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              Ever since I was a child, I have always dreamt of being a scientist. 
              But never have I thought, that I would be a <span className='text-teal-500'>Computer Scientist</span>. 
              Equipped with my bachelor&apos;s degree knowledge in Information Technology, I strive to create beautiful software applications in <span className='text-teal-500'>websites</span> and <span className='text-teal-500'>games</span>.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              My expertise expands throughout the programming field with clean coding in mind. Creativity is my weapon of choice when creating software. <span className='text-teal-500'>ReactJS</span> allows me to bring to life beautiful responsive websites, which is then completed by MERN stack development. <span className='text-teal-500'>Unity</span> allows me to create immersive games using <span className='text-teal-500'>C#</span> scripting.
            </p>
          </div>
          {/* Skills Cards */}
          <SkillList skillsetList={skillsetList}/>
        </section>

        {/* Companies Section */}
        <section>
          <div className='mb-32'>
            <h3 className='text-3xl pb-16 dark:text-white'>Company Experiences</h3>
            <div className='flex justify-center'>
              {/* <img src='/world-map.png' alt='world-map'/> */}
              {/* <WorldMap/> */}
              <CountrySelection companies={companiesList}/>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              I love exploring new experiences and methodologies. Some of my best work includes <span className='text-teal-500'>MERN</span> stack development, <span className='text-teal-500'>Flutter</span>, and more. Don&apos;t forget to leave a <span className=' text-yellow-500 font-bold'>star</span> if you liked it.
            </p>
          </div>
          <Portfolio portfolioList={portfolioList}/>
        </section>
        <section>
          {/* Divider*/}
          <div className='w-screen relative right-10 md:right-20 lg:right-40 bottom-0 z-[0]'>
            <svg id="visual" viewBox="0 0 1920 400" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" className='dark:hidden'>
              <path d="M0 57L148 65L295 121L443 109L591 37L738 97L886 113L1034 97L1182 73L1329 157L1477 41L1625 77L1772 121L1920 33L1920 0L1772 0L1625 0L1477 0L1329 0L1182 0L1034 0L886 0L738 0L591 0L443 0L295 0L148 0L0 0Z" fill="#ffffff"></path>
              <path d="M0 65L148 113L295 141L443 145L591 61L738 141L886 133L1034 129L1182 129L1329 185L1477 97L1625 121L1772 165L1920 89L1920 31L1772 119L1625 75L1477 39L1329 155L1182 71L1034 95L886 111L738 95L591 35L443 107L295 119L148 63L0 55Z" fill="#e0f3f0"></path>
              <path d="M0 105L148 141L295 189L443 161L591 113L738 169L886 145L1034 169L1182 137L1329 221L1477 129L1625 157L1772 173L1920 129L1920 87L1772 163L1625 119L1477 95L1329 183L1182 127L1034 127L886 131L738 139L591 59L443 143L295 139L148 111L0 63Z" fill="#c1e8e1"></path>
              <path d="M0 165L148 161L295 237L443 217L591 169L738 197L886 209L1034 233L1182 193L1329 237L1477 185L1625 177L1772 221L1920 173L1920 127L1772 171L1625 155L1477 127L1329 219L1182 135L1034 167L886 143L738 167L591 111L443 159L295 187L148 139L0 103Z" fill="#a1dcd2"></path>
              <path d="M0 233L148 177L295 285L443 293L591 213L738 273L886 261L1034 265L1182 245L1329 273L1477 213L1625 253L1772 233L1920 221L1920 171L1772 219L1625 175L1477 183L1329 235L1182 191L1034 231L886 207L738 195L591 167L443 215L295 235L148 159L0 163Z" fill="#7fd0c3"></path>
              <path d="M0 261L148 253L295 333L443 377L591 257L738 361L886 285L1034 345L1182 293L1329 357L1477 301L1625 337L1772 297L1920 261L1920 219L1772 231L1625 251L1477 211L1329 271L1182 243L1034 263L886 259L738 271L591 211L443 291L295 283L148 175L0 231Z" fill="#57c4b5"></path>
              <path d="M0 401L148 401L295 401L443 401L591 401L738 401L886 401L1034 401L1182 401L1329 401L1477 401L1625 401L1772 401L1920 401L1920 259L1772 295L1625 335L1477 299L1329 355L1182 291L1034 343L886 283L738 359L591 255L443 375L295 331L148 251L0 259Z" fill="#14b8a6"></path>
            </svg>
            <svg id="visual" viewBox="0 0 1920 400" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" className='hidden dark:block'>
              <path d="M0 57L148 65L295 121L443 109L591 37L738 97L886 113L1034 97L1182 73L1329 157L1477 41L1625 77L1772 121L1920 33L1920 0L1772 0L1625 0L1477 0L1329 0L1182 0L1034 0L886 0L738 0L591 0L443 0L295 0L148 0L0 0Z" fill="#111827"></path>
              <path d="M0 65L148 113L295 141L443 145L591 61L738 141L886 133L1034 129L1182 129L1329 185L1477 97L1625 121L1772 165L1920 89L1920 31L1772 119L1625 75L1477 39L1329 155L1182 71L1034 95L886 111L738 95L591 35L443 107L295 119L148 63L0 55Z" fill="#101623"></path>
              <path d="M0 105L148 141L295 189L443 161L591 113L738 169L886 145L1034 169L1182 137L1329 221L1477 129L1625 157L1772 173L1920 129L1920 87L1772 163L1625 119L1477 95L1329 183L1182 127L1034 127L886 131L738 139L591 59L443 143L295 139L148 111L0 63Z" fill="#0f141f"></path>
              <path d="M0 165L148 161L295 237L443 217L591 169L738 197L886 209L1034 233L1182 193L1329 237L1477 185L1625 177L1772 221L1920 173L1920 127L1772 171L1625 155L1477 127L1329 219L1182 135L1034 167L886 143L738 167L591 111L443 159L295 187L148 139L0 103Z" fill="#0d121b"></path>
              <path d="M0 233L148 177L295 285L443 293L591 213L738 273L886 261L1034 265L1182 245L1329 273L1477 213L1625 253L1772 233L1920 221L1920 171L1772 219L1625 175L1477 183L1329 235L1182 191L1034 231L886 207L738 195L591 167L443 215L295 235L148 159L0 163Z" fill="#0b0f17"></path>
              <path d="M0 261L148 253L295 333L443 377L591 257L738 361L886 285L1034 345L1182 293L1329 357L1477 301L1625 337L1772 297L1920 261L1920 219L1772 231L1625 251L1477 211L1329 271L1182 243L1034 263L886 259L738 271L591 211L443 291L295 283L148 175L0 231Z" fill="#080d13"></path>
              <path d="M0 401L148 401L295 401L443 401L591 401L738 401L886 401L1034 401L1182 401L1329 401L1477 401L1625 401L1772 401L1920 401L1920 259L1772 295L1625 335L1477 299L1329 355L1182 291L1034 343L886 283L738 359L591 255L443 375L295 331L148 251L0 259Z" fill="#06090e"></path>
            </svg>
          </div>
          {/* Colored Background */}
          <div className='w-screen relative right-10 md:right-20 lg:right-40 bottom-0 bg-teal-500 dark:bg-[#06090e] text-white mt-[-1em]'>
            <ContactForm/>
          </div>
        </section>
      </main>
    </div>
  )
}
