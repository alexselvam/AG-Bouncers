import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-booking',
  styleUrl: './booking.scss',
  templateUrl: './booking.html',
})
export class Booking {
   booking = {
    name: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    teamSize: '',
    message: ''
  };
  today = new Date().toISOString().split('T')[0];

  submitBooking(): void {

    const whatsappNumber = '91XXXXXXXXXX'; // Replace with your WhatsApp number

    const message = `
*NEW BOOKING ENQUIRY - AG BOUNCERS*

Name: ${this.booking.name}
Phone: ${this.booking.phone}
Event Type: ${this.booking.eventType}
Event Date: ${this.booking.eventDate}
Location: ${this.booking.location}
Team Size: ${this.booking.teamSize}

Additional Details:
${this.booking.message || 'Not provided'}

Please contact me regarding this booking.
    `;

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

  }

}
