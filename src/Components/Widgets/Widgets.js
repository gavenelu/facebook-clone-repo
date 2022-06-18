import React from 'react';
import "./Widgets.css";

function Widgets() {

    return (
        <div className='widgets'>
            <iframe
                title='FB'
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgary&tabs=timeline&width=350&height=1500&small_header=false&adapt_container_width=true&lazy=true&hide_cover=false&show_facepile=true&appId=387855053316297"
                width="350"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; 
                clipboard-write;
                encrypted-media;
                picture-in-picture;
                web-share">
            </iframe>
        </div >
    )
}

export default Widgets