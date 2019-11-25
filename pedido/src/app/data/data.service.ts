import {Injectable} from '@angular/core';
import {Post} from '../Post';
import {Observable, of} from 'rxjs';

@Injectable()
export class DataService {

  ELEMENT_DATA: Post[] = [
    {position: 0, title: 'Tela de Login', category: 'Web Development', date_posted: new Date(), body: 'Body 1'},
    {position: 1, title: 'Autenticação em rotas', category: 'Android Development', date_posted: new Date(), body: 'Body 2'},
    {position: 2, title: 'Menu Lateral', category: 'IOS Development', date_posted: new Date(), body: 'Body 3'},
    {position: 3, title: 'Aleração de Background', category: 'Android Development', date_posted: new Date(), body: 'Body 4'},
    {position: 4, title: 'Teste', category: 'IOS Development', date_posted: new Date(), body: 'Body 5'},
    {position: 5, title: 'Teste', category: 'Web Development', date_posted: new Date(), body: 'Body 6'},
  ];
  categories = [
    {value: 'Web-Development', viewValue: 'Web Development'},
    {value: 'Android-Development', viewValue: 'Android Development'},
    {value: 'IOS-Development', viewValue: 'IOS Development'}
  ];

  constructor() {
  }

  getData(): Observable<Post[]> {
    return of<Post[]>(this.ELEMENT_DATA);
  }

  getCategories() {
    return this.categories;
  }

  addPost(data) {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}
