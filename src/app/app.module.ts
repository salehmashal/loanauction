import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderChatComponent } from './header-chat/header-chat.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EnduserMainComponent } from './enduser-main/enduser-main.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { LoginService } from './login/login.service';
import { HeaderService } from './header/header.service';
import { FormsModule }   from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const appRoutes: Routes=[
{ path:'',component: LoginComponent},
{ path:'registeration',component: RegisterationComponent},
{ path:'resetpass',component: ForgotpasswordComponent},
{path:'home',component:EnduserMainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderChatComponent,
    MenuNavComponent,
    NavigationComponent,
    EnduserMainComponent,
    LoginComponent,
    RegisterationComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService,HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
