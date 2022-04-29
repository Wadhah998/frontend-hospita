import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers',
})
export class FilterUsersPipe implements PipeTransform {
  transform(listUsers: any[], userName: string): any {
    if (listUsers && userName) {
      return listUsers.filter((d) => d.name.indexOf(userName) > -1);
    }
    console.log('from pipe', userName, listUsers);
    return listUsers;
  }
}
