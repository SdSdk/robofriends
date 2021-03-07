import React from 'react'

const Searchh=({searchfun})=>
{
   return(
       <div className='pa3'>
<input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search Robots' onChange={searchfun}></input>
       </div>
       
   )
}

export default Searchh;