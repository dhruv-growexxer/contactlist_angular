import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get('http://localhost:3000/api/contacts');
  }

  //add contact service
  addContact(newContact: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('http://localhost:3000/api/contact', newContact, {
        headers: headers,
      })
  }

  //delete method
  deleteContact(id: any) {
    return this.http
      .delete('http://localhost:3000/api/contact/' + id)
  }
}
