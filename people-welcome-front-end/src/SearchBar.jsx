import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'

function SearchBar({ placeholder, data }) {
    // state of data shown below search bar
    const [filteredData, setFilteredData] = useState([])

    // filter to determine what data will be shown under search bar
    const filter = (event) => {
        const searchWord = event.target.value
        if(searchWord === '') {
            setFilteredData([])
        } else {
            const newFilter = data.filter((value) => {
                return value.title.toLowerCase().includes(searchWord.toLowerCase())
            })
            setFilteredData(newFilter)
        }
    }

    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={filter}/>
                <div className="searchIcon">
                    <BsSearch/>
                </div>
            </div>
            {filteredData.length != 0 &&
            <div className="dataResult">
                {filteredData.map((value, key) => {
                    return <a className='dataItem' href={value.link} target='_blank'> <p>{value.title}</p> </a>
                })}
            </div>}
        </div>
    )
}

export default SearchBar