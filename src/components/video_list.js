import React from 'react';
// ATTN:  RELATIVE path-directory from THIS files' location
import VideoListItem from './video_list_item';
import sprintf from 'sprintf-js';

// ATTN:  Display-Only Component, so no state-holding class needed; use function-based Component only
// ATTN:  ALSO DEFER RENDER to CALLER Component!
// ATTN:  Stateless, HttpRequest-lifetime, props passed on JS STACK, and can be saved on local class instance property if persistence

// ATTN:  for a CLASS-based component, the JSX-passed-in properties can accessed via:  this.props
// ATTN:  favor JS .map() and iterators over LOOPs!
const VideoList = (props) => {

        // ATTN:  ES6 = ({video}) => equivalent to below:
        // const video = props.video from (props) =>

        // ATTN:  capture data from HttpRequest into this method for later display, and REACT knows to handle a LIST-ARRAY type!
        // ATTN:  need to provide KEY so React knows how to index into item for targeted data refresh; otherwise Warning-Error!
        // BUG:  EVALUATION requires {} with NO quotes!
        console.log('Video_list.js: \ntype of props.videos type passed in from index.js via {this.state.videos}\n": ' + Object.prototype.toString.call(props.videos));
        const videoItems = props.videos.map((video) => {
                                                            return <VideoListItem key={video.etag} video={video} />
                                                       }
                                            );
        return (
            // ATTN:  using Bootstrap CSS styling classes f
            // rom index.html
            // ALSO:  Bootstrap Column of width4, and use className naming convention to avoid conflict with JSX class
            // TODO:  lookup Bootstrap controls
            // NOTE:  can initially put {props.videos.length} to test initial parameters-passing!
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        );
};

export default VideoList;
