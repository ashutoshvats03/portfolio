// "use client"
// import Image from 'next/image'
// import React, { useState } from 'react'
// import Link from 'next/link'


// // bg-[rgb(56,56,56)]
// function page() {
//   const [page,setPage]=useState("About")
//   return (
//     <div className=' '>
//       {/* right section */}
//       <div className='right min-w-[35%] max-w-[40%] relative bg-zinc-800 py-16 px-10 border-1 border-white rounded-3xl '>
//         {page === "About" && <About />}
//         {page === "Blog" && <Blog />}
//         {page === "Portfolio" && <Portfolio />}
//         {page === "Contact" && <Contact />}
//         {page === "Resume" && <Resume />}
        
//       </div>
//     </div>
//   )
// }

// export default page
"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


function Page() {
  const router = useRouter()
  router.push('/About')
  return (
    <div>
      
    </div>
  )
}

export default Page
