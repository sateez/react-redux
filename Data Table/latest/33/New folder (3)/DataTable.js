import React, {Component} from 'react'
import ReactDataGrid from 'react-data-grid';
import {Toolbar, Data, Filters, Selectors} from 'react-data-grid/addons';

require('react-data-grid/themes/react-data-grid.css');
class DataTable extends Component {

  constructor(props) {
    super(props);
    // Bind functions
    this.rowGetter = this.rowGetter.bind(this);
    this.handleGridSort = this.handleGridSort.bind(this);
    this.onRowsSelected = this.onRowsSelected.bind(this);
    this.onRowsDeselected = this.onRowsDeselected.bind(this);
    this.handleAllColumnFilterChange = this.handleAllColumnFilterChange.bind(this);
    this.handleColumnFilterChange = this.handleColumnFilterChange.bind(this);
    this.doColumnFilterChange = this.doColumnFilterChange.bind(this);
    this.handleClearColumnFilter = this.handleClearColumnFilter.bind(this);
    this.renderFilterToolbar = this.renderFilterToolbar.bind(this);
    this.getValidFilterValues = this.getValidFilterValues.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
    this.handleRowsDragDrop = this.handleRowsDragDrop.bind(this);
    this.isDraggedRowSelected = this.isDraggedRowSelected.bind(this);
    this.handleRowUpdated = this.handleRowUpdated.bind(this);
    this.renderRowRenderer = this.renderRowRenderer.bind(this);

    // Set initial state
    this.state = {
      columns: props.columns,
      rows: props.rows,
      filters: {},
      allColumnFilterTerm: null,
      sortColumn: null,
      sortDirection: null,
      selectedIndexes: []
    }
  }

  getRows() {
    return Data.Selectors.getRows(this.state);
  }

  getSize() {
    return this.getRows().length;
  }

  rowGetter(i) {
    var rows = this.getRows();
    return rows[i];
  }

  handleGridSort(sortColumn, sortDirection) {
    var state = Object.assign({}, this.state, {
      sortColumn: sortColumn,
      sortDirection: sortDirection
    });
    this.setState(state);
  }

  handleAllColumnFilterChange(event) {
    this.doColumnFilterChange(null, event.target.value)
  }

  handleColumnFilterChange(colFilter) {
    this.doColumnFilterChange(colFilter, this.state.allColumnFilterTerm)
  }

  // Generates the filter configurations and updates the state
  doColumnFilterChange(colFilter, allColumnFilterTerm) {
    let self = this
    let newFilters = Object.assign({}, this.state.filters)
    let allColumnFilterValues = null

    // Update filters if a column filter term is provided
    if (colFilter) {
      newFilters[colFilter.column.key] = colFilter
    }

    // If an all column filter term is provided, define a filterValues function that checks all
    // the column values in the row for a match on the filter term
    //if (allColumnFilterTerm && allColumnFilterTerm.trim().length > 0) {
    allColumnFilterValues = function(row, colFilter, columnKey) {
      for (let column of self.props.columns) {
        if (column.filterable) {
          let rowValue = row[column.key]
          if (rowValue && rowValue.toString().toLowerCase().indexOf(allColumnFilterTerm.toLowerCase()) >= 0) {
            return true
          }
        }
      }
      return false
    }
    //}

    for (let column of this.props.columns) {
      let newColFilter = newFilters[column.key]

      // Create the column filter if it does not already exist
      if (!newColFilter) {
        newColFilter = {
          column: column
        }
      }

      // If an all column filter term is provided and the column filter doesn't contain a filter term,
      // then set the filterValues function value
      if (allColumnFilterValues && !newColFilter.filterTerm) {
        newColFilter.filterValues = allColumnFilterValues
      }

      // Add the column filter from the new list of column filters if it either has a filter term or a filterValues function,
      // otherwise remove the column filter.
      if (column.filterable && (newColFilter.filterTerm || newColFilter.filterValues)) {
        newFilters[column.key] = newColFilter
      } else {
        delete newFilters[column.key]
      }
    }

    this.setState({filters: newFilters, allColumnFilterTerm: allColumnFilterTerm})
  }

  handleClearColumnFilter() {
    // all filters removed
    this.setState({filters: {}})
  }

  renderFilterToolbar() {
    return (<Toolbar enableFilter={true}/>)
  }

  onRowsSelected(rows) {
    this.setState({
      selectedIndexes: this.state.selectedIndexes.concat(rows.map(r => r.row.code))
    });
  }

  onRowsDeselected(rows) {
    var rowIndexes = rows.map(r => r.row.code);
    this.setState({
      selectedIndexes: this.state.selectedIndexes.filter(i => rowIndexes.indexOf(i) === -1)
    });
  }

  getValidFilterValues(columnId) {
    let values = this.state.rows.map(r => r[columnId]);
    return values.filter((item, i, a) => {
      return i == a.indexOf(item);
    });
  }

  onRowClick(rowIdx, row) {
    if (this.state.selectedIndexes.indexOf(rowIdx) === -1) {
      this.onRowsSelected([
        {
          row: row,
          rowIdx: rowIdx
        }
      ]);
    } else {
      this.onRowsDeselected([
        {
          row: row,
          rowIdx: rowIdx
        }
      ]);
    }
  }

  // this function is triggered when we select row/rows dragged and dropped in any other location
  handleRowsDragDrop(e) {
    var Selectors = ReactDataGridPlugins.Data.Selectors;
    let selectedRows = Selectors.getSelectedRowsByKey({rowKey: this.props.rowKey, selectedKeys: this.state.selectedIndexes, rows: this.state.rows});
    let draggedRows = this.isDraggedRowSelected(selectedRows, e.rowSource)
      ? selectedRows
      : [e.rowSource.data];
    let undraggedRows = this.state.rows.filter(function(r) {
      return draggedRows.indexOf(r) === -1;
    });
    var args = [e.rowTarget.idx, 0].concat(draggedRows);
    Array.prototype.splice.apply(undraggedRows, args);
    setTimeout(() => {
      this.setState({rows: undraggedRows});
    }, 100)
  }

  //On Drag, this function checks if the drag row is selected or not.
  isDraggedRowSelected(selectedRows, rowDragSource) {
    if (selectedRows && selectedRows.length > 0) {
      let key = this.props.rowKey;
      return selectedRows.filter(function(r) {
        return r[key] === rowDragSource.data[key];
      }).length > 0;
    }
    return false;
  }

  handleRowUpdated(e) {
    //merge updated row with current row and rerender by setting state
    var rows = this.state.rows;
    Object.assign(rows[e.rowIdx], e.updated);
    this.setState({rows: rows});
  }

  renderRowRenderer() {
    var DropTargetRowContainer = ReactDataGridPlugins.Draggable.DropTargetRowContainer;
    let Renderer = DropTargetRowContainer(ReactDataGrid.Row);
    return (<Renderer onRowDrop={this.handleRowsDragDrop}/>)
  }

  render() {
    var RowActionsCell = ReactDataGridPlugins.Draggable.RowActionsCell;
    var DraggableContainer = ReactDataGridPlugins.Draggable.Container;
    var propsToReactGrid = {
      columns: this.state.columns,
      rowGetter: this.rowGetter,
      minHeight: 330,
      rowRenderer: this.renderRowRenderer(),
      rowsCount: this.getSize()
    }

    if (this.props.isInlineEditable) {
      propsToReactGrid.onRowSelect = this.onRowSelect;
      propsToReactGrid.enableCellSelect = true;
      propsToReactGrid.onCellSelected = this.onRowsSelected
      propsToReactGrid.onCellDeSelected = this.onRowsDeselected;
    }

    if (this.props.isRowDraggable) {
      propsToReactGrid.onGridSort = this.handleGridSort;
      propsToReactGrid.rowActionsCell = RowActionsCell;
      propsToReactGrid.onRowUpdated = this.handleRowUpdated;
    }

    if (this.props.isRowSelectable || this.props.isRowDraggable) {
      propsToReactGrid.rowSelection = {
        showCheckbox: true,
        enableShiftSelect: true,
        onRowsSelected: this.onRowsSelected,
        onRowsDeselected: this.onRowsDeselected,
        selectBy: {
          keys: {
            rowKey: this.props.rowKey,
            values: this.state.selectedIndexes
          }
        }
      }
    }

    if (this.props.isfilterable) {
      propsToReactGrid.toolbar = this.renderFilterToolbar();
      propsToReactGrid.onAddFilter = this.handleColumnFilterChange;
      propsToReactGrid.onClearFilters = this.handleClearColumnFilter;
      propsToReactGrid.enableCellSelect = true;
      propsToReactGrid.getValidFilterValues = this.getValidFilterValues;
    }

    return (
      <div>
        <input type="text" className={this.props.isfilterable
          ? ''
          : 'hidden'} onChange={this.handleAllColumnFilterChange}/>
        <DraggableContainer>
          <ReactDataGrid {... propsToReactGrid}/>
        </DraggableContainer>
      </div>
    );
  }
}

DataTable.defaultProps = {
  'rowKey': 'code'
}

// class RowRenderer extends Component {
//   constructor(props) {
//     super(props);
//
//     this.setScrollLeft = this.setScrollLeft.bind(this);
//   }
//   setScrollLeft(scrollBy) {
//     //if you want freeze columns to work, you need to make sure you implement this as apass through
//     this.refs.row.setScrollLeft(scrollBy);
//   }
//
//   render() {
//     return (<ReactDataGrid.Row ref="row" {...this.props}/>)
//   }
// }

export default DataTable;
