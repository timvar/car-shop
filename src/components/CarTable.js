import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import '../App.css';

class CarTable extends Component {
        
    render() {
      const data = this.props.cars;

      const columns = [{
        Header: 'Brand',
        accessor: 'brand' // String-based value accessors!
      },
      {
        Header: 'Model',
        accessor: 'model' // String-based value accessors!
      },
      {
        Header: 'Fuel',
        accessor: 'fuel' // String-based value accessors!
      },
      {
        Header: 'Year',
        accessor: 'year' // String-based value accessors!
      },
      {
        Header: 'Price',
        accessor: 'price' // String-based value accessors!
      },
      {
        Cell: row => <button type="button" className='btn btn-danger'>Delete</button>    
      },
      /*
      {
        Cell: row => <button type="button" className='btn btn-danger'  onClick={(e) => this.props.deleteTodo(row.index)}>Delete</button>    
      },*/
    ] 
      
      return <ReactTable 
                data={data}
                columns={columns}/>
    }
}

export default CarTable;