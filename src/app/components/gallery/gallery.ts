import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-gallery',
  styleUrl: './gallery.scss',
  templateUrl: './gallery.html',
})
export class Gallery {
  galleryItems = [
    {
      title: 'VIP PROTECTION',
      image: 'assets/image/alex.webp',
      video: 'assets/video/video_2.mp4'
    },
    {
      title: 'EVENT SECURITY',
      image: 'assets/image/alex.webp',
      video: 'assets/video/video_1.mp4'
    },
    
    {
      title: 'WEDDING SECURITY',
      image: 'assets/image/alex.webp',
      video: 'assets/video/video_3.mp4'
    },
    {
      title: 'CROWD MANAGEMENT',
      image: 'assets/image/alex.webp',
      video: 'assets/videos/crowd-management.mp4'
    },
    {
      title: 'VENUE SECURITY',
      image: 'assets/image/alex.webp',
      video: 'assets/videos/venue-security.mp4'
    },
    {
      title: 'TEAM OPERATIONS',
      image: 'assets/image/alex.webp',
      video: 'assets/videos/team-operations.mp4'
    }
  ];

  playVideo(event: Event): void {
    const card = event.currentTarget as HTMLElement;
    const video = card.querySelector('video');

    if (video) {
      video.play().catch(() => { });
    }
  }

  stopVideo(event: Event): void {
    const card = event.currentTarget as HTMLElement;
    const video = card.querySelector('video');

    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }
  toggleVideo(event: Event): void {
    const card = event.currentTarget as HTMLElement;
    const video = card.querySelector('video');

    if (!video) return;

    if (card.classList.contains('playing')) {
      video.pause();
      video.currentTime = 0;
      card.classList.remove('playing');
    } else {
      video.play().then(() => {
        card.classList.add('playing');
      }).catch(() => {
        console.log('Video playback failed');
      });
    }
  }
}
