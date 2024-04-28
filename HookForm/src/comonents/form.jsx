import { useState } from "react";

function Form(props) {
    const [Firstname,setFirstName] = useState("")
    const [LastName,setLastName] = useState("")
    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("")
    const [ConfirmPassword,setConfirmPaswword] = useState("")

    return(
        <form action="" className="user">
            
        <div >
            <div className="fn1 border">
            <label htmlFor="">First Name</label>
            <input type="text" onChange={e => setFirstName(e.target.value)} />
            </div>

            <div className="fn1">
            <label htmlFor="">Last Name</label>
            <input type="text" onChange={e => setLastName(e.target.value)}/>
            </div>

            <div className="fn1">
            <label htmlFor="">Email</label>
            <input type="email" onChange={e => setEmail(e.target.value)}  />
            </div>

            <div className="fn1">
             <label htmlFor="">Password</label>
             <input type="password"  onChange={e => setPassword(e.target.value)} />
             </div>

             <div className="fn1">
             <label htmlFor="">Confirm Password</label>
             <input type="password"  onChange={e => setConfirmPaswword(e.target.value)} />
             </div>

        </div>
        <h1>Your form data</h1>
        <h2>FirstName : {Firstname} </h2>
        <h2>LastName : {LastName}</h2>
        <h2>Email : {Email}</h2>
        <h2>Password : {Password}</h2>
        <h2>ConfirmPassword : {ConfirmPassword}</h2>

        </form>
     

    )
    

}
export default Form;
