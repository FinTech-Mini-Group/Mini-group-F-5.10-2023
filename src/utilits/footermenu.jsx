import { Link, useNavigate } from "react-router-dom";
import { icons } from '../utilits/icons'


export const buyers = [
 {
   linkName:<Link to={'/'}>Как сделать заказ</Link>,
    slug: "/zakaz",
 },   
 {
   linkName: "Способы оплаты",
   slug: "/Способы оплаты",
 },
 {
   linkName: "Доставка",
   slug: "/Доставка",
 },  
 {
   linkName: "Возврат товара",
   slug: "/Возврат товара",
 },  
 {
   linkName: "Возврат денежных средств",
   slug: "/Возврат денежных средств",
 },  

]

export const Partnyor = [
{
   linkName: "Продать на маркетплейсе",
   slug: "/Продать на маркетплейсе",
},
{
   linkName: "Наши магазины",
   slug: "/Наши магазины",
},
{
   linkName: "Перевозчикам",
   slug: "/Партнерский пункт выдачи",
},
{
   linkName: "Партнерский пункт выдачи",
   slug: "/Партнерский пункт выдачи",
},
]

export const company = [
{
   linkName: <Link to={'/AboutUs'}>О нас</Link>,
   slug: "/О нас",
},
{
   linkName: "Реквизиты",
   slug: "/Реквизиты",
},
{
   linkName: "Пресс-центр",
   slug: "/Пресс-центр",
},
]

export const networks = [
   {
      linkName: '',
      href : 'https://web.telegram.org/a/',
      slug: "/telegram",
      icons : icons.telegram
   },
   {
      linkName: '',
      href : 'https://www.instagram.com/',
      slug: "/instagram",
      icons : icons.Instagram
   },  
   {
      linkName: '',
      href : 'https://www.facebook.com/?locale=ru_RU',
      slug: "/facebook",
      icons : icons.Facebook
   },  
]
