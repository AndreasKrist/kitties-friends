import React from "react";

const Card = (props) =>{
    const{name, email,id} = props;
    return(
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?set=set4`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card