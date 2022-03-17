import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Contact } from './contact';
// import { map } from 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}
  getContacts() {
    const getContacts = this.http.get('htttp://localhost:3000/api/contacts');
    return map((getContact: any) => getContact.json());
  }
  // //add contact service
  // addContact(newContact) {
  //   var headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http
  //     .post('htttp://localhost:3000/api/contact', newContact, {
  //       headers: headers,
  //     })
  //     .map((res) => res.json());
  // }

  // //delete method
  // deleteContact(id) {
  //   return this.http
  //     .delete('htttp://localhost:3000/api/contact/' + id)
  //     .map((res) => res.json());
  // }
}
