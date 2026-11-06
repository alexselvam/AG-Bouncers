import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-team',
  styleUrl: './team.scss',
  templateUrl: './team.html',
})
export class Team {
  teamRoles = [
    {
      number: '01',
      title: 'SECURITY PERSONNEL',
      description: 'Trained professionals focused on maintaining safety and security.'
    },
    {
      number: '02',
      title: 'VIP PROTECTION TEAM',
      description: 'Dedicated personnel for personal protection and VIP movements.'
    },
    {
      number: '03',
      title: 'EVENT SECURITY TEAM',
      description: 'Organised teams for event security and crowd supervision.'
    },
    {
      number: '04',
      title: 'SECURITY SUPERVISORS',
      description: 'Responsible leadership and coordination throughout operations.'
    }
  ];
}
