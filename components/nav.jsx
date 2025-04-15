import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from 'next/router'
import { basePath } from '../utils/constent';

function Navigation() {
    const router = useRouter()

    const logout = () => {
        document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
        router.push(`${basePath}/login`);
    }
    return (
        <Navbar bg="light" expand="lg" className='shadow p-2'>
            <Container fluid>
                <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
                    <img src={`${basePath}/images/MOHERI.png`} width="100 px" height="70 px" />
                    <Navbar.Brand
                        href="#home"
                        onClick={(e) => e.preventDefault()}
                        className="mr-2"
                    >
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
                    <span className="navbar-toggler-bar burger-lines">&#8659;</span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav mr-auto" navbar>

                        <Nav.Item>
                            <Nav.Link
                                className="btn btn-light text-dark shadow ml-4"
                                href={`${basePath}/dashboard`}
                            // onClick={(e) => e.preventDefault()}
                            >
                                <span className="no-icon">Dashboard</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        {/* <Nav.Item>
                            <Nav.Link
                                className="m-0"
                                href="Dashboard"
                                onClick={(e) => e.preventDefault()}
                            >
                                <span className="no-icon">Dashboard</span>
                            </Nav.Link>
                        </Nav.Item> */}

                        <Nav.Item>
                            <Nav.Link
                                className="m-0"
                                onClick={(e) => logout()}
                            >
                                <span className="btn btn-light shadow">Log out</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation