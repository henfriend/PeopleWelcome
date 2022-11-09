import Ai from "./Ai"
import { useState } from "react"

function LeftBar() {
    const [data, setData] = useState([{name : 'John Lennon'}, {name: 'George Harrison'}, {name: 'Ringo Starr'}, {name: 'Paul McCartney'}, {name: 'George Martin'}])

    return(
        <div className='leftnav'>
            <h1>AIs</h1>
            <ul>
                {data.map((value, i) => {
                    return i % 2 === 0 && <li key={i}>
                        <Ai value={value.name}/>
                    </li>
                })}
            </ul>
            <ul className="rightlist">
                {data.slice(0, data.length - 1).map((value, i) => {
                    return i % 2 === 1 && <li key={i}>
                        <Ai value={value.name}/>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default LeftBar