import React from 'react';
import './Track.css'


function Track(props) {
   
  function renderAction() {
    if(props.isRemoval) {
    return <button className="Track-action">-</button>
  } else {
    return <button className="Track-action">+</button>
  }
};
  
  
  return (
      <div className="Track">
         <div className="Track-information">
           {/* <h3></h3> */}
            <h3>{props.track.name}</h3>
           {/* <p></p> */}
           <p>
          {props.track.artist} | {props.track.album}
          </p>
         </div>
         {/* <button class="Track-action">- or + will go here</button> */}
         {renderAction()}
      </div>
    );
  
}

export default Track;