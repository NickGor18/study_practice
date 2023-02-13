import { Injectable } from '@angular/core';
import { ActorService } from './actor.service';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MovieHttpService {
  castMembers: Array<{name: string, part: string}> = [];

  constructor(private http: HttpClient) {
  }

  addCastMember(movieName: string, name: string, part: string) {
    let dup = this.castMembers.some((member: {name: string, part: string}) => {
      return member.name === name || member.part === part
    })

    if(!dup) {
      this.castMembers.push({name: name, part: part});
      this.storeNewCastMember(movieName, name, part).subscribe();
    }
  }

  storeNewCastMember(movieName: string, name: string, part: string) {
    console.log(1)
    return this.http.post('/movies/' + movieName + '', { name: name, part: part});
  }




}
