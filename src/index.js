
// ATTN:  need to ACCESS Javascript modules FROM other file, OR from NPM package, so need IMPORT statement
// ATTN:  Javascript Modules with IMPORT statement is more CURRENT
//        var React = require("react");
//        https://bytearcher.com/articles/loading_modules_with_require/
//        http://stackoverflow.com/questions/31354559/using-node-js-require-vs-es6-import-export
//        i.e. ES6 import/export replaces CommonJS require/module.exports
//        PACKAGE is filename with RELATIVE PATH to root of this web project;
//        and MODULES internally must be EXPORTED to be visible
// ATTN:  to RENDER, need SEPARATE reactDOM library,
//        vs react library which just handles component creation and management!
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// ATTN:  NPM package for YouTube API!
import YTSearch from 'youtube-api-search';

// ATTN:  import variable EXPORTED from another file Module!
// ATTN:  for FILE, or non-Node package imports, need to specify RELATIVE directory location to THIS CURRENT file; from file module imported
import SearchBar from './components/search_bar'
import VideoList from  './components/video_list';

// ATTN:  API KEY for requests into YouTube!
const API_KEY = 'AIzaSyDBy6w2I6AILIjDzswggfb4NP4ouLsSqkk';
const FIRST_SEARCH_TERM = 'surfboards';

// ATTN:  Create component; which produces HTML
// - const is ES6, FINAL var
// - JSX is a dialect of JS, looks like HTML; MORE compact than having JS to generate HTML
// - Webpack-Babel transpiles this into ES 2015 Javascript compatible to work on Browser

// ATTN:  App function is considered a CLASS with FACTORY METHOD, NOT as an INSTANCE,
//        so we need to instantiate INSTANCE prior to rendering that to DOM
// ATTN:  ES6 syntax for function() is () => {...
/*
const App = () => {
    // return <div>Hello World!</div>
    // ATTN:  multiline JSX requires parens enclosing it for reability!
    // ATTN:  rendering of Search Bar; must use JSX tags to effectively transpile JSX to JS creating instance!
    // NOTE:  how rendering call from class is implicit, vs using pure function!
    return (
        <div>
            <SearchBar />
        </div>
    );
}
*/
// *******************************************
// QUICK TEST: API call
/*
YTSearch( {key: API_KEY, term: FIRST_SEARCH_TERM},
              function(data) { console.log(data); } );
*/

// *******************************************
// KEY POINT:  REFACTOR above FUNCTION-based to CLASS-based component
//             to handle centralized AJAX DATA-STORAGE
//             on CTOR of component, stored in user Session-state; ACROSS Http Calls!
class App extends Component {

    constructor(props) {
        super(props);
        // ATTN:  initialize to JS Object with value List of videos
        this.state = { videos: [] }
        // ATTN:  AJAX API call with API key, with CALLBACK function supplied based on returned data type
        // TODO:  explain authentication key protocol
        // NOTE:  ES6 protocol if name of data same as state object store key, then just use single 'videos' without colon
        YTSearch( {key: API_KEY, term: FIRST_SEARCH_TERM},
                  (data) => {
                                // NOTE:  logs direct return from API
                                //console.log(data);
                                // NOTE:  saves data from API!
                                this.setState({ videos: data })
                                // NOTE:  logs that data got assigned to state videos dictionary correctly
                                console.log(this.state.videos);
                            }
        );
    }

    // ATTN:  pass data from PARENT Component App to Child Component VideoList via JSX Props:  videos=, and using Javascript object!
    // NOTE:  initial delay from 0 count to X due to API network lag!
    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos="{this.state.videos}" />
            </div>
        );
    }


}

// ATTN:  Takes generated HTML from COMPONENT above, then SHOWs it in the Page DOM
// ATTN:  uses ReactDOM package to RENDER
// ATTN:  need to use *** </App> JSX to TRANSLATE/INVOKE factory method from Javascript-generated FACTORY CLASS
//        above to create a specific INSTANCE!  OTHERWISE ERROR: attempt to instantiate CLASS error!
//        => use JSX HTML-LIKE TAGs to INSTANTIATE INSTANCEs from functions above!
//        OTHERWISE, we get ERROR that we need to call createElement to create INSTANCE
// ATTN:  SECOND arg specifies WHERE in HTML element in STATIC index.xml you render component to;
//        or ROOT 'container' DIV in index.html! OTHERWISE ERROR:  TARGET DOM element!
//        <div class="container"></div>
ReactDOM.render(<App />, document.querySelector('.container'));



