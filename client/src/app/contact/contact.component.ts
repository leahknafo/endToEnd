import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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



