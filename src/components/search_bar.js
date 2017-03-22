// ATTN:  ES6 syntax for specifying SPECIFIC classname referred from package,
// so then package qualifier NOT needed for that classname below
// import React from 'react';
import React, { Component } from 'react';

// ATTN:  below is pur functional way to do this, which is LESS flexible
/*
const SearchBar = () => {
    return <input />;        // ATTN:  transpiles JSX tag into React.createElement... , so need to import React! with semicolon
};
*/

// ATTN:  modify from FUNCTIONAL above
// why?  for SELF-MONITORING-STATE, create ES6 class, NOT same as a CSS Class
// ATTN:  use ES6 to import Component, so then no need to qualify name
class SearchBar extends Component  {

    // STATE STEP1:  use = ONCE to initialize in ctor
    constructor(props) {
        super(props);
        // ATTN:  init javascript Object() like Python dictionary
        // - http://stackoverflow.com/questions/351495/dynamically-creating-keys-in-javascript-associative-array
        this.state = {term: 'Default Hello World!'};
    }

    // ATTN:  must override this method of Component, and store state via using function as above to SAVE search string input
    //        AUTO-invoke on JSX tag invocation
    render() {
        // ATTN:  HTML control to monitor User Event, hookup with CALLBACK event-handler vis {} javascript injection to tag
        //        onChange is predefined React property
        // return <input />;
        // return <input onChange={this.onInputChange} />
        // ATTN:  below is ES6 inline function call, making explicit separate function declaration unecessary!
        // return <input onChange = { (event) => console.log(event.target.value) } />;
        // STATE STEP2:  within Event Notified callback, use setState() on THIS Component to notify React framework of modification,
        //               THEN React will update all DOM child dependencies
        //               TODO:  lookup what this means!
        // ATTN:  curly braces surrounding embedded Javascript within JSX HTML-LIKE
        // ATTN TRICKY: changing Component target STATE does
        //              NOT automatically mean re-rendering Component with updated state,
        //              INSTEAD, we must call .setState to do this
        // DECOUPLEs component STATE from actual UI-EVENT-TRIGGERED CHANGE!
        return (
            <div>
                <div>
                    <br/>
                    Input Edit Control:
                    <br/>
                    <input
                        value = { this.state.term }
                        onChange = { (event) => this.setState( { term: event.target.value } ) }
                    />
                </div>
                <div>
                    <br/>
                    Display of State Updates in Real-Time:
                    <br/>
                    <textarea rows="1" cols="20" value={ this.state.term } />
                </div>
            </div>
        );
    }

    // ATTN:  event-handler function, takes event data
    onInputChange(event) {
        // ATTN:  can printout to Chrome DevTools
        console.log(event.target.value)
    }
}

// ATTN:  only export PUBLIC stuff for external modules to IMPORT
export default SearchBar;

// ATTN:  DEFER rendering call to embed within index.js!


