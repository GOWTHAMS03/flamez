import { Component } from '@angular/core';
import { FlamesService } from './service/flames.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RequestDto } from './model/request.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  request:RequestDto ={boyName:'',girlName:''}
  result:string | null=null;
  showPopup = false;
  resultText ='';
  resultIcon ='';

  constructor(private flamesservice : FlamesService){}

  onSubmit(){
    const res = this.flamesservice.flamesCheck(this.request);
    this.result = res;
    this.setResultDetails(res);
    this.showPopup = true;
  }

  setResultDetails(value: string) {
    switch (value) {
      case 'F':
        this.resultText = 'Friends';
        this.resultIcon = '👬'; // Friends emoji
        break;
      case 'L':
        this.resultText = 'Love';
        this.resultIcon = '❤️';
        break;
      case 'A':
        this.resultText = 'Affection';
        this.resultIcon = '🤗';
        break;
      case 'M':
        this.resultText = 'Marriage';
        this.resultIcon = '💍';
        break;
      case 'E':
        this.resultText = 'Enemy';
        this.resultIcon = '⚔️';
        break;
      case 'S':
        this.resultText = 'Siblings';
        this.resultIcon = '👫';
        break;
      default:
        this.resultText = 'Unknown';
        this.resultIcon = '❓';
    }
  }

  closePopup() {
    this.showPopup = false;
  }
  
}
