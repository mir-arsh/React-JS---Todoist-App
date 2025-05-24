import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";

export default function Header(props) {
  return (
    <div className="headerContainer">
      <div className="headLink">
        <Link to="/"><p>Home</p></Link>
        <Link to="/about"><p>About</p></Link>
      </div>
      <div className="header">
        <h1 className='Heading1'>React.js</h1>
        <h1 className='Heading2'>{props.title2}</h1>
      </div>
    </div>
  )
}

Header.defaultProps = {
    title2: "Title not Specified"
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};