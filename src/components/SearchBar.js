import React from "react";

class SearchBar extends React.Component{
    
    // onInputChange(event){
    // console.log(event.target.value);
    // }
    state={term:''}; //controlled elements

    onFormSubmit=(event)=> {
        event.preventDefault(); //to prevent from auto submission of forms
        // console.log(this.state.term);
                    // or
        this.props.onSearch(this.state.term); //child to parent communication
    }

    render() {
        return (
            
        <div className="ui segment">
            {/* <h1>Search Here: </h1> */}
            
            <form onSubmit={this.onFormSubmit}  className="ui form">
                <div className="field" >
                    <label >Search Pics : </label>
                        <input
                            style={{border:'3px solid violet'}}
                            type="search"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value }) } />
                </div>
                
            </form>
            
            </div>
        )
    }
}

export default SearchBar;