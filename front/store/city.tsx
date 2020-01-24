import React,{FC} from 'react';
import {useObserver} from 'mobx-react-lite';
import {storeContext} from './context'; 
type Cities ={
    cities: string[]
}; 
export const CityView:FC<Cities> = ({cities}) => {
    return (
        <ul>
            {cities.map(city => <li>{city}</li>)}
        </ul>
    );
}

export const CityList = () => {
    const store = React.useContext(storeContext);
    if(!store) throw Error("Store shouldn't be null");
    return useObserver(() => (
        <CityView cities={store.filteredCities} />
    ))
}

export default CityList;
