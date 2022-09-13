import React,{useState,useEffect,useRef} from 'react'
import {close,logo,menu,newLogo} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  const [deskToggle,setDeskToggle] = useState(false)

  const refOne = useRef(null)

  useEffect(()=>{
    document.addEventListener("click",handleClickOutside,true)
  },[])

  const handleClickOutside = (e) =>{
    if(!refOne.current.contains(e.target)) {
      console.log("clicked outside")
    }else{
      console.log("clicked inside")
    }
  }

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={newLogo} alt="bank" className='w-[180px] h-[120px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer ${index===navLinks.length - 1 ? `mr-0` :`mr-10` } text-white text-[16px] mr-10 `}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
        <button onClick={()=>setDeskToggle((prev)=> !prev)} class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
          
        <div className={`${deskToggle ? 'flex':'hidden'} p-6 bg-black-gradient absolute  right-0 mx-4 my-2 min-w-[240px] rounded-xl sidebar mt-10`} ref={refOne}>
            <ul className='list-none flex flex-col  justify-end items-center flex-1'>
              {navLinks.map((nav,index)=>(
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer ${index===navLinks.length - 1 ? `mb-0` :`mb-4` } text-white text-[16px]  `}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
        </div>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={()=>setToggle((prev) => !prev)} />
      </div>
      <div className={`${toggle ? 'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar mt-10`}>
          <ul className='list-none flex flex-col  justify-end items-center flex-1'>
            {navLinks.map((nav,index)=>(
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer ${index===navLinks.length - 1 ? `mb-0` :`mb-4` } text-white text-[16px]  `}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
      </div>

    </nav>
  )
}

export default Navbar
