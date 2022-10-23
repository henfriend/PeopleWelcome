import { BsSearch } from 'react-icons/bs'

function SearchBar({ placeholder, data }) {
    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} />
                <div className="searchIcon">
                    <BsSearch/>
                </div>
            </div>
            <div className="dataResult"></div>
        </div>
    )
}

export default SearchBar