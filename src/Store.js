import { observable } from 'mobx';

class Store {
    @observable url = 'in';
    @observable des = ''
    @observable img = ""
    @observable title = ''
    @observable art = ''
}

export default new Store;