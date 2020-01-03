import React from 'react';

const Search = (props)=>(
    <form>
        <input id='searchField' type="text" placeholder='Search'/>
        <input type="button" value="Go!" onClick={()=>(props.search(document.getElementById('searchField').value))}></input>
    </form>
)
export default Search;