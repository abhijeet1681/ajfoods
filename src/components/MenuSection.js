// import { HostUrl } from "../constants/restaurants"
// // component for rendering menu component under menu details
// const MenuSection=({isVeg,name,cost,avgRating,ratingCount,description,imgUrl})=>{
//     return(
//         <div className="d-flex justify-content-between">
//             <div>
//                 <p>{isVeg?"🟢":"🔴"}</p>
//                 <h6>{name}</h6>
//                 <h6>{cost}</h6>
//                 <h6 className="text-success">⭐{avgRating} <span className="text-secondary">{ratingCount}</span></h6>
//                 <p className="text-secondary">{description}</p>
//             </div>
//             <div>
//                 <img src={HostUrl + imgUrl} alt="" style={{width:"200px",height:"200px"}}/>
//             </div>
//         </div>
//     )

// }
// export default MenuSection;



import { IMG_URL } from "../const/config"

const MenuSection = ({isVeg, name, costForTwo, avgRating, ratingCount, description, imageUrl, handleAdd}) =>{
    
    return(
        // <div className="d-flex p-2 justify-content-between align-items-center">
        <div className="d-flex p-2 justify-content-between">
            <div>
                <div className="ab">
                {/* <p>{isVeg ? "🟢" : "🔴"}</p> */}
                <p>{isVeg ?
                <img style={{width:"30px", height:"30px", borderRadius:"0px"}} src="../veg.png"/> :
                <img style={{width:"30px", height:"30px", borderRadius:"0px"}} src="../non-veg.png"/>}</p></div>
                <h6>{name}</h6> 
                <h6>Rs. {costForTwo}</h6>
                <p className="text-success">⭐{avgRating} <span className="text-secondary">({ratingCount})</span></p>
                <p className="text-secondary">{description}</p>
            </div>
            <div>
                <img style={{width:"150px", height:"150px", objectFit:"cover", borderRadius:"20px"}} src={IMG_URL+imageUrl}/>
                <br/><br/>
                <button onClick={handleAdd}>Add to cart</button>
            </div>
        </div>
    )
}

export default MenuSection