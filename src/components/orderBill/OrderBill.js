import React from 'react';
import OrderNavbar from '../TopNavbar/OrderNavbar'
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import {withRouter,useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button';


function OrderBill(props) {
  
  const changeRoute=()=>{
  
    console.log("hhhhhhhhhh",props.history.push("/Payment"));
  }
  return (
    <React.Fragment>

        <OrderNavbar history={props.history} title="Order Confirmed" />
        <div className="container-fluid" style={{marginTop:'18%'}}>

            <div style={{textAlign:'center',fontSize: '2em',fontWeight: '400'}}>Thank You For Your Order</div>

            {/* <Skeleton animation="wave" style={{height:'50px'}}/> */}
            
            <div style={{backgroundColor:'rgb(245, 249, 253)',marginTop:'3%'}}>


            <div className="row pt-2 pl-3">

                <div className="font-weight-thick col-xs-6  pl-4 pr-5 mr-5"
                style={{    
                    fontSize: '1em',
                    fontWeight: '500',
                }}
                >Green Tea</div>
                
                <div className="font-weight-thick col-xs-6 pl-5 ml-5"
                style={{    
                    fontSize: '1em',
                    fontWeight: '500',
                }}
                >30</div>


            </div>

            <div className="row" 
             style={{ paddingBottom: '22px',marginTop:'2%'}}
             >
                <div className="col-xs-12 text-center pl-5  pr-5 ml-4 font-weight-thick mb-2" >
                    Small (12SR)
                </div>
                <div className="col-xs-12  pl-5">
                    1
                </div>
                <div className="col-xs-12 text-center pl-5  pr-5 ml-4 font-weight-thick mb-2" >
                    Medium (14SR) 
                </div>
                <div className="col-xs-12  pl-4">
                     &nbsp;2
                </div>
            </div>
            


            <div className="row pl-3">

                <div className="font-weight-thick col-xs-6 pl-4 pr-5 mr-5"
                style={{    
                    fontSize: '1em',
                    fontWeight: '500',
                }}
                >White Tea</div>
                
                <div className="font-weight-thick col-xs-6 pl-5 ml-5"
                style={{    
                    fontSize: '1em',
                    fontWeight: '500',
                }}
                >30</div>


            </div>

            {/* <hr  style={{marginTop:' 0.7rem'}} /> */}

            <div className="row" style={{marginTop:'2%'}}>
                <div className="col-xs-12 text-center pl-5  pr-5 ml-4 font-weight-thick mb-2" >
                    Small (12SR)
                </div>
                <div className="col-xs-12  pl-5">
                    1
                </div>
                <div className="col-xs-12 text-center pl-5  pr-5 ml-4 font-weight-thick mb-2" >
                    Large (14SR) 
                </div>
                <div className="col-xs-12  pl-4">
                     &emsp;&nbsp; 2
                </div>
            </div>

            </div>

            <div className="row mt-4 pl-3">

                <div className="font-weight-thick col-xs-6 pl-4 pr-5 mr-5"
                style={{    
                    fontSize: '1em',
                    fontWeight: '500',
                }}
                >Total </div>
                
                <div className="font-weight-thick col-xs-6 pl-5 ml-5 text-danger"
                style={{    
                    fontSize: '1em',
                    fontWeight: '500',
                }}
                >&emsp;&emsp;&nbsp;60</div>


            </div>

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
            
            <div>
                <Button variant="contained" color="secondary" className="rounded mx-auto" align="center"
                onClick={changeRoute}
                style={{
                    position: 'absolute',
                    left: '27%',
                    height:'40px',
                    marginTop: '3%',
                    background: '#240b36',  /* fallback for old browsers */
                    background: '-webkit-linear-gradient(to left, #240b36, #c31432)',  /* Chrome 10-25, Safari 5.1-6 */
                    background: 'linear-gradient(to left, #240b36, #c31432)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
                    fontSize: '0.8em'
                }}
                >Request for bill</Button>
            </div>
        </div>

    </React.Fragment>
  );
}

export default withRouter(OrderBill)