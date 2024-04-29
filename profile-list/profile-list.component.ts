import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe(
      (profile: Profile) => { // Ensure that the argument is of type Profile
        this.profiles.push(profile); // Add the profile to the array
      },
      (error) => {
        console.error('Error fetching profiles:', error);
      }
    );
  }
}
