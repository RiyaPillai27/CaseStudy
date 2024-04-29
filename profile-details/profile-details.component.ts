import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile.model';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[] = []; // Initialize as an empty array

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe(profile => {
      this.profiles = [profile]; // Assign the single profile to an array
    });
  }
}
