import {Link} from 'react-router-dom';

const Menu = () => {
  return  (
    <div className="menu">
      <h1 className="menu-title">FBI Suspects</h1>
      <ul className="menu-list">
        <Link to="/"> <li>Home</li></Link>
        <Link to="/new-suspect"><li>New Suspect</li></Link>
      </ul>
    </div>
  );
}

export default Menu;