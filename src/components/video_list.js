import React from 'react';

// ATTN:  Display-Only Component, so no state-holding class needed; use function-based Component only
// ATTN:  Stateless, HttpRequest-lifetime, props passed on JS STACK, and can be saved on local class instance property if persistence
//
// ATTN:  for a CLASS-based component, the JSX-passed-in properties can accessed via:  this.props
const VideoList = (props) => {
        return (
            // ATTN:  using Bootstrap CSS styling classes f
            // rom index.html
            // ALSO:  Bootstrp Column of width4, and use className naming convention to avoid conflict with JSX class
            // TODO:  lookup Bootstrap controls
            <ul className="col-md-4 list-group">
                {props.videos.length}
            </ul>
        );
};

export default VideoList;
