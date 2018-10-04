import React from 'react';
const ImageIcon = (props) =>{
   return(
      <div>
        <img src={props.imgSrc}  alt=""  width="200" height="200" className="mx-auto d-block"/>
      </div>
   )

}

export default ImageIcon;
