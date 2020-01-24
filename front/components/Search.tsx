import React from 'react';
import {useObserver} from 'mobx-react-lite';
import {storeContext} from '../store/context';

const Search: React.FC = () => {
    const store = React.useContext(storeContext); 

    const {query,setQuery} = store;

    return useObserver(() => {
        return <input value={query.get()} 
        onChange={e => setQuery(e.target.value)} />; 
    });
}

export default Search;