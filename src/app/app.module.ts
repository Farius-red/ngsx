import { PostsState } from './store/post/post.state';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from 'src/environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPostComponent } from './componentes/listar-post/listar-post.component';
import { NuevoPostComponent } from './componentes/nuevo-post/nuevo-post.component';



@NgModule({
  declarations: [
    AppComponent,
    ListarPostComponent,
    NuevoPostComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([PostsState],
      { developmentMode: !environment.production }
    ),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
