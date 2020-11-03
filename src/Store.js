import { observable } from 'mobx';

class Store {
    @observable url = 'in';
    @observable des = ''
    @observable img = ""
    @observable title = ''
}

export default new Store;