import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { AppRoutingModule } from './router/app-routing.module';
import { BreadNavComponent }         from './component/bread/bread.component';
import { TitleComponent } from './component/title/title.component';
@NgModule({
  imports:      [ AppRoutingModule,CommonModule ],
  declarations: [ BreadNavComponent,TitleComponent ],
  exports:      [ AppRoutingModule,BreadNavComponent,TitleComponent,CommonModule, FormsModule ]
})
export class SharedModule { }