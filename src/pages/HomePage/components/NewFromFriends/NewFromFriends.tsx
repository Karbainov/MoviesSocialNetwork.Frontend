import './NewFromFriends.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '@fortawesome/fontawesome-svg-core/styles.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { text } from 'node:stream/consumers';
import { textSpanEnd } from 'typescript';


export interface ICard {
   id: number;
   imageSrc: string;
   friendName: string;
   friendImageSrc: string;
   date: string;
   review?: string;
   rate?: string;
}
export interface ICards {
   cards: ICard[];
}


export const NewFromFriends = (props: ICards) => {
   const { cards } = props;
   return (
      <section id="new_from_friends">
         <h1>Welcome back, <a href="#">user</a> . Here’s what your friends have been watching…</h1>
         <div className="carousel">
            <div className="section_header">
               <h2>
                  <a href="#">
                     NEW FROM FRIENDS
                  </a>
               </h2>
               <a href="#" className='all_activity'>
                  ALL ACTIVITY
               </a>
            </div>
            <Slider
               autoplay
               infinite={true}
               speed={500}
               slidesToShow={4}
               slidesToScroll={1}
               initialSlide={0}
               responsive={[
                  {
                     breakpoint: 1024,
                     settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                     }
                  },
                  {
                     breakpoint: 600,
                     settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                     }
                  },
                  {
                     breakpoint: 480,
                     settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                     }
                  }
               ]}
               className='slick'
            >
               {cards.map((card) =>
                  <div className='poster' key={card.id}>
                     <div className="inside">
                        <a href="#">
                           <img src={card.imageSrc} alt="image_link" />
                           {/* <span>bla</span> */}
                        </a>
                        <div className='poster_footer'>
                           <a href="#">
                              <img src={card.friendImageSrc} alt="avatar_img" />
                           </a>
                           <a className='friend_name' href='#'>{card.friendName}</a>
                        </div>
                     </div>

                     <div className="poster_data">
                        {/* Your   <FontAwesomeIcon icon="coffee" symbol="beverage-icon" /> */}
                        {card.review && <a href="#" className='review'>
                           {card.review}
                        </a>}
                        <span>{card.date}</span>
                     </div>
                  </div>
               )}
            </Slider>
         </div>

      </section>

   )
}
export default NewFromFriends;