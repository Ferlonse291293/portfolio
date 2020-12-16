import {Injectable} from '@angular/core';


@Injectable()

export class SharedFunctionService {

    getFormatDate(objectDate) {
        const object = new Date(objectDate);
        const day = object.getDate();
        const month = object.getMonth() + 1;
        const year = object.getFullYear();
        let resultMonth;
        let resultDay;
        if (month < 10) {
            resultMonth = '0' + month;
        }else {
            resultMonth = month;
        }

        if (day < 10) {
            resultDay = '0' + day;
        }else {
            resultDay = day;
        }

        return year + '-' + resultMonth + '-' + resultDay;
    }


}
