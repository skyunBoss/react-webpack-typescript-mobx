import { observable, action } from 'mobx';

export default class App {
    @observable public num = 0;
    @observable.shallow public list = [];

    @action public addNum = (num: number) => {
        this.list = ['1', '2', '3'];
        this.num = num+1;
    }

    @action.bound public cutNum(num: number) {
        this.list = ['1', '2', '3'];
        this.num = num-1;
    }
}
