import React,{Component} from 'react';
import { 
    HashRouter  as Router,
    Switch,
    Route} from 'react-router-dom';
import Item from '../Item/Item'
import ItemDetail from '../ItemDetail/ItemDetail'
import OrderList from '../orderList/OrderList'
import OrderConfirmation from '../orderConfirmation/OrderCofirmation'
import OrderBill from '../orderBill/OrderBill';
import Payment from '../payment/Payment';

export default class Layout extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Item} />
                    <Route path="/itemDetail" exact component={ItemDetail} />
                    <Route path="/OrderList" exact component={OrderList} />
                    <Route path="/OrderConfirmation" exact component={OrderConfirmation}/>
                    <Route path="/OrderBill" exact component={OrderBill}/>
                    <Route path="/Payment" exact component={Payment}/>
                </Switch>
            </Router>
        );
    }
}