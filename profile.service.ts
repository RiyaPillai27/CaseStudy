import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profilesUrl = 'api/profiles'; // Assuming you have an API endpoint for profiles

  constructor(private http: HttpClient) { }

  getProfiles(id: string): Observable<Profile> {
    const url = `${this.profilesUrl}/${id}`;
    return this.http.get<Profile>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  searchProfiles(term: string): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.profilesUrl}?term=${term}`).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return of([]); // Return an empty array in case of an error
      })
    );
  }

  filterProfiles(criteria: string): Observable<Profile[]> {
    // Your implementation for filtering profiles
    return this.http.get<Profile[]>(`${this.profilesUrl}?criteria=${criteria}`).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return of([]); // Return an empty array in case of an error
      })
    );
  }

  addProfile(profile: Profile): Observable<Profile> {
    // Your implementation for adding a profile
    return this.http.post<Profile>(this.profilesUrl, profile).pipe(
      catchError(this.handleError)
    );
  }

  updateProfile(id: string, updatedProfile: Profile): Observable<void> {
    // Your implementation for updating a profile
    const url = `${this.profilesUrl}/${id}`;
    return this.http.put<void>(url, updatedProfile).pipe(
      catchError(this.handleError)
    );
  }

  deleteProfile(id: string): Observable<void> {
    // Your implementation for deleting a profile
    const url = `${this.profilesUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(this.handleError)
    );
  }
}
