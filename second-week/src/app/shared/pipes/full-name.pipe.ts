import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  users = [
    {
      username: 'ivanov',
      fullName: 'Иванов Иван',
      shorName: 'Иванов И.'
    },
    {
      username: 'omarov_0789',
      fullName: 'Омаров Омар',
      shorName: 'Омаров О.'
    },
    {
      username: 'armanov007',
      fullName: 'Арманов Арман',
      shorName: 'Арманов А.'
    },
  ];

  transform(value: string, ...args: unknown[]): unknown {
    let result = value;

    const findUser = this.users.find(user => user.username === value);

    if (findUser) {
      result = findUser.fullName;

      // Если есть параметр со значением short, то показываем shortName
      if (args.length && args[0] === 'short') {
        result = findUser.shorName;
      }
    }

    return result;
  }

}
