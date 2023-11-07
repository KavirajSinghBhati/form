import React from 'react'
import './Signup.css'
// import TextField from '@mui/material/TextField';
const Signup = () => {

  return (
    <>
  <div className='sign'>
  <h1>Create your <br/> PopX account</h1>
    <div className="container">
      <div className="entryarea">
        <input type="text" required placeholder='Enter Full name'/>
        <div className="labelline">Full name *</div>
     </div>
     <div className="entryarea">
        <input type="text" required placeholder='Enter Phone number'/>
        <div className="labelline">Phone Number*</div>
     </div>
     <div className="entryarea">
        <input type="text" required placeholder='Enter Email Address'/>
        <div className="labelline">Email Address *</div>
     </div>
     <div className="entryarea">
        <input type="text" required placeholder='Enter Password'/>
        <div className="labelline">Password *</div>
     </div>
     <div className="entryarea">
        <input type="text" required placeholder='Company Name'/>
        <div className="labelline">Company Name </div>
     </div>
     </div>
    </div>

    

    <div className="radiocontainer">
    <div> Are you an Agency?</div>
    <div className='wrap-radio'>
        <div class="wrapper-class">
          <input type="radio" id="yes" />
          <label for="yes">Yes</label>
        </div>
        <div class="wrapper-class">
          <input type="radio" id="no" />
          <label for="no">No</label>
        </div>
        </div>
    </div>
    

<div>
   <button className='signbutton'>Create Account </button>
   </div>
   </>
  )
}

export default Signup;