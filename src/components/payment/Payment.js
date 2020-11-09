import React from 'react';
import OrderNavbar from '../TopNavbar/OrderNavbar'
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import {withRouter,useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button';


function Payment(props) {
  
  const changeRoute=()=>{
  
    props.history.push("/")
  }
  return (
    <React.Fragment>

        <OrderNavbar history={props.history} title="Payment" />
        <div className="container-fluid" style={{marginTop:'50%',justifyContent:'center'}}>

            
            <div>
                <Button variant="contained" color="secondary" className="rounded mx-auto" align="center"
                style={{
                    left: '21%',
                    marginTop: '3%',
                    
                    background: '#004e92',  /* fallback for old browsers */
                    background: '-webkit-linear-gradient(to left, #000428, #004e92)',  /* Chrome 10-25, Safari 5.1-6 */
                    background: 'linear-gradient(to left, #000428,  #004e92)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    width: '54%',
                    fontSize: '0.8em',
                    height: '50px',
                    marginBottom:'2%'
                }} size="large" 
                >Pay Manual</Button>
            </div>
            <div>
                <Button variant="contained" color="secondary" className="rounded mx-auto" align="center"
                style={{
                    height: '50px',
                    left: '21%',
                    marginTop: '3%',
                    background: '#004e92',  /* fallback for old browsers */
                    background: '-webkit-linear-gradient(to left, #000428, #004e92)',  /* Chrome 10-25, Safari 5.1-6 */
                    background: 'linear-gradient(to left, #000428,  #004e92)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    width: '54%',
                    fontSize: '0.8em',
                    
                }} size="large" 
                >Pay Online</Button>
            </div> <br/>

            <table style={{marginTop:'10%'}}>
                <tr style={{backgroundColor:'rgb(245, 249, 253)',height: '35px'}}>
                    <th style={{paddingLeft: '8%',width: '60%'}}>Name</th>
                    <th style={{paddingRight: '16px'}}>Mobile Number</th>
                </tr>
                <tr style={{backgroundColor:'none',height: '35px'}}>
                    <td style={{paddingLeft: '8%',width: '60%',fontWeight:'500'}}>XYZ</td>
                    <td style={{paddingRight: '16px',fontWeight:'500'}}>03471898547</td>
                </tr>
            </table>
            
        </div>

    </React.Fragment>
  );
}

export default withRouter(Payment)