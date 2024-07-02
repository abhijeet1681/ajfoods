const Carousel = () => {
  return <div className="text-center">This is carousel section</div>;
};

export default Carousel



// // CarouselComponent.js
// import React from 'react';
// import Slider from 'react-slick';

// const CarouselComponent = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div>
//       <h2> Delivery Carousel </h2>
//       <Slider {...settings}>
//         <div>
//           <img src="path/to/your/image1.jpg" alt="Image 1" />
//         </div>
//         <div>
//           <img src="path/to/your/image2.jpg" alt="Image 2" />
//         </div>
//         <div>
//           <img src="path/to/your/image3.jpg" alt="Image 3" />
//         </div>
//         <div>
//           <img src="path/to/your/image4.jpg" alt="Image 4" />
//         </div>
//         <div>
//           <img src="path/to/your/image5.jpg" alt="Image 5" />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default CarouselComponent;
