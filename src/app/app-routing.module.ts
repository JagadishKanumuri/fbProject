import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { LoginComponent } from './login/login.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"home", component: AppComponent},
  {path:"search", component: SearchComponent},
  { path:"login", component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent},
  {path:"manageBooking", component: ManageBookingComponent},
  {path:"bookingHistory", component: BookingHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
