import React from 'react';
import 'tachyons'
const Card=({name,email,id}) =>
{
   return(
       <div className='tc bg-light-green dib br3 pd3 ma2 grow shadow-5 bw7'>
           <img alt='robots' src={`https://robohash.org/${id}?200x200`}></img>
           <div>
           <h1>{name}</h1>
           <p>{email}</p>
           </div>
      
       </div>
   );
}

export default Card;