import React from 'react'
import '../components/Contact/ContactPage.css'

const data = [
  {
    id: 1,
    image: "https://dwdja6ta65an1.cloudfront.net/the_live_love_laugh/uploads/media/source/aEMKpV-Mitram.png",
    title: "Mitram Foundation",
    content: "Mitram Foundation is a suicide prevention helpline that aims to offer emotional support to those going through a crisis in their lives, especially the distressed, depressed and suicidal.",
    helpline: "080 2572 2573, +91 901 9708133",
    web: "https://www.mitramfoundation.org/",
  },
  {
    id: 2,
    image: "https://dwdja6ta65an1.cloudfront.net/the_live_love_laugh/uploads/media/source/POLYle-Mann-talks.png",
    title: "Mann Talks",
    content: "A Shantital Shanghvi Foundation initiative, Mann Talks focuses on empowering individuals to take charge of their mental health.",
    helpline: "+91-8686139139",
    web: "http://www.manntalks.org",
  },
  {
    id: 3,
    image: "https://dwdja6ta65an1.cloudfront.net/the_live_love_laugh/uploads/media/source/vArkjN-logo_vandrevala_foundation.png",
    title: "Vandrevala Foundation",
    content: "Cyrus & Priya Vandrevala Foundation is a non-profit organisation that aims to provide significant funding and aid contributions for those suffering from mental health problems and illnesses in India.",
    helpline: "9999 666 555 | WhatsApp: +1(256)6662142",
    web: "https://www.vandrevalafoundation.com/",
  },
  {
    id: 4,
    image: "https://dwdja6ta65an1.cloudfront.net/the_live_love_laugh/uploads/media/source/htneGp-Parivarthan.png",
    title: "Parivarthan",
    content: "Parivarthan Counselling, Training and Research Centre is a registered, non-profit society that provides multimodal services in the field of mental health(www.parivarthan.org).",
    helpline: "+91-7676602602",
    web: "https://parivarthan.org/",
  },
  {
    id: 5,
    image: "https://dwdja6ta65an1.cloudfront.net/the_live_love_laugh/uploads/media/source/zaOoyJ-Connection-NGO.png",
    title: "Connecting Trust",
    content: "Connecting NGO is a non-judgemental, non-advisory, confidential and anonymous space for those feeling low, distressed and/or suicidal.",
    helpline: "+91-9922001122, +91-9922004305",
    web: "https://connectingngo.org",
  },
  {
    id: 6,
    image: "https://dwdja6ta65an1.cloudfront.net/the_live_love_laugh/uploads/media/source/IbBcgo-voice-that-cares.jpg",
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