import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LiboModule } from '@testsharedstyles/libo';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LiboModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
