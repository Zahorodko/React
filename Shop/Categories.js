import React, { useState } from "react";
import "./ShopP.css"

 const Categories = (props) => {
    const [Categor, setCategor] = useState([{key: 'all',name: 'All'},{key: 'biurko',name: 'Biurko'},{key: 'szafa',name: 'Szafa'},{key: 'krzeslo',name: 'Krzesło'},{key: 'sofa',name: 'Sofa'}])
    return(
        <div className='categories'>
        {Categor.map(el=>(
            <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>
                {el.name}
            </div>
        ))}
        </div>
    )
}
export default Categories