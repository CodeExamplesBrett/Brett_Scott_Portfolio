import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  async sendMail(){
    //action="https://brett-scott.developerakademie.net/send_mail/send_mail.php"
    console.log('Sending mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    //animation wird gesendet

    let fd = new FormData();
    fd.append('name',nameField.value);
    fd.append('message', messageField.value);
    // senden
    await fetch('https://brett-scott.developerakademie.net/send_mail/send_mail.php', 
    {
      method: 'POST',
      body: fd
    }
    
    );

    //text anzeigen :  Nachricht gesendet
    console.log('mail sent');

    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;

  


  }

}
