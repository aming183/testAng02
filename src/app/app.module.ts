import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { TranslatePipe } from './translate.pipe';
import { DataService } from './data.service';
import { HttpModule  } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
