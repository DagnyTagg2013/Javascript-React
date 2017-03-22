// ATTN:  ES6 syntax for specifying SPECIFIC classname referred from package, so then package qualifier NOT needed for that classname here
// import React from 'react';
import React, { Component } from 'react';

/*
const SearchBar = () => {
    return <input />;        // ATTN:  transpiles JSX tag into React.createElement... , so need to import React! with semicolon
};
*/

// ATTN:  modify from FUNCTIONAL above, to SELF-MONITORING-STATE, create ES6 class, NOT same as a CSS Class
// ATTN:  use ES6 to import Component, so then no need to qualify name
// class SearchBar extends React.Component {
class SearchBar extends Component {
    // ATTN:  must override this method of Component, and store state via using function as above to SAVE search string input
    render() {
        return <input />;
    }
}

// ATTN:  only export PUBLIC stuff for external modules to IMPORT
export default SearchBar;

// ATTN:  DEFER rendering to index.js!


