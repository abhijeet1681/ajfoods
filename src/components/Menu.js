import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ResInfo from './ResInfo';
import Shimmer from './Shimmer';
import MenuSection from "./MenuSection";
import { useCart } from '../context/CartContext';

const Menu = () =>{
    const {id} = useParams();   
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addItem } = useCart();

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

    const handleAddToCart = (dish) => {
        const cartItem = {
            id: dish?.card?.info?.id || Math.random().toString(36),
            name: dish?.card?.info?.name,
            price: dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100,
            description: dish?.card?.info?.description,
            imageId: dish?.card?.info?.imageId,
            isVeg: dish?.card?.info?.isVeg,
            restaurantId: id
        };
        addItem(cartItem);
    };

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
      <div className="p-3">
        {normalMenu.map((normalCategory) => {
          return (
            <div key={normalCategory?.card?.card?.title}>
            <h5>{normalCategory?.card?.card?.title}</h5>
            {
              normalCategory?.card?.card?.itemCards.map((dish)=>{
                return(
                  <div key={dish?.card?.info?.id || Math.random()}>
                  <MenuSection
                  dish={dish}
                  isVeg={dish?.card?.info?.isVeg}
              name={dish?.card?.info?.name}
              costForTwo={dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100}
              avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
              ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
              description={dish?.card?.info?.description}
              imageUrl={dish?.card?.info?.imageId}
              handleAdd={() => handleAddToCart(dish)}
              />
              <hr/>
              </div>
              )
              })
            }
            </div>
          );
        })}
      </div>
      
      <div className="p-3">
        {nestedMenu.map((category) => {
          return (
            <div key={category?.card?.card?.title}>
              <h4>{category?.card?.card?.title}</h4>
              {category?.card?.card?.categories.map((subCategory) => {
                return (
                  <div key={subCategory?.title}>
                    <h5 className="text-secondary">{subCategory?.title}</h5>
                    {subCategory?.itemCards.map((dish) => {
                      return (
                        <div key={dish?.card?.info?.id || Math.random()}>
                          <MenuSection
                            dish={dish}
                            isVeg={dish?.card?.info?.isVeg}
                            name={dish?.card?.info?.name}
                            costForTwo={
                              dish?.card?.info?.defaultPrice / 100 ||
                              dish?.card?.info?.price / 100
                            }
                            avgRating={
                              dish?.card?.info?.ratings?.aggregatedRating?.rating
                            }
                            ratingCount={
                              dish?.card?.info?.ratings?.aggregatedRating
                                ?.ratingCount
                            }
                            description={dish?.card?.info?.description}
                            imageUrl={dish?.card?.info?.imageId}
                            handleAdd={() => handleAddToCart(dish)}
                          />
                          <hr/>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;