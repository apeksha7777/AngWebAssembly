import { Component, ViewChild } from '@angular/core';
import { WasmService } from './wasm.service';
import { getDefaultLibFileName } from 'typescript';
declare var Module: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My Project';

  num: number;
  @ViewChild('fact') fact;
  @ViewChild('ans') ans;
  @ViewChild('answer') answer;
  @ViewChild('num') numb;
  constructor(private wasm: WasmService) {}

  ngOnInit() {
  //   var n=this.fact.nativeElement.value;
  //  this.get_factorial(n);
   
   
  }
  // show(){

  //   var i, no, fact;
  //   fact=1;
  //   var no=this.numb.nativeElement.value;
  //   for(i=1; i<=no; i++)  
  //   {
  //   fact= fact*i;
  //   }  
  //   this.answer.nativeElement.value= fact;
  //   }
 
  
// factorial(n) {
//       if (n === 0) {
//         return 1;
//       }
//       // This is it! Recursion!!
//       return n * this.factorial(n - 1);
//     }
//     get_factorial(n) {
//       console.log("normal");
//       console.log(this.factorial(n));
//     }
  
  nextnum(){
    var n=this.fact.nativeElement.value;
     
      this.wasm.nextnum(n).subscribe(value =>{
        this.ans.nativeElement.value= value;

      });
  }

  
}
