import productcard from '../assets/Group 260.png'
import productcard1 from '../assets/Group 260 (1).png'
import productcard2 from '../assets/Group 260 (2).png'
import productcard3 from '../assets/Group 260 (3).png'
import productcard4 from '../assets/Group 260 (4).png'
import elektronica from '../assets/Rectangle 657.png'
import yuviler from '../assets/Rectangle 659.png'
import knigi from '../assets/Rectangle 658.png'
import kanstovar from '../assets/Rectangle 661.png'
import shkola from '../assets/Rectangle 660.png'
import avtotovar from '../assets/Rectangle 662.png'
import sport from '../assets/Rectangle 651.png'
import zootovar from '../assets/Rectangle 652.png'
import mebel from '../assets/Rectangle 653.png'
import mujchinam from '../assets/Rectangle 654.png'
import jenshinam from '../assets/Rectangle 655.png'
import obuv from '../assets/Rectangle 656.png'
import { icons } from '../utilits/icons'


export const products=[
{name:"Macbook Air 13 M1 8gb RAM / 256gb SSD storage", img:productcard, discount:"15", price:"1 727 019 "},
{name:"Холодильник Samsung ARTRB-31FERNDWW", img:productcard1, discount:"15%", price:"235 464 "},
{name:"Macbook Air 13 M1 8gb RAM / 256gbSSD storage", img:productcard2, discount:"15", price:"796 987 "},
{name:"Macbook Air 13 M1 8gb RAM / 256gbSSD storage", img:productcard3, discount:"15", price:"1 906 625 "},
{name:"Macbook Air 13 M1 8gb RAM / 256gbSSD storage", img:productcard4, discount:"15", price:"856 517 "},
]
export const category=[
    {name:"Электроника", img:elektronica, path:"electronic"},
    {name:"Ювелирные изделия", img:yuviler},
    {name:"Книги", img:knigi},
    {name:"Канцтовары", img:kanstovar},
    {name:"Школа", img:shkola},
    {name:"Автотовары", img:avtotovar},
    {name:"Спорт", img:sport},
    {name:"Зоотовары", img:zootovar},
    {name:"Мебель", img:mebel},
    {name:"Мужчинам", img:mujchinam},
    {name:"Женщинам", img:jenshinam},
    {name:"Обувь", img:obuv},
]

export const ekonom=[
    {name:"Качество и экономия", names:"Comprehensive quality control and affordable prices", icons: icons.medalstar , },
    {name:"Быстрая доставка", names:"Быстрая и удобная доставка от двери до двери", icons:icons.vuesax},
    {name:"Безопасность платежей", names:"Более 10 различных безопасных способов оплаты", icons:icons.shieldtick},
    {name:"Выгодные цены", names:"Цены пропорциональны рыночным ценам", icons:icons.moneys}, 
    {name:"Есть вопросы?", names:"Круглосуточное обслуживание клиентов - мы здесь и рады помочь", icons:icons.message}, 

]
