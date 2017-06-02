import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderChatComponent } from './header-chat/header-chat.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EnduserMainComponent } from './enduser-main/enduser-main.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderChatComponent,
    MenuNavComponent,
    NavigationComponent,
    EnduserMainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
