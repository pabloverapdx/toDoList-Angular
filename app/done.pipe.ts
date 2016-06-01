import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe ({
  name: "done",
  pure: false
})

export class DonePipe implements PipeTransform {
  transform(input: Task[], args) {
    console.log('selected task: ', args[1]);
    var doneTask = args[0];
    if(doneTask === "done") {
      return input.filter((task)=> {
        return task.done;
      });
    } else if (doneTask === "notDone") {
      return input.filter ((task)=> {
        return !task.done;
      });
    } else {
      return input;
    }
  }
}
