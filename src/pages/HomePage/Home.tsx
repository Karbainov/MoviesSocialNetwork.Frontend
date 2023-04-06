import NewFromFriends, { ICard } from './components/NewFromFriends/NewFromFriends';
import './Home.scss';
import film1 from "./components/NewFromFriends/images/film1.jpg";
import film2 from "./components/NewFromFriends/images/film2.jpg";
import film3 from "./components/NewFromFriends/images/film3.jpg";
import film4 from "./components/NewFromFriends/images/film4.jpg";
import film5 from "./components/NewFromFriends/images/film5.jpg";
import film6 from "./components/NewFromFriends/images/film6.jpg";
import avt1 from"./components/NewFromFriends/images/avt1.jpg";
import avt2 from"./components/NewFromFriends/images/avt2.jpg";
const cards:ICard[]=[
{
  id:1,
  imageSrc:film1,
  friendName:"karsten",
  friendImageSrc:avt1,
  date:"Mar 30",
  review:"yep",
  rate:"3"
},
{
  id:2,
  imageSrc:film2,
  friendName:"karsten",
  friendImageSrc:avt2,
  date:"Mar 30",
  rate:"3"
},
{
  id:3,
  imageSrc:film3,
  friendName:"karsten",
  friendImageSrc:avt1,
  date:"Mar 30",
  review:"yep",
  rate:"3"
},
{
  id:4,
  imageSrc:film4,
  friendName:"karsten",
  friendImageSrc:avt1,
  date:"Mar 30",
  rate:"3"
},
{
  id:5,
  imageSrc:film5,
  friendName:"karsten",
  friendImageSrc:avt1,
  date:"Mar 28",
  rate:"3"
},
{
  id:6,
  imageSrc:film6,
  friendName:"karsten",
  friendImageSrc:avt2,
  date:"Mar 30",
  rate:"3"
},
{
  id:7,
  imageSrc:film1,
  friendName:"karsten",
  friendImageSrc:avt1,
  date:"Mar 29",
  rate:"3"
},
{
  id:8,
  imageSrc:film2,
  friendName:"karsten",
  friendImageSrc:avt1,
  date:"Mar 3",
  rate:"3"
},
// {
//   id:9,
//   imageSrc:film4,
//   friendName:"karsten",
//   friendImageSrc:avt2,
//   date:"Mar 88",
//   rate:"3"
// },
]



export const Home=()=>{
 return(
   <div className='container'>
    <NewFromFriends cards={cards} />
   </div>
 )
}
export default Home;