
import { Link } from 'react-router-dom'
import search_image from '../image/search.png'
const Header = (props) => {

    const { cat, SetCat } = props;
    const { search, SetSearch, searched, SetSearched } = props;
    const getVal = (e) => {
        const value = e.target.id
        SetCat(value);
    }
    const getSearch = (e) => {
        const value = e.target.value;
        SetSearch(value);
    }
    const getSearched = () => {
        const value = search
        SetSearched(value);
    }
    return (
        <div>


            <div className="header">
                <div className='header-name'><p>Oğuzhan Öztürk</p></div>
                <div className='header-company'><h2>NEWS</h2></div>
                <div className='header-search'><input placeholder="search..." id="search-bar" value={search} onChange={getSearch} onKeyPress={event => {
                    if (event.key == 'Enter') {
                        getSearched();
                        let btn = document.getElementById('search-link');
                        btn.click();
                    }
                }}></input>
                    <Link style={{ textDecoration: 'none' }} to={`/search`} id="search-link" onClick={getSearched}> <button id="search-btn"><img src={search_image}></img></button></Link>
                </div>
            </div>

            <div className="header-items">
                <div className="header-item">
                    <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/`} >Home</Link>
                </div>
                <div className="header-item">
                    <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/categories`}><p id="categories" onClick={getVal}>Categories</p></Link>
                </div>
                <div className="header-item">
                    <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/category`}><p id="Business" onClick={getVal}>Business</p></Link>
                </div >
                <div className="header-item">
                    <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/category`}><p id="Entertainment" onClick={getVal}>Entertainment</p></Link>
                </div>
                <div className="header-item">
                    <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/category`}><p id="General" onClick={getVal}>General</p></Link>
                </div>
                <div className="header-item">
                    <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/category`}><p id="Health" onClick={getVal}>Health</p></Link>
                </div>
                <div className="header-item">
                    <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/category`}><p id="Science" onClick={getVal}>Science</p></Link>
                </div>
                <div className="header-item">
                    <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/category`}><p id="Sports" onClick={getVal}>Sports</p></Link>
                </div>
                <div className="header-item">
                    <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/category`}><p id="Technology" onClick={getVal}>Technology</p></Link>
                </div>
                <div className="header-item">
                    <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/aboutme`}><p id="AboutMe" onClick={getVal}>About Me</p></Link>
                </div>







            </div>
        </div>

    )
}

export default Header;