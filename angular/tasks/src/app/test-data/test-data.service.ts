import { Injectable } from '@angular/core';
import {ActorService} from "./actor.service";

@Injectable()
export class TestDataService {
  castMembers: Array<{name: string, part: string}> = [];
  movieName: string;

  constructor(name: string) {
    this.movieName = name;
  }

  addCastMember(name: string, part: string, actorService: ActorService) {
    let dup = this.castMembers.some((member: {name: string, part: string}) => {
      return member.name === name || member.part === part
    })

    //let ok = actorService.canAddMovieToActor(name, this.movieName);

    if(!dup) {
      this.castMembers.push({name: name, part: part});
    }
  }

}
