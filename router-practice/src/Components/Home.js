import "./text.css"
import React, { Component } from "react";
class User extends Component {
  constructor() {
    super()
    this.User=React.createRef();
    this.User1=React.createRef();
    this.state = {
      Userlist: [
        { id: 1, name: "hp", username: "mohamed" },
        { id: 2, name: "dell", username: "Imran" }
      ]
    };
  }
  displayRow = () =>
    this.state.Userlist.map((item) => (
      <tr key={item.id} >
        <td className="row">{item.name}</td>
        <td className="row">{item.username}</td>
        <td className="row"><input type="button" value="Edit" className="buttontb" onClick={()=>{this.HandleEdit(item)}}></input><input type="button" value="Delete" style={{"marginLeft":"10px"}} className="bittontb" onClick={()=>this.Removelist(item.id)}></input></td>
      </tr>
    ));
Removelist(id)
{
  const newlist=this.state.Userlist.filter((l)=> l.id !== id)
  this.setState({
   Userlist:newlist
})
}
HandleEdit(item) {
  stringone = "Edit user";
  stringtwo = "Update user";
  this.forceUpdate();
  this.User1.current.value = item.name;
  this.User.current.value = item.username;
  this.forceUpdate();
  this.Removelist(item.id);
}
HandleChange()
{  
  const id1=ID;
  ID++;
  const name1=this.User1.current.value;
  const username1=this.User.current.value;
  const updatedlist=this.state.Userlist.concat({id:id1,name:name1,username:username1});
  console.log(updatedlist);
  this.setState({
    Userlist:updatedlist
  })
  stringone="Add user";
  stringtwo="Add new user";
  this.User1.current.value="";
  this.User.current.value="";
  this.forceUpdate();
}
  render() {
    return (
      <>
        <div className="Text"> Welcome to user screen of user management </div>
        <div className="Redbox">
          <p className="title">User component</p>
          <section className="sectionbox1">
            <p className="title1">{stringone}</p>
            <form>
              <p >Name</p>
              <input type="text" ref={this.User1}className="formelement" ></input>
              <p>Username</p>
              <input type="text" ref={this.User} className="formelement"></input>
              <input type="button" value={stringtwo} className="buttontype" onClick={()=>this.HandleChange()} ></input>
            </form>
          </section>
          <section className="sectionbox2">
            <p className="title1">View users</p>
              <table>
              <thead>
                <tr >
                  <th className="tableh">Name</th>
                  <th className="tableh">Username</th>
                  <th className="tableh">Actions</th>
                </tr>
              </thead>
              <tbody>{this.displayRow()}</tbody>
            </table>
          </section>
        </div>
      </>
    );
  }
}
var ID=3;
let stringone="Add user";
let stringtwo="Add new user";
export default User;