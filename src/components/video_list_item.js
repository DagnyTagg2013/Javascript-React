import React from 'react';

const VideoListItem = ({video}) => {

    // can view DETAILs of items!
    console.log(video)

    const imageUrl = video.snippet.thumbnails.default.url;

    // ATTN:  ES6 = ({video}) => equivalent to below:
    // const video = props.video from (props) =>

    // ATTN:  use CSS styling classes, with attribute className, not just class!
    return (
        <li className="list-group-item">
            <div className = "video-list media">
                <div className="media-left">
                    <img className = "media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );

};

export default VideoListItem;
