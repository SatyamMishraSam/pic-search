import React from 'react';
import axios from 'axios';
// import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";
import ImageList from './ImageList';

class App extends React.Component{
    state= { images: [] };

    onSearchSubmit=async(term)=>{
        // console.log(term);       
       const response = await axios.get('https://api.unsplash.com/search/photos', {
           params: { query: term },
           headers: {
               Authorization: 'Client-ID 3uz9MRnSKy_M5jYrvQyYugtH_XHPo25CURNMBoLlHh0'
           }
       });
    //    console.log(response.data.results);
       this.setState({ images: response.data.results });
    }

    render(){
        return (
            
            <div className="ui container" style={{ marginTop: '50px',border:'3px solid red', borderRadius:'10px'  }}>
             <SearchBar onSearch={this.onSearchSubmit} />
{/* in above we are comunicating from child to parent with the method onSearch */}
                <ImageList images={this.state.images} />
                </div>         
        )
    }
}

export default App;