import React from 'react'
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { Navbar,Row,Col } from 'react-bootstrap'
import arrow from '../../assets/left-arrow.svg'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import {withRouter,useHistory} from 'react-router-dom';
import './style.css'

class DetailNavbar extends React.Component{
    changeComponent=()=>{
        console.log(this.props.history.goBack());
    }
    render(){
        return(
            <Router>
                <Navbar bg="light" variant="light" expand="lg" fixed="top" >
                    
                        <Row style={{marginTop:'0%'}}>
                            <Col onClick={this.changeComponent}>
                                <img  src={arrow} style={{width:'20px',marginRight:'17px'}} alt="icon" />
                            </Col>
                        </Row>


                    <Navbar.Brand href="/" className="mx-auto d-block d-sm-none" 
                    style={{
                        fontSize: '1.2em',
                        fontWeight: '600'
                    }}
                    >Green Tea</Navbar.Brand>

                    <div className='custom-control custom-switch' style={{fontFamily:'monospace'}}>
                        <LocalMallOutlinedIcon/>
                    </div>
                </Navbar>

                
                <Navbar bg="light" variant="light" expand="lg" fixed="bottom" >

                    <Navbar.Brand href="/" className="mx-auto d-block d-sm-none mb-3" style={{fontSize: '1em',fontWeight: '500' ,}}>Back to Menu</Navbar.Brand>
                </Navbar>
            </Router>
        )
    }
}


export default withRouter(DetailNavbar)