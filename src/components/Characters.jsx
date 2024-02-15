import React from 'react'
import Description from './Description'
import Question from './Question'
import Reviews from './Reviews'

function Characters() {
  return (
    <div>
          <ul className='flex my-5'>
         {
              tabsMenu.map((element, value) => {
                return (
                  <li  key={value} onClick={() => setActiveTabs(element)} ><button className={activeTabs === element ? 'list-none py-2 px-4 rounded-[4px] border-[1px] border-solid mr-5 text-Body text-brand hover:bg-bgmain hover:text-Cwhite ' :
                  'list-none py-2 px-4 rounded-[4px] border-[1px] border-solid mr-5 text-Body text-brand hover:bg-bgmain hover:text-Cwhite '}>{element}</button></li>
                )
              })
            }
           
         </ul>   
            <Character title={activeTabs} />
            <Description title={activeTabs} />
            <Question title={activeTabs} />
            <Reviews title={activeTabs} />
         
    </div>
  )
}

export default Characters