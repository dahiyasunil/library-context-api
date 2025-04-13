import { Link } from "react-router"

function Nav(){
    return(
        <nav className="flex justify-between bg-gray-200 p-5">
            <div>
                <p class="text-2xl">Kitaab</p>
            </div>
            <div className="flex gap-10">
                <Link to="/">Books</Link>
                <Link to="/">Add</Link>
                <Link to="/">Delete</Link>
            </div>
        </nav>
    )
}

export default Nav;