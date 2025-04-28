import { Injectable } from '@angular/core';
import { Parent } from '../../models/parent';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {


  private apiUrl = 'assets/json_db/users.json';

  private parents : Parent[] = [];

  constructor(private http: HttpClient) {}

  getParents(): Observable<Parent[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => {
        const users = data.users;
        const parents: Parent[] = [];

        for (const uid in users) {
          const user = users[uid];
          if (user.role === 'Parent') {
            const parent: Parent = {
              uid: uid,
              firstName: `${user.firstName}`,
              lastName:`${user.lastName}`,
              email : user.email,
              linkedStudentIds: user.linkedStudentIds
            };
            parents.push(parent);
          }
        }
        this.parents = parents;

        return parents;
      })
    );
  }


  addParent(parent :Parent){
    parent.uid = Date.now().toString();
    this.parents.push(parent);
  }

  seeDetailsOfParent(id : string){
    return this.parents.find( parent => id === parent.uid);
  }


}
