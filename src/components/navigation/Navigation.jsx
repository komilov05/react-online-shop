import NavList from "./NavList"


function Navigation(){
    return(
        <div className=" py-4 bg-gray-200">
            <div className="flex mx-auto px-6 justify-between items-center">
                
                <NavList/>
                <p>30 Days Free Return</p>
            </div>
        </div>
    )
}

export default Navigation