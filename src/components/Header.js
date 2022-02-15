import { Routes ,Route, Link, BrowserRouter as Router } from 'react-router-dom';
const Header = ( {title} ) => {
  return (
    <header>
        <nav>
        <img  className="logo" src="logo.png">
        </img>
        <div className="navoptions">
       
            <Link to="Homepage" className='navoptions'> Home  </Link>
            <Link to="Page1" className='navoptions'>News</Link>
            <Link to="Page1" className='navoptions'>Contact</Link>
            <Link to="Page1" className='navoptions'>About</Link>

        </div>
        </nav>
        <div className="header"> 
         {/* Model Hall of Residence  */}
        
        </div>
    </header>
  )
};
export default Header
