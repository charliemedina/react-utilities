import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: 'ball',
      inStockOnly: false
    }
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable
          filterText={this.state.filterText}
          inStockOnly={this.state.filterText} 
          products={this.props.products}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
