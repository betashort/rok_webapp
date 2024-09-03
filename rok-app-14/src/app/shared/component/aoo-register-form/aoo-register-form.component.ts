import { Component, OnInit, Output } from '@angular/core';

type registedData = {
  userName: string;
  participationYesNo: boolean;
}

@Component({
  selector: 'app-aoo-register-form',
  templateUrl: './aoo-register-form.component.html',
  styleUrls: ['./aoo-register-form.component.scss']
})

export class AooRegisterFormComponent implements OnInit {
  userRegistedData:registedData = {
    userName: "",
    participationYesNo: false,
  }
  constructor() { 
  }

  ngOnInit(): void {
    
  }


  submit() {
    console.log(JSON.stringify(this.userRegistedData));
    
  }
}
