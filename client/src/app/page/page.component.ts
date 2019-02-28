import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  addContact(name,email,phone){

    const d = <Contact> {
      name: name.value,
      email: email.value,
      phone: phone.value
    }

    this.contactService.post(d).subscribe(res => {
      console.log(res);
    });

  }
  ngOnInit() {
  }

}
