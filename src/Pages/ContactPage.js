import React from 'react'
import '../components/Contact/ContactPage.css'

const data = [
  {
    id: 1,
    image: "https://www.mitramfoundation.org/wp-content/themes/mf/images/mitramfoundation-logo.png",
    title: "Mitram Foundation",
    content: "Mitram Foundation is a suicide prevention helpline that aims to offer emotional support to those going through a crisis in their lives, especially the distressed, depressed and suicidal.",
    helpline: "080 2572 2573, +91 901 9708133",
    web: "https://www.mitramfoundation.org/",
  },
  {
    id: 2,
    image: "https://www.manntalks.org/wp-content/themes/manntalk/assets/images/logo.svg",
    title: "Mann Talks",
    content: "A Shantital Shanghvi Foundation initiative, Mann Talks focuses on empowering individuals to take charge of their mental health.",
    helpline: "+91-8686139139",
    web: "http://www.manntalks.org",
  },
  {
    id: 3,
    image: "https://uploads-ssl.webflow.com/62ab7d5ccc9f587bce83c183/62ab7d7075cb31c2890fa6a6_Logo.png",
    title: "Vandrevala Foundation",
    content: "Cyrus & Priya Vandrevala Foundation is a non-profit organisation that aims to provide significant funding and aid contributions for those suffering from mental health problems and illnesses in India.",
    helpline: "9999 666 555 | WhatsApp: +1(256)6662142",
    web: "https://www.vandrevalafoundation.com",
  },
  {
    id: 4,
    image: "https://parivarthan.org/wp-content/uploads/2020/03/parivarthan-gray-logo.png",
    title: "Parivarthan",
    content: "Parivarthan Counselling, Training and Research Centre is a registered, non-profit society that provides multimodal services in the field of mental health(www.parivarthan.org).",
    helpline: "+91-7676602602",
    web: "https://parivarthan.org/",
  },
  {
    id: 5,
    image: "https://www.healthymind.org/images/logo.png",
    title: "Institute for Psychological Health",
    content: "IPH IS A SOCIAL ENTERPRISE WITH A STRONG COMMUNITY MENTAL HEALTH FOCUS",
    helpline: "+91-9922001122, +91-9922004305",
    web: "https://www.healthymind.org/",
  },
  {
    id: 6,
    image: "https://www.rocf.org/wp-content/uploads/2019/06/ROC_Logo_final-190.png",
    title: "Voice That Cares (ROCF)",
    content: "Voice That Cares is a free public helpline that provides psychosocial counselling support on a wide range of mental health matters including anxiety, fear, panic attacks, guilt, grief, loneliness etc.",
    helpline: "8448-8448-45",
    web: "https://www.rocf.org/voice-that-cares/",
  },
  // Add more data objects as needed
];

const ContactPage = () => {
  return (
    <div>
     
     <div className='contact-grid'>
     <div className="card-grid">
     {data.map((card) => (
       <div key={card.id} className="card">
         <img src={card.image} alt={card.title} />
         <h3>{card.title}</h3>
         <p>{card.content}</p>
         <p><span className='highlight'>Helpline:</span> {card.helpline}</p>
         <p><span className='highlight'>Website:</span><br/><a href={card.web}>{card.web}</a></p>
       </div>
     ))}
   </div>
     </div>
    </div>
  )
}

export default ContactPage