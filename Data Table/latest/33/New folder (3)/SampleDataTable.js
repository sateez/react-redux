import React, {Component} from 'react'
import DataTable from '../DataTable';
import {Filters} from 'react-data-grid/addons';

//importing svgs
var checkSvg = require('babel!svg-react!../../assets/images/check.svg?name=list');
var EditSvg = require('babel!svg-react!../../assets/images/edit.svg?name=list');
var PlusSvg = require('babel!svg-react!../../assets/images/plus.svg?name=list');
var TrashSvg = require('babel!svg-react!../../assets/images/trash.svg?name=list');

class SampleDataTable extends Component {
  constructor(props) {
    super(props);
    this._rows = [];
    for (var i = 0; i < 10; i++) {
      this._rows.push({
        code: i,
        description: ['24 hours conference guest', 'Anti allergenic', 'Accessable Rm if AVl @ Chk-In', 'Adjacent Rm if AVl @ Chk-In'][Math.floor((Math.random() * 2) + 2)],
        type: ['disablility', 'turndown', 'none'][Math.floor((Math.random() * 2) + 1)],
        usedOnLocation: ['true', 'false'][Math.floor((Math.random() * 2))],
        roomFeet: ['true', 'false'][Math.floor((Math.random() * 2))],
        houseKeepingReq: ['true', 'false'][Math.floor((Math.random() * 2))]
      });
    }

    this._columns = [
      {
        key: 'code',
        name: 'code',
        resizable: true,
        sortable: true,
        filterable: true,
        width: 80,
        editable: true
      }, {
        key: 'description',
        name: 'description',
        resizable: true,
        sortable: true,
        filterable: true,
        width: 300,
        editable: true
      }, {
        key: 'type',
        name: 'type',
        resizable: true,
        sortable: true,
        filterable: true,
        filterRenderer: Filters.AutoCompleteFilter,
        width: 200,
        editable: true
      }, {
        key: 'usedOnLocation',
        name: 'used on location',
        resizable: true,
        sortable: true,
        filterable: true,
        filterRenderer: Filters.AutoCompleteFilter,
        width: 160,
        editable: true
      }, {
        key: 'roomFeet',
        name: 'room feet',
        resizable: true,
        sortable: true,
        filterable: true,
        filterRenderer: Filters.AutoCompleteFilter,
        width: 100,
        editable: true
      }, {
        key: 'houseKeepingReq',
        name: 'house keeping req',
        resizable: true,
        sortable: true,
        filterable: true,
        filterRenderer: Filters.AutoCompleteFilter,
        width: 160,
        editable: true
      }
    ]
  }

  render() {
    var propsToPass = {
      columns: this._columns,
      rows: this._rows,
      isfilterable: false,
      isRowSelectable: true,
      isRowDraggable: false,
      isInlineEditable: false
    }
    var propsToPass2 = {
      columns: this._columns,
      rows: this._rows,
      isfilterable: true,
      isRowSelectable: true,
      isRowDraggable: false,
      isInlineEditable: false
    }
    var propsToPass3 = {
      columns: this._columns,
      rows: this._rows,
      isfilterable: true,
      isRowSelectable: true,
      isRowDraggable: true,
      isInlineEditable: true
    }
    var propsToPass4 = {
      columns: this._columns,
      rows: this._rows,
      isfilterable: false,
      isRowSelectable: false,
      isRowDraggable: false,
      isInlineEditable: true
    }
    return (
      <div>
        <h1>Row Selection Grid
        </h1>
        <div className='grid-container'>
          <div className='grid-header'>
            <div className='grid-left-header'>request code settings
              <div className='bottom-line'></div>
            </div>
            <div className='grid-right-header'><i className='glyphicon glyphicon-lock'/>finance permission required</div>
          </div>
          <div className='grid-area'>
            <DataTable {...propsToPass}/>
          </div>
          <div className='grid-footer'>
            <div className='grid-footer-indicators'>
              <br/>
              <PlusSvg/>
              <EditSvg/>
              <TrashSvg/>
            </div>
          </div>
        </div>
        <h1>
          Row Selection with Filters enabled Grid
        </h1>
        <div className='grid-container'>
          <div className='grid-header'>
            <div className='grid-left-header'>request code settings
              <div className='bottom-line'></div>
            </div>
            <div className='grid-right-header'><i className='glyphicon glyphicon-lock'/>finance permission required</div>
          </div>
          <div className='grid-area'>
            <DataTable {...propsToPass2}/>
          </div>
          <div className='grid-footer'>
            <div className='grid-footer-indicators'>
              <br/>
              <PlusSvg/>
              <EditSvg/>
              <TrashSvg/>
            </div>
          </div>
        </div>
        <h1>Selectable and draggable grid</h1>
        <div className='grid-container'>
          <div className='grid-header'>
            <div className='grid-left-header'>request code settings
              <div className='bottom-line'></div>
            </div>
            <div className='grid-right-header'><i className='glyphicon glyphicon-lock'/>finance permission required</div>
          </div>
          <div className='grid-area'>
            <DataTable {...propsToPass3}/>
          </div>
          <div className='grid-footer'>
            <div className='grid-footer-indicators'>
              <br/>
              <PlusSvg/>
              <EditSvg/>
              <TrashSvg/>
            </div>
          </div>
        </div>
        <h1>Cell Editable with no Row selection Grid</h1>
        <div className='grid-container'>
          <div className='grid-header'>
            <div className='grid-left-header'>request code settings
              <div className='bottom-line'></div>
            </div>
            <div className='grid-right-header'><i className='glyphicon glyphicon-lock'/>finance permission required</div>
          </div>
          <div className='grid-area'>
            <DataTable {...propsToPass4}/>
          </div>
          <div className='grid-footer'>
            <div className='grid-footer-indicators'>
              <br/>
              <PlusSvg/>
              <EditSvg/>
              <TrashSvg/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default SampleDataTable;
