// import React from 'react'

// const About = () => {
//   return (
//     <div className='mh-100'>
//       This is About
//     </div>
//   )
// }

// export default About;

import React from 'react'
import UserClass from './UserClass'
import User from './User'

const About = () => {
  return (
    <>
    <UserClass name="Abhi" district="Mumbai" country="India" email="abhi123@gmail.com"/>
    <User name="Abhijeet Jadhav" district="Thane" country="India" email="jabhijeet9274@gmail.com"/>
    </>
  )
}

export default About;

// import React from 'react'
// import UserClass from './UserClass'
// import User from './User'

// const About = () => {
//   return (
//     <>
//       <UserClass  country="country1" email="email1"/>
//       {/* <UserClass name="Child2" country="country2" email="email2"/>
//       <UserClass name="Child3" country="country3" email="email3"/> */}
//       {/* <User name="Nitesh Gupta" country="India" email="nitesh@nmail.com" /> */}
//     </>
//   )
// }

// export default About