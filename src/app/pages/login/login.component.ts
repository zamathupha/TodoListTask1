import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
{
  isLonginView: boolean = true;

  


      userRedisterObj: any = {
        userName: ``,
        password: ``,
        email:``
      }

      userLogin: any = {
        userName: ``,
        password: ``, 
      }

      router =inject(Router);

      onRegister(){
        debugger;
        const isLocalData = localStorage.getItem("angular18Local");
        if(isLocalData != null){
          const localArray = JSON.parse(isLocalData);
          localArray.push(this.userRedisterObj);
          localStorage.setItem("angular18Local",JSON.stringify(localArray))
        }else {
          const localArray = [];
          localArray.push(this.userRedisterObj);
          localStorage.setItem("angular18Local",JSON.stringify(localArray))
        }
        alert("Registration Success");
      }
      onLogin(){
        debugger
        const isLocalData = localStorage.getItem("angular18Local");
        if(isLocalData != null){
          const users = JSON.parse(isLocalData);
          let isUserFound = users.find ((m: any) => m.userName= this.userLogin.userName && m.password == this.userLogin.password)
          if(isUserFound ! = undefined) {
           this.router.navigateByUrl(`dashboard`)
          } else{
            alert("User name or password is wrong")
          }
        } else{
          alert("NO User Found")
        }   
      }
    }
