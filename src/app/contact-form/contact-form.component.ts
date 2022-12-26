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
  @ViewChild('emailField') emailField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;

  emailSent = true;
  fadeOut = false;
  emailValid = true;


  constructor() { }

  ngOnInit(): void {
  }

  getFormData(){
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    emailField.disabled = true;

    let fd = new FormData();

    fd.append('name',nameField.value);
    fd.append('message', messageField.value);
    fd.append('email', emailField.value);
  
    this.checkMail(nameField, messageField, sendButton, emailField, fd)
  }  


  checkMail(nameField, messageField, sendButton, emailField, fd){

    if(emailField.value.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ))
    {   
      this.sendMail(nameField, messageField, sendButton, emailField, fd)
    } else {
      this.InvalidEMailWarning(nameField, messageField, sendButton, emailField)
    }
  }


  async sendMail(nameField, messageField, sendButton, emailField, fd){
        this.emailValid = true;
        // senden
        await fetch('http://brett--scott.com/send_mail/send_mail.php', 
        {
          method: 'POST',
          body: fd
        });

        this.sentMailAnimation();
        this.resetForm(nameField, messageField, sendButton, emailField);
  }

  InvalidEMailWarning(nameField, messageField, sendButton, emailField){
    // variable "emailValid" removes the class "dnone" to display the warning.
    this.emailValid = false;

    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
    emailField.disabled = false;

    emailField.value = ""
  }


  sentMailAnimation(){
    this.emailSent = false;
    this.fadeOut = true;
    setTimeout(() => {
      this.emailSent = true;
    }, 6000);
}


  resetForm(nameField, messageField, sendButton, emailField){
        nameField.disabled = false;
        messageField.disabled = false;
        sendButton.disabled = false;
        emailField.disabled = false;

        nameField.value = ""
        messageField.value =""
        emailField.value = ""
  }
}
