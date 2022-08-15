import Button from "./button"
import PropTypes from 'prop-types';

const Header = ({title , onClick, show}) => {

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={show ? 'Close' : 'Add'} color={show ? "red" : "green" }onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Manager'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
