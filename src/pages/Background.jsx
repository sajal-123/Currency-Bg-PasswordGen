import {useState} from 'react'

function Background() {
    const [color,setColor]=useState('olive')
//  setColor("red")
  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" >
          <button className='outline-none px-4 text-white rounded-full' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>RED</button>
          <button  className='outline-none px-4 text-white rounded-full' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>BLUE</button>
          <button  className='outline-none px-4 text-white rounded-full' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>GREEN</button>
          <button className='outline-none px-4 text-white rounded-full' style={{backgroundColor:"indigo"}} onClick={()=>setColor("indigo")}>INDIGO</button>
          <button  className='outline-none px-4 text-white rounded-full' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>ORANGE</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default Background
