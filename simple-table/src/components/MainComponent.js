import React, {Component} from 'react';
import Clock from './clock/Clock';
import Toggle from './utils/Toggle';
import LoginControl from './utils/LoginControl';
import FilterableProductTable from './table/FilterableProductTable';
import List from './utils/List';

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class MainComponent extends Component {
  render() {
    return(
      <div> 
       <Clock />
       <FilterableProductTable products={PRODUCTS} />
       <Toggle />
       <LoginControl />
       <List />
      </div>
    );
  }
}

export default MainComponent;