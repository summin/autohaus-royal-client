import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import navlogo from '../_media/images/logo.png'
import { userActions, getContentFocus, expandNav } from '../_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUserCircle,
    faFileAlt,
    faEnvelope,
    faChartArea,
    faCheck,
    faShareSquare,
    faCalendarAlt,
    faCalendarCheck

} from '@fortawesome/free-solid-svg-icons'

class Header extends Component {

    constructor(props) {
        super(props);
    }

    onClickLogout = (e) => {
        return this.props.logout
    }
    
    render() {
        return (
            <Navbar
                bg="secondary"
                expand="md"
                className="header fixed-top m-0 p-0">
                <button
                    onClick={this.props.expand}
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Navbar.Brand>
                    <h6 className="ml-2 mt-2"> A.Leontjev Angabe </h6>
                </Navbar.Brand>
                    <Navbar.Collapse className={this.props.collapse && "show"} id="basic-navbar-nav">
                        <div className="navbtngroup">
                            <Button
                                key="submit"
                                className="ml-1 mr-1 navbtn"
                                variant="nav-btn"
                                size="sm"
                                value="submit"
                                onClick={this.props.getFocus}>
                                <div className="d-inline"><FontAwesomeIcon icon={faShareSquare} size="lg" /> Submit </div>
                            </Button>
                            <Button
                                key="proposals"
                                className="ml-1 mr-1 navbtn"
                                variant="nav-btn"
                                size="sm"
                                value="proposals"
                                onClick={this.props.getFocus}>
                                <div className="d-inline"><FontAwesomeIcon icon={faCheck} size="lg" /> Proposals </div>
                            </Button>
                        </div>
                    </Navbar.Collapse>
                    <NavDropdown
                        title={
                            <div className="d-inline-flex align-items-center">
                                <div className="mr-2">{this.props.user.firstName + " " + this.props.user.lastName.charAt(0) + "."}</div>
                                <FontAwesomeIcon icon={faUserCircle} size="1x" />
                            </div>
                        }
                        id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">User Stats</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item value="config" onClick={this.props.getFocus}>App Config</NavDropdown.Item>
                        <NavDropdown.Item onClick={this.onClickLogout()}>Logout</NavDropdown.Item>
                    </NavDropdown>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    const authenticated = state.authentication.loggedIn
    const user = state.authentication.user
    const collapse = state.content.collapse
    return { authenticated, user, focus, collapse }
}

const actionCreators = {
    expand: expandNav,
    getFocus: getContentFocus,
    login: userActions.login,
    logout: userActions.logout
};


export default connect(mapStateToProps, actionCreators)(Header)