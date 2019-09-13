import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SalvarClientePageModule } from './cadastro/salvar-cliente/salvar-cliente.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SalvarClientePageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAlqjRTS5JPMIyR6Zp-xeaHH6a_5gbm1Fg",
      authDomain: "aulaprojeto-angular.firebaseapp.com",
      databaseURL: "https://aulaprojeto-angular.firebaseio.com",
      projectId: "aulaprojeto-angular",
      storageBucket: "aulaprojeto-angular.appspot.com",
      messagingSenderId: "814945043362",
      appId: "1:814945043362:web:a2276af313fdd2c0"
  
    }), AngularFireDatabaseModule,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
