import React from 'react';


export default function Navbar() {
  return (
    <>
<div className='flex bg-teal-500 h-28 sticky top-0 '>
 <div className='flex items-center justify-center '>
  <img className='w-24 pl-2 ml-32' src="https://s3-alpha-sig.figma.com/img/2cc9/dbff/3a31ead5f05863e77180115f5d540fc9?Expires=1697414400&Signature=DT6CVe-Orky-384jdypbjq3kYyjUVlyHTKIQXkR6l8BsRsyd4kkImepe4wQdYnoXVSqVavhLi6Uxj9ti7XpB6a2AfD0AkjmEX2RGPph84S48bSvPBG0ISsK2olEz58c~de3C8AB7PIa4zIwrRK-WiCDzqQ3vylka7gySvVW2s0aVuLfsmA~aPcN8Q~DoExHZpdt4rJTbR5~bVI-dgDmS8YHWPsJpN-lquw98gWL-yjM75cpMQO4Ntv6NS4~cNVzgINPs-jX~1iTyK14dNcJgxAXs5kTvtWWS-PYnIJTtgNHARSIExmM-wscZlvtVPnYdje76P50wqUt9HLRwGjjHfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="logo" />
 </div>
 <ul className='  px-60 flex justify-evenly items-center text-right '>
    <a href="#" className=' leading-tight font-medium text-2xl px-8 py-3 hover:cursor-pointer hover:bg-white hover:rounded-3xl '>HOME</a>
    <a href="#"  className=' decoration-slate-600  leading-tight font-poppins text-2xl px-8 py-3 hover:cursor-pointer hover:bg-white hover:rounded-3xl '>EVENTS</a>
    <a href="#"  className=' leading-tight font-poppins text-2xl px-8 py-3 hover:cursor-pointer hover:bg-white hover:rounded-3xl  '>TEAM</a>
    <a href="#"  className="leading-tight font-poppins text-2xl px-8 py-3 hover:cursor-pointer hover:bg-white hover:rounded-3xl ">ABOUT US</a>
    <a href="#"  className=' leading-tight font-poppins  text-2xl px-8 py-3 hover:cursor-pointer hover:bg-white hover:rounded-3xl '>CONTACT</a>
 </ul>
</div>
    </>
  )
}
