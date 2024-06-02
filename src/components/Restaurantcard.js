// const Restaurantcard = ({imgUrl, title, starRating, deliveryTime, cuisines, location}) => {
//   // imgUrl, title, starRating, deliveryTime, cuisines, location--------------------
//     return(
//       <div className="custom-card">
//         <div className="mb-2">
//           <img 
//          src={imgUrl}
//         //  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"---------------------
//         />
//         </div>
//         <div className="px-2">
//         <h5>{title}</h5>
//         <div className="d-flex justify-content-between">
//         <div>⭐{starRating}</div>
//           <div>{deliveryTime}min</div>
//         </div>
//         <div className="text-secondary">{cuisines}</div>
//         <div>{location}</div>
//         </div>
//       </div>
//     )
//   };

// export default Restaurantcard;


// Method-2

import { IMG_URL } from "../const/config";
const Restaurantcard = ({cloudinaryImageId, name, avgRating, sla, cuisines, areaName}) => {
  // imgUrl, title, starRating, deliveryTime, cuisines, location--------------------
    return(
      <div className="custom-card">
        <div className="mb-2">
          <img 
         src={IMG_URL+cloudinaryImageId}
        //  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"---------------------
        />
        </div>
        <div className="px-2">
        <h5 className="shop-name">{name}</h5>
        <div className="d-flex justify-content-between">
        <div><svg width="30" height="25" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#ffdf00"></stop><stop offset="1" stopColor="#ff4d02"></stop></linearGradient></defs></svg>{avgRating}</div>
          <div>{sla?.deliveryTime}min</div>
        </div>
        <div className="text-secondary cuisines">{cuisines.join(", ")}</div>
        <div>{areaName}</div>
        </div>
      </div>
    )
  };

export default Restaurantcard;

// Amish Method

// const Restaurantcard=({areaName,avgRating,cuisines,name})=>{
//   return(
//       <div className="Restaurantcard mb-4">
//           <div className="image">
//               {/* <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" alt="" className="w-100" style={{height:"250px"}}/> */}
//               <h1></h1>
//           </div>
//           <div className="content px-2">
//               <h4>{name}</h4>
//               <div className="d-flex justify-content-between"><span>⭐{avgRating}</span> <span>25-30 mins</span></div>
//               <div>{cuisines.join(",")}</div>
//               <p>{areaName}</p>
//           </div>
//       </div>
//   )
// }
// export default Restaurantcard
