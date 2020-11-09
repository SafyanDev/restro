import React from 'react'
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { Navbar,Row,Col } from 'react-bootstrap'
import notification from '../../assets/notification.svg'
import incomingcall from '../../assets/incoming-call.svg'
import happy from '../../assets/happy.svg'
import smartphone from '../../assets/smartphone.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import pinterest from '../../assets/pinterest.svg'
import {Link} from 'react-router-dom';
import './style.css'

export default class TopNavbar extends React.Component{
    render(){
        return(
            <Router>
                <Navbar bg="light" variant="light" expand="lg" sticky="top">
                    
                        <Row style={{marginTop:'-5%'}}>
                            <Col>
                                <img src={notification} style={{width:'20px',marginRight:'-3px'}} alt="icon" />
                            </Col>
                            <Col>
                                <img src={ incomingcall}  style={{width:'16px'}} alt="icon" />
                            </Col>
                            <Col>
                                <img src={happy}  style={{width:'16px'}} alt="icon" />
                            </Col>
                            <Col>
                                <img src={smartphone}  style={{width:'16px'}} alt="icon" />
                            </Col>
                        </Row>
                        <Row style={{position: 'absolute',top: '56%'}}>
                            <Col>
                                <img src={facebook} style={{width:'16px',marginRight:' 3px'}} alt="icon" />
                            </Col>
                            <Col>
                                <img src={instagram}  style={{width:'16px'}} alt="icon" />
                            </Col>
                            <Col>
                                <img src={twitter}  style={{width:'16px'}} alt="icon" />
                            </Col>
                            <Col>
                                <img src={pinterest}  style={{width:'16px'}} alt="icon" />
                            </Col>
                        </Row>
                        


                    <Navbar.Brand href="/" className="mx-l d-block d-sm-none" >Logo</Navbar.Brand>

                    <div className='custom-control custom-switch' style={{fontFamily:'monospace',marginLeft:'42px'}}>
                        <label style={{position: 'absolute',left:' -89%'}}>English</label>
                        <input
                        type='checkbox'
                        className='custom-control-input'
                        id='customSwitches'
                        readOnly
                        />
                        <label className='custom-control-label' htmlFor='customSwitches'>
                        العربية
                        </label>
                    </div>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    {/* <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about-us">Contact Us</Nav.Link>
                        <Nav.Link href="/contact-us">About Us</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>

                        <Navbar.Brand href="#home" className="mx-auto">React Bootstrap Navbar</Navbar.Brand>


                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse> */}
                </Navbar>
                    
                <Navbar bg="light" variant="light" expand="lg" fixed="bottom">

                    <span className="mx-auto d-block d-sm-none mb-3" style={{fontSize: '0.9em',fontWeight: '400' }}>Powered by <Link to="#" style={{color:'red'}}> xyz</Link></span>
                </Navbar>
            </Router>
        )
    }
}