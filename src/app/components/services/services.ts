import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-services',
  styleUrl: './services.scss',
  templateUrl: './services.html',
})
export class Services {
   services = [
    {
      number: '01',
      title: 'VIP PROTECTION',
      description: 'Professional personal security for VIPs, executives and distinguished guests.',
      icon: '◆'
    },
    {
      number: '02',
      title: 'CELEBRITY BODYGUARDS',
      description: 'Dedicated close protection and crowd coordination for celebrities and public figures.',
      icon: '✦'
    },
    {
      number: '03',
      title: 'WEDDING SECURITY',
      description: 'Organised security arrangements for weddings, receptions and private celebrations.',
      icon: '◇'
    },
    {
      number: '04',
      title: 'CROWD MANAGEMENT',
      description: 'Professional crowd control and entry management for large-scale events.',
      icon: '▦'
    },
    {
      number: '05',
      title: 'TEMPLE FESTIVAL SECURITY',
      description: 'Security support for temple festivals, public gatherings and cultural celebrations.',
      icon: '✧'
    },
    {
      number: '06',
      title: 'PUB & NIGHTCLUB SECURITY',
      description: 'Reliable venue security, access control and on-site crowd supervision.',
      icon: '◈'
    }
  ];
}
