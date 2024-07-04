import { HostUrl } from "../constants/restaurants"
// component for rendering menu component under menu details
const MenuSection=({isVeg,name,cost,avgRating,ratingCount,description,imgUrl})=>{
    return(
        <div className="d-flex justify-content-between">
            <div>
                <p>{isVeg?"🟢":"🔴"}</p>
                <h6>{name}</h6>
                <h6>{cost}</h6>
                <h6 className="text-success">⭐{avgRating} <span className="text-secondary">{ratingCount}</span></h6>
                <p className="text-secondary">{description}</p>
            </div>
            <div>
                <img src={HostUrl + imgUrl} alt="" style={{width:"200px",height:"200px"}}/>
            </div>
        </div>
    )

}
export default MenuSection;