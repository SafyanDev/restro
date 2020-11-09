import React from 'react';
import OrderNavbar from '../TopNavbar/OrderNavbar'
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import {withRouter,useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button';


function OrderList(props) {
  
  const changeRoute=()=>{
  
    console.log("hhhhhhhhhh",props.history.push("/OrderConfirmation"));
  }
  return (
    <React.Fragment>

        <OrderNavbar history={props.history} title="Add to Order" />
        <div className="container-fluid" style={{marginTop:'18%'}}>
            {/* <div className="row">
                <div className="col-xs-6">Green Tea</div>
                <div className="col-xs-6">12 SR</div>
            </div> */}
            
            <Skeleton variant="rect" />
            
            <hr/>
            <Skeleton animation="wave" style={{height:'50px'}}/>
            <br/>
            <Skeleton variant="rect" />
            
            <hr/>
            <Skeleton animation="wave" style={{height:'50px'}}/>
            <br/>

            <Skeleton animation="wave" style={{height:'20px'}}/>
            <br/>

            <Skeleton animation="wave" style={{width:'20%'}}/>
            <Skeleton style={{height:'50px'}}/>
            <br/>
            <Skeleton animation="wave" style={{width:'20%'}}/>
            <Skeleton style={{height:'50px'}}/>
            
            <div className='mx-auto' style={{padding: '0px 0 0 93px'}}>
              <Button  onClick={changeRoute} variant="outlined" color="primary"  className=" rounded"> Order Confirm</Button>
            </div>


        </div>

    </React.Fragment>
  );
}

export default withRouter(OrderList)