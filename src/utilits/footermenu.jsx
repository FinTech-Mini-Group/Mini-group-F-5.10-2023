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
      linkName: 'https:t.me/zulfiqor1988',
      href : 'https:t.me/zulfiqor1988',
      slug: "/telegram",
      icons : icons.telegram
   },
   {
      linkName: '',
      slug: "/instagram",
      icons : icons.Instagram
   },  
   {
      linkName: '',
      slug: "/facebook",
      icons : icons.Facebook
   },  
]
