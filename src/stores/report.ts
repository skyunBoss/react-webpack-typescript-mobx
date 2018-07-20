import { observable, computed, action } from 'mobx';


class ReportStore{
    @observable showType: number = -1
}

export default new ReportStore();