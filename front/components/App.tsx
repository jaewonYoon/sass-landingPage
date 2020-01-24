import React,{FC} from 'react';
import Search from './Search'; 
import CityList from '../store/city';
import StoreProvider from '../store/context';

const App: FC = () => {
    return (
        <StoreProvider>
            <div className="App">
                <header className="App-header">
                    <Search/>
                    <CityList/>
                </header>
            </div>
        </StoreProvider>
    )
}

export default App;