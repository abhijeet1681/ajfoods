const Restaurantcard = ({imgUrl, title, starRating, deliveryTime, cuisines, location}) => {
  // imgUrl, title, starRating, deliveryTime, cuisines, location--------------------
    return(
      <div className="custom-card">
        <div className="mb-2">
          <img 
         src={imgUrl}
        //  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"---------------------
        />
        </div>
        <div className="px-2">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between">
        <div>⭐{starRating}</div>
          <div>{deliveryTime}min</div>
        </div>
        <div className="text-secondary">{cuisines}</div>
        <div>{location}</div>
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
