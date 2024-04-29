// admin-panel.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPanelComponent } from './admin-panel.component';
import { ProfileService } from '../profile.service';
import { of } from 'rxjs';

describe('AdminPanelComponent', () => {
  let component: AdminPanelComponent;
  let fixture: ComponentFixture<AdminPanelComponent>;
  let profileService: jasmine.SpyObj<ProfileService>;

  beforeEach(async () => {
    profileService = jasmine.createSpyObj('ProfileService', ['getProfiles', 'addProfile', 'updateProfile', 'deleteProfile']);

    await TestBed.configureTestingModule({
      declarations: [AdminPanelComponent],
      providers: [{ provide: ProfileService, useValue: profileService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelComponent);
    component = fixture.componentInstance;
    profileService.getProfiles.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases to test addProfile, updateProfile, and deleteProfile methods
});

