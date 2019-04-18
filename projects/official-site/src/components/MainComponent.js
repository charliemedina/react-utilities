import React, {Component} from 'react';
import Clock from './clock/Clock';
import Toggle from './utils/Toggle';
import LoginControl from './utils/LoginControl';
import FilterableProductTable from './table/FilterableProductTable';
import List from './utils/List';
import Input from './utils/forms/Input';
import TextArea from './utils/forms/TextArea';
import Select from './utils/forms/Select';
import Reservation from './utils/forms/MultipleInput';
import Calculator from './calculator/Calculator';
import Dialog from './dialog/Dialog';


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
       <Input />
       <TextArea className="text-area"/>
       <Select />
       <Reservation />
       <a href="https://jaredpalmer.com/formik/">More information about Forms...</a>
       <Calculator />
       <Dialog />
`      </div>
    );
  }
}

export default MainComponent;