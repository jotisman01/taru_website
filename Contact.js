import React from 'react'

export default function Contact() {
  return (
    <div>
      <p className=' py-14 text-center text-5xl font-bold'>Contact Us</p>
      <div className='flex'>
        <div className='Contact px-6 '> 
         <img src="https://s3-alpha-sig.figma.com/img/e06a/0c01/aff2b36e84812b8085609fffab651dda?Expires=1697414400&Signature=LpVbdrLCKWQp~tR~AABroRBAuCNd2sEkYyfnw4w8oKZ4dN4FEtzI4RPQaPDht7nSG1Uf4Va~EPd7S-Xg8hpdIzL4xYyRirZCum21y7YU5iIOovizRWSkZ6mwe0ztEGaSGsZm0P1laNBP3rDvXcr~4i8qqrkcDQj3vd4tnXY9CCy6FycySlviiBpNNdF4f1e~3Z6SRwMb-e5QAc4i2y~xAnSE19Pf1pF1Bsz0nMlWwryrF0MwkuukpU1HY~c8GAQJ3OkmdGWyi8WevNt9si6MEDjr7yHd-tmny6KxC5i3tmjjNKJLBCAHFUq9R2QVh8ruF0fFxDoSs0Bc2r3uekXJsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        </div>
        <div >
         <p className=' Text  text-cyan-900 text-7xl font-extrabold' >Simply dummy text of the printing </p>
         <p className='Small_letters text-xl py-4 text-cyan-900 '>Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
         <div> 
           <span className='flex py-12 px-8'>
           <i class="fa-regular fa-4x fa-envelope text-teal-800"></i>
           <div className=''>

           <p className='px-20 font-bold text-3xl text-teal-800'>Massege</p>
           <p className='px-20 text-lg'>support@saasflow.com</p>
           </div>
           </span>
           <span className='flex py-10 px-8'>
           <i class="fa-solid fa-phone fa-4x text-teal-800"></i>
           <div className=''>

           <p className='px-20 font-bold text-3xl text-teal-800 '>Contact Us</p>
           <p className='px-20 text-lg'>+01 123 456 789</p>
           </div>
           </span>
           <div className='flex text-cyan-800'>
           <i class="fa-brands fa-2x fa-instagram  px-10 g-slate-300 rounded-2xl"></i>
           <i class="fa-brands fa-2x fa-facebook px-10" ></i>
           <i class="fa-brands fa-2x fa-twitter px-10 "></i>
           <i class="fa-brands fa-2x fa-pinterest px-10 " ></i>
           </div>
         </div>
        </div>
      </div>
      <div className='flex contact-2 p-8 m-16' >


        <form action="">

         <span >
        <div className='flex px-32 py-8 '> 
        <span className='flex flex-col px-32  '>
        <p>Full Name</p>
        <input type="text" placeholder='Enter Your Name' className='px-20 rounded-lg py-3'/>
        </span>
        <span>
        <p>Your Email</p>
        <input type="text" placeholder='Enter Your Email' className='px-20 rounded-lg py-3'/>
        </span>
        </div>
        </span>

        <span>
        <div className='flex px-32 py-8'> 
        <span className='flex flex-col px-32  '>
        <p>Phone NO.</p>
        <input type="text" placeholder='Enter Your Phone' className='px-20 rounded-lg py-3'/>
        </span>
        <span>
        <p>Branch</p>
        <input type="text" placeholder='Enter Your Branch' className='px-20 rounded-lg py-3'/>
        </span>
        </div>
        </span>

        <div className=' px-64 flex-col'>
          <p>Massege</p>
          <textarea name="Write" id="" cols="108" rows="6" placeholder='Write Here' className=' rounded-lg'></textarea>
        </div>
         <div className='px-64 py-8'>
        <button className='px-8 py-4 bg-slate-800 text-slate-50 rounded-3xl'>Send Massege</button>
         </div>

        </form>


      </div>
    </div>
  )
}
