import React from 'react';

const Scrolll=(props) =>
{
    return(
<div style={{overflow: 'scroll',height:'800px',border:'5px solid green'}}>
    {props.children}
</div>
    );
}
export default Scrolll;