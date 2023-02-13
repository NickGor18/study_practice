import {TestDataService} from "./test-data/test-data.service";
import {ActorService} from "./test-data/actor.service";
import {MovieHttpService} from "./test-data/movie-http.service";
import {of} from "rxjs";

describe('A simple test', () => {
  it('should be true', () => {
    expect(true).toBe(true)
  })
});

describe('service test', () => {
  let testData!: TestDataService
  let movieService!: MovieHttpService
  let mock!: any
  let mockHttp!: any

  beforeEach(() => {
    testData = new TestDataService('Start Wars')
    //mock = jasmine.createSpyObj('actorSvc', ['canAddMovieToActor'])
    mockHttp = jasmine.createSpyObj('http', ['post'])
    movieService = new MovieHttpService(mockHttp)
    //mock.canAddMovieToActor.and.returnValue(true)
  })

  it('adding a cast member increases the cast member count by one', () => {
    // @ts-ignore
    mockHttp.post.and.returnValue(of(true));
    // @ts-ignore
    movieService.addCastMember('Star Wars I', 'Harrison Ford', 'Star Wars', ) //mock)
    expect(movieService.castMembers.length).toBe(1)
  });

  it('adding a cast member increases the cast member count by one', () => {
    // @ts-ignore
    mockHttp.post.and.returnValue(of(true));
    // @ts-ignore
    movieService.addCastMember('Star Wars I', 'Harrison Ford', 'Star Wars', ) //mock)
    expect(mockHttp.post).toHaveBeenCalledWith('/movies/Star Wars I', jasmine.any(Object))
  });

  
})
