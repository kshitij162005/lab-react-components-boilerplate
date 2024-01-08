import React from 'react';

const Body = (imageData) => {
    return (
        <div>
            {
                imageData.imageData.map(image => {
                    return (
                        <div key={image.id} className="column">
                            <img src={image.img} alt=""></img>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Body;
