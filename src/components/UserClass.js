// ClassBase Component

import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            count2 : 2
        };
    }
    render(){
        console.log("render is called")
        const {name, district, country, email} = this.props
        const {count, count2} = this.state
        return( 
            <div className="classbase">
            <div>Name : {name}</div>
            <div>District : {district}</div>
            <div>Country : {country}</div>
            <div>email id : {email}</div>
            {/* <div>Count : {this.state.count}</div> */}
            <div>Count : {count}</div>
            {/* <div>Count2 : {this.state.count2}</div> */}
            <div>Count2 : {count2}</div>
            <button onClick={()=>{this.setState({count : this.state.count+1})}}>Increase</button>
        </div>  
        )
    }
    componentDidMount(){
        console.log("component did mount is called")
    }
}

export default UserClass;

// import React from "react";
// import UserContext from "../utils/UserContext";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name : "dummy name",
//       count : 1
//     };
//     // console.log(this.state.name+"constructor is called")
//   }

//   async componentDidMount(){
//     // const data = await fetch ("https://randomuser.me/api/")
//     // const json = await data.json();
//     // console.log("api data", json?.results[0]?.name?.first);
//     // this.setState({name:json?.results[0]?.name?.first})
//     // console.log(this.state.name+"component did mount is called")
//     // this.interval = setInterval(()=>{
//     //   console.log("Interval is created")
//     // }, 1000)
//   }

    //   componentDidUpdate(prevProps, prevState){
    //     // console.log(this.state.name+"component did update is called")
    //     if(this.state.count!==prevState.count){
    //       console.log("updated value of count is", this.state.count)
    //     }
    //   }
// //cleanup activities//
// componentWillUnmount(){
//   // console.log(this.state.name+"component will unmount is called")
//   // clearInterval(this.interval)
// }
//   render() {
//     console.log(this.state.name+"render is called")
//     const {country, email } = this.props;
//     const {name, count} = this.state
//     return (
//       <div style={{ border: "1px solid pink" }}>
//         <div>Name : {name}</div>
//         <div>Country : {country}</div>
//         <div>Email id : {email}</div>
//         <h2>{count}</h2>
//         <button onClick={()=>{
//           this.setState({count : this.state.count+1})
//         }}>Increase</button>
//         <UserContext.Consumer>
//           {(data)=><h1>Username : {data?.username}</h1>}
//         </UserContext.Consumer>
//       </div>
//     );
//   }
// }

// export default UserClass;