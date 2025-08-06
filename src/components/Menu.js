import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ResInfo from './ResInfo';
import Shimmer from './Shimmer';
import MenuSection from "./MenuSection";
// import MenuSection from "./MenuSection";
// import useMenu from "../hooks/useMenu";
// import NormalMenu from "./NormalMenu";

const Menu = () =>{
    // const params = useParams();
    const {id} = useParams();   
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getMenu = async() =>{
            try{
                const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
                const json = await data.json();
                setLoading(false)
                setMenuData(json?.data?.cards);
                console.log("json", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
            }
            catch(err){
                console.log("menu api error", err)
            }
        }
        getMenu();
    },[])

    if(loading){
        return (<div className="container d-flex flex-wrap gap-4">
            <Shimmer/>
            </div>)
    }
  const menuCategories = menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const normalMenu = menuCategories.filter((menuCategory) => {
    return (
      menuCategory?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  const nestedMenu = menuCategories.filter((menuCategory) => {
    return (
      menuCategory?.card?.card["@type"] === 
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  });
// const normalMenu = menuData.filter((menuCategory)=>{
//     return(
//         menuCategory?.card?.card["@type"]=="type.google.apis.com/swiggy.presentation.food.v2.NestedItemCategory"
//     )
// })

// const nestedMenu = menuData.filter((menuCategory)=>{

  console.log("normal menu", normalMenu);
  console.log("nestedMenu", nestedMenu);

    

    const {name, avgRating, totalRatingsString, costForTwoMessage, cuisines,sla,expectationNotifiers} = menuData[2]?.card?.card?.info
    const {slaString, lastMileTravelString} = sla;
    const {enrichedText} = expectationNotifiers[0]
    
    
    
  return (
    <div className="menu_container p-3">
      <ResInfo
        name={name}
        avgRating={avgRating}
        ratingCount={totalRatingsString}
        costForTwo={costForTwoMessage}
        cuisines={cuisines.join(", ")}
        deliveryTime={slaString}
        remark={enrichedText}
      />
      {/* <div className="p-3">
        {normalMenu.map((normalCategory, index) => {
          return (
           <NormalMenu normalCollection={normalCategory} isActive={activeIndex===index}
           toggleFunction={()=>showDetails(index)}/>
          );
        })}
      </div> */}
      <div className="p-3">
        {normalMenu.map((normalCategory) => {
          return (
            <>
            <h5 key={normalCategory?.card?.card?.title}>{normalCategory?.card?.card?.title}</h5>
            {
              normalCategory?.card?.card?.itemCards.map((dish)=>{
                return(
                  <>
                  <MenuSection
                  isVeg={dish?.card?.info?.isVeg}
              name={dish?.card?.info?.name}
              // costForTwo={dish?.card?.info?.defaultPrice ? dish?.card?.info?.defaultPrice/100 : dish?.card?.info?.price/100}
              costForTwo={dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100}
              avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
              ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
              description={dish?.card?.info?.description}
              imageUrl={dish?.card?.info?.imageId}
              />
              <hr/>
              </>
              )
              })
            }
            {/* <MenuSection
              isVeg={normalCategory?.card?.card?.itemCards[0]?.card?.info?.isVeg}
              name={normalCategory?.card?.card?.itemCards[0]?.card?.info?.name}
              costForTwo={normalCategory?.card?.card?.itemCards[0]?.card?.info?.defaultPrice/100}
              avgRating={normalCategory?.card?.card?.itemCards[0]?.card?.info?.ratings?.aggregatedRating?.rating}
              ratingCount={normalCategory?.card?.card?.itemCards[0]?.card?.info?.ratings?.aggregatedRating?.ratingCount}
              description={normalCategory?.card?.card?.itemCards[0]?.card?.info?.description}
              imageUrl={normalCategory?.card?.card?.itemCards[0]?.card?.info?.imageId}  
            /> */} 
            </>
          );
        })}
      </div>
      <div>{
        nestedMenu.map((category)=>{
          return(
            <div>
            <h4>{category?.card?.card?.title}</h4>
            {
              category?.card?.card?.categories.map((subCategory)=>{
                return(
                  <>
                  <h5 className="text-secondary">{subCategory?.title}</h5>
                  {
                    subCategory?.itemCards.map((dish)=>{
                      return(
                        <MenuSection
                          isVeg={dish?.card?.info?.isVeg}
                          name={dish?.card?.info?.name}
                          costForTwo={dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100}
                          avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
                          ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
                          description={dish?.card?.info?.description}
                          imageUrl={dish?.card?.info?.imageId}
                        />
                      );
                      
                    })
                  }
                  </>
                )
              })
            }
            </div>
          )
        })
      }
      </div>  
    </div>
  );
};

export default Menu;


// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import ResInfo from './ResInfo';
// import Shimmer from './Shimmer';
// import MenuSection from "./MenuSection";
// import useMenu from "../hooks/useMenu";
// import NormalMenu from "./NormalMenu";
// import NestedMenu from "./NestedMenu";

// const Menu = () => {
//   const { id } = useParams();
//   const menuList = useMenu(id);
//   console.log("custom hook data", menuList);
//   const [activeIndex, setActiveIndex] = useState(0);

 
//   if (menuList.length===0) {
//     return (
//       <div className="container d-flex flex-wrap gap-4">
//         <Shimmer />
//       </div>
//     );
//   }

//   const menuCategories = menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

//   const normalMenu = menuCategories.filter((menuCategory) => {
//     return (
//       menuCategory?.card?.card["@type"] ===
//       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     );
//   });

//   const nestedMenu = menuCategories.filter((menuCategory) => {
//     return (
//       menuCategory?.card?.card["@type"] === 
//       "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
//     );
//   });

//   console.log("normal menu", normalMenu);
//   console.log("nestedMenu", nestedMenu);

//   const {
//     name,
//     avgRating,
//     totalRatingsString,
//     costForTwoMessage,
//     cuisines,
//     sla,
//     expectationNotifiers,
//   } = menuList[2]?.card?.card?.info;
//   const { slaString, lastMileTravelString } = sla;
//   const { enrichedText } = expectationNotifiers[0];
//   const showDetails = (val)=>{
//     if(activeIndex===val){
//       setActiveIndex(-1)
//     }
//     else
//     {
//       setActiveIndex(val);
//     }
    
//   }


//   return (
//     <div className="menu_container">
//       <Resinfo
//         name={name}
//         avgRating={avgRating}
//         ratingCount={totalRatingsString}
//         costForTwo={costForTwoMessage}
//         cuisines={cuisines.join(", ")}
//         deliveryTime={slaString}
//         remark={enrichedText}
//       />
//       <div className="p-3">
//         {normalMenu.map((normalCategory, index) => {
//           return (
//            <NormalMenu normalCollection={normalCategory} isActive={activeIndex===index}
//            toggleFunction={()=>showDetails(index)}/>
//           );
//         })}
//       </div>
//       <div>
//         {nestedMenu.map((category) => {
//           return (
//             <NestedMenu collection={category}/>
//             // <div>
//             //   <h4>{category?.card?.card?.title}</h4>
//             //   {category?.card?.card?.categories.map((subCategory) => {
//             //     return (
//             //       <>
//             //         <h5 className="text-secondary">{subCategory?.title}</h5>
//             //         {subCategory?.itemCards.map((dish) => {
//             //           return (
//             //             <MenuSection
//             //               isVeg={dish?.card?.info?.isVeg}
//             //               name={dish?.card?.info?.name}
//             //               costForTwo={
//             //                 dish?.card?.info?.defaultPrice / 100 ||
//             //                 dish?.card?.info?.price / 100
//             //               }
//             //               avgRating={
//             //                 dish?.card?.info?.ratings?.aggregatedRating?.rating
//             //               }
//             //               ratingCount={
//             //                 dish?.card?.info?.ratings?.aggregatedRating
//             //                   ?.ratingCount
//             //               }
//             //               description={dish?.card?.info?.description}
//             //               imageUrl={dish?.card?.info?.imageId}
//             //             />
//             //           );
//             //         })}
//             //       </>
//             //     );
//             //   })}
//             // </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Menu;