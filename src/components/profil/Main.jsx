import React, { useState } from 'react'
import Profil from './Profil'
import { icons } from '../../utilits/icons'
import PersonalInfo from './PersonalInfo'
import Favorites from './Favorites'
import Purchases from './Purchases'
import Reviewses from './Reviewses'

function Main() {
  const tabsMenu = [{ProfilName:'Главное', Profilicon:icons.glav},  
                    {ProfilName:'Избранное',Profilicon:icons.izbran }, 
                    {ProfilName:'Покупки',Profilicon:icons.bag}, 
                    {ProfilName:'Отзывы',Profilicon:icons.like}, 
                    {ProfilName:'Профиль' , Profilicon:icons.profile}]
  const [activeTabs, setActiveTabs] = useState('Главное')
  return (
    <>
    <div className='flex container m-auto'>
        <ul className='lg:flex gap-8 my-8'>
         {
            tabsMenu.map((element,value)=>{
                return(
                    <li key={value} onClick={()=>setActiveTabs(element.ProfilName)} className='flex items-center gap-4 cursor-pointer text-Body hover:text-Cmain'>{element.Profilicon}{element.ProfilName}</li>
                )  
            })
         }
      
         </ul>
    </div>
      <Profil title = {activeTabs}/>
      <PersonalInfo title = {activeTabs}/>
      <Favorites title = {activeTabs} />
      <Purchases title = {activeTabs} />
      <Reviewses title = {activeTabs}/>
   </> 
  )
}

export default Main