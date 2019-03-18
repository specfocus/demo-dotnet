import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>FrontEnd</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem componentClass='span'>
                            <NavLink to={'/'} exact>
                                <Glyphicon glyph='home' /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem componentClass='span'>
                            <NavLink to={'/counter'}>
                                <Glyphicon glyph='education' /> Counter
                            </NavLink>
                        </NavItem>
                        <NavItem componentClass='span'>
                            <NavLink to={'/fetch/data'}>
                                <Glyphicon glyph='th-list' /> Fetch data
                            </NavLink>
                        </NavItem>
                        <NavItem componentClass='span'>
                            <NavLink to={'/fetch/graphql'}>
                                <Glyphicon glyph='th-list' /> GraphQL Fetcher
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
