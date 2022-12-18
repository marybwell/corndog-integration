import React from "react"; 

const Actor = (props) => {

    const { actor, onClickActor } = props;

    return (
        <div className="actor" onClick={onClickActor}>
            <img
                src={
                    actor.profile_path ?
                        `https://image.tmdb.org/t/p/original${actor.profile_path}` :
                        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                }
                alt="profile"
            />
            <div className="actorContainer">
                
                    <p>{actor.original_name}</p>
            
            </div><iframe width="1268" height="713" src="https://www.youtube.com/embed/E2TVEtHvUNQ" title="DC The Don - On The Low (Unreleased)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Actor;