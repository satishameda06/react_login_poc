import React ,{Component}from 'react';
class Users extends Component{
  constructor(props){
      super(props)
      console.log("what are the pros rae genearint here",props);
    //   console.log(this.props.Logoutclick);
  }
  render(){
      return(
      <div> user list is loading....
          <div>
            Please click here logout the function :
         <button onClick={(e)=>this.props.Logoutclick(e)}>Logout</button>
          </div>
      </div>
      )
  }
}
export default Users;