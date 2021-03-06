import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbCardModule,
  NbThemeModule,
  NbIconModule,
  NbSelectModule,
  NbDialogModule,
} from '@nebular/theme';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [AppComponent, InventoryComponent, DialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    HttpClientModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbCardModule,
    NbThemeModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbSelectModule,
    NbDialogModule.forRoot(),
    NbDialogModule.forChild(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
