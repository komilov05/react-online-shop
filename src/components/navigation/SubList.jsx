

function SubList({open}){
    return(
        <ul style={{display: open ? 'block' : 'none'}} className="bg-gray-50 opacity-80 p-2 absolute transition-all">
            <li>Shoes</li>
            <li>Clothes</li>
            <li>Watches</li>
            <li>Fashions</li>
        </ul>
    )
}

export default SubList