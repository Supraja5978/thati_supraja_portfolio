import {Link} from 'react-router-dom';



const Header=()=>{

    const navStyle = {
        display: "flex",
        gap: "30px"
    }

    return(
        <header className='py-2' style={{display:'flex', justifyContent:'space-around', backgroundColor: "#313030ff"}}>
            <div className='d-flex justify-content-center'>
                <h2><Link to="/" style={{color: 'whitesmoke', textDecoration: "none"}}>Home</Link></h2>
            </div>
            <nav style={{display: "flex", alignItems: "center"}}>
                <ul style={navStyle} className='m-0'>
                    <Link to="/About"  style={{ color: "whitesmoke", textDecoration: "none"}}>About Me</Link>
                    <Link to="/Projects"  style={{ color: "whitesmoke", textDecoration: "none" }}>Projects</Link> 
                    <Link to="/Contact"  style={{ color: "#6498c9ff", textDecoration: "none" }}>Contact</Link>
                </ul>
            </nav>

        </header> 
    );

}

export default Header;