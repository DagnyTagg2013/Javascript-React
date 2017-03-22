
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
import React from 'react'
import ReactDOM from 'react-dom'

// ATTN:  import variable EXPORTED from another file Module!
// ATTN:  for FILE, or non-Node package imports, need to specify RELATIVE directory location to THIS CURRENT file; from file module imported
import SearchBar from './components/search_bar'

// ATTN:  API KEY for requests into YouTube!
const API_KEY = 'AIzaSyAYTJY-FZPfRj0dWHxXuPq0jqSLpJLpYHg';

// ATTN:  Create component; which produces HTML
// - const is ES6, FINAL var
// - JSX is a dialect of JS, looks like HTML; MORE compact than having JS to generate HTML
// - Webpack-Babel transpiles this into ES 2015 Javascript compatible to work on Browser

// ATTN:  App function is considered a CLASS with FACTORY METHOD, NOT as an INSTANCE,
//        so we need to instantiate INSTANCE prior to rendering that to DOM
// ATTN:  ES6 syntax for function() is () => {...
const App = () => {
    // return <div>Hello World!</div>
    // ATTN:  multiline JSX requires parens enclosing it for reability!
    // ATTN:  rendering of Search Bar; must use JSX tags to effectively transpile JSX to JS creating instance!
    return (
        <div>
            <SearchBar />
        </div>
    );
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



