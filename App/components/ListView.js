/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import TodoModel from '../models/ToDoModel';
import SearchOrCreateTextInput from './SearchOrCreateTextInput';
import SortableListView from 'react-native-sortable-listview';
import ListViewItem from './ListViewItem';
import Utils from '../helpers/Utils';
let dataList = [
  new TodoModel('Hello world'),
  new TodoModel('Make a Todo App with React Native'),
  new TodoModel('Check to complete a todo'),
  new TodoModel('Long press, drag and drop a todo to sort'),
  new TodoModel('Apply Redux'),
  new TodoModel('Apply Saga'),
  new TodoModel('Unit tests'),
];

var dataListOrder = getOrder(dataList);

function getOrder(list) {
  return Object.keys(list);
}

function moveOrderItem(listView, fromIndex, toIndex) {
  Utils.move(dataListOrder, parseInt(fromIndex), parseInt(toIndex));
  if (listView.forceUpdate) {
    listView.forceUpdate();
  }
}

class ListView extends Component {
  constructor(props) {
    super(props);
    this.updateDataList = this.updateDataList.bind(this);
    this._onCompletedChange = this._onCompletedChange.bind(this);
    this.state = {
      dataList: dataList,
    };
  }

  updateDataList(dataListParam) {
    dataListOrder = getOrder(dataListParam);
    this.setState({
      dataList: dataListParam,
    });
  }

  _onCompletedChange(dataItem, index) {
    let fromIndex = dataListOrder.indexOf(index);
    let toIndex = dataItem.completed ? dataListOrder.length - 1 : 0;
    moveOrderItem(this, fromIndex, toIndex);
  }

  render() {
    let listView = <View />;
    if (this.state.dataList.length) {
      listView = (
        <SortableListView
          ref="listView"
          style={{flex: 1}}
          data={this.state.dataList}
          order={dataListOrder}
          onRowMoved={e => moveOrderItem(this, e.from, e.to)}
          renderRow={(dataItem, section, index) => (
            <ListViewItem
              data={dataItem}
              dataIndex={index}
              onCompletedChange={this._onCompletedChange}
            />
          )}
        />
      );
    }

    return (
      <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
        <SearchOrCreateTextInput
          data={dataList}
          updateDataList={this.updateDataList}
        />
        {listView}
      </View>
    );
  }
}
export default ListView;
