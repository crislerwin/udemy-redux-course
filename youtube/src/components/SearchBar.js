import React, { Component } from 'react'
import { Segment, Input}  from 'semantic-ui-react'
class SearchBar extends Component {


    buscaVideo = (e) => {
        if (e.keyCode === 13){
            console.log(e.target.value)
        }

    }

    render() {
        return (

         <div className="search-bar">
            <Segment stacked>
                <Input icon='search' placeholder='Search...' onKeyDown={this.buscaVideo} />
            </Segment>
         </div>
        )
    }
}

export default SearchBar 