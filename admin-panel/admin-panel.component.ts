import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  profileForm: FormGroup;
  profiles: Profile[] = [];
  searchTerm: string = '';
  filterCriteria: string = '';
  editProfile: Profile | undefined;
  newProfile: Profile = { name: '', description: '', address: '' };
  selectedProfile: Profile | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(): void {
    this.profileService.getProfiles().subscribe(profiles => {
      this.profiles = profiles;
    });
  }

  editProfile(profile: Profile): void {
    if (profile) {
      this.editProfile = profile;
      this.profileForm.patchValue({
        name: profile.name,
        description: profile.description
      });
    }
  }

  saveEditedProfile(): void {
    if (this.editProfile) {
      this.editProfile.name = this.profileForm.value.name;
      this.editProfile.description = this.profileForm.value.description;
      
      this.profileService.updateProfile(this.editProfile.id!, this.editProfile).subscribe(updatedProfile => {
        const index = this.profiles.findIndex(p => p.id === updatedProfile.id);
        if (index !== -1) {
          this.profiles[index] = updatedProfile;
        }
        this.editProfile = undefined;
        this.profileForm.reset();
      });
    }
  }

  cancelEdit(): void {
    this.editProfile = undefined;
    this.profileForm.reset();
  }

  searchProfiles(): void {
    this.profileService.searchProfiles(this.searchTerm).subscribe(profiles => this.profiles = profiles);
  }

  filterProfiles(): void {
    this.profileService.filterProfiles(this.filterCriteria).subscribe(profiles => this.profiles = profiles);
  }

  addProfile(): void {
    const { name, description } = this.profileForm.value;
    if (!name.trim() || !description.trim()) { return; }
    this.profileService.addProfile({ name, description } as Profile)
      .subscribe(profile => {
        this.profiles.push(profile);
      });
  }

  deleteProfile(profile: Profile): void {
    if (profile.id) {
      this.profiles = this.profiles.filter(p => p !== profile);
      this.profileService.deleteProfile(profile.id).subscribe();
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.addProfile();
    } else {
      // Display error messages to the user
    }
  }
}
