import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, delay, filter, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieListAPIResponse } from '../shared/interfaces/movies-list-api-response.interface';
import { MovieDetailAPIResponse } from '../shared/interfaces/movie-detail-api-response.interface';
import { MovieCastAPIResponse } from '../shared/interfaces/movie-cast-api-response.interface';

@Injectable({
    providedIn: 'root'
  })
  export class ApiServicesService {
    
  constructor(
    private http: HttpClient,
  ) { }

  
  getTableData(): Observable<any> {
    const products = [
      {code: "1231", name: 'Product 1', category: 'category 1', quantity: '111'},
      {code: "1232", name: 'Product 2', category: 'category 1', quantity: '111'},
      {code: "1233", name: 'Product 4', category: 'category 1', quantity: '111'},
      {code: "1234", name: 'Product 5', category: 'category 1', quantity: '111'},
      {code: "1235", name: 'Product 6', category: 'category 1', quantity: '111'},
      {code: "1236", name: 'Product 7', category: 'category 1', quantity: '111'},
      {code: "1237", name: 'Product 8', category: 'category 1', quantity: '111'},
      {code: "1238", name: 'Product 9', category: 'category 1', quantity: '111'},
      {code: "1239", name: 'Product 10', category: 'category 1', quantity: '111'},
      {code: "1240", name: 'Product 11', category: 'category 1', quantity: '111'},
      {code: "1241", name: 'Product 12', category: 'category 1', quantity: '111'},
      {code: "1242", name: 'Product 13', category: 'category 1', quantity: '111'},
    ];

    return of(products).pipe(
      delay(5000)
      )
  }

  getMoviesListMock(search):Observable<MovieListAPIResponse> {

    const moviesSearch =  {
      "page": 1,
      "results": [
          {
              "adult": false,
              "backdrop_path": "/yRBc6WY3r1Fz5Cjd6DhSvzqunED.jpg",
              "genre_ids": [
                  28,
                  12,
                  878
              ],
              "id": 1061474,
              "original_language": "en",
              "original_title": "Superman",
              "overview": "Superman aprende a equilibrar su herencia kryptoniana con su educación humana.",
              "popularity": 89.331,
              "poster_path": "/othVQcuKozpA3yIuDZZjBiyDMTY.jpg",
              "release_date": "2025-07-09",
              "title": "Superman",
              "video": false,
              "vote_average": 0.0,
              "vote_count": 0
          },
          {
              "adult": false,
              "backdrop_path": "/5PfHGXosySGs0l1JfeREspy3v6G.jpg",
              "genre_ids": [
                  878,
                  28,
                  12
              ],
              "id": 1924,
              "original_language": "en",
              "original_title": "Superman",
              "overview": "Desde una galaxia remota, un recién nacido es enviado por sus padres al espacio debido a la inminente destrucción del planeta donde viven. La nave aterriza en la Tierra, y el niño es adoptado por unos granjeros que le inculcan los mejores valores humanos. Con los años el joven se irá a Metrópolis y allí usará sus poderes sobrenaturales para luchar contra el mal...",
              "popularity": 52.438,
              "poster_path": "/pS4i2L1kUERAd6bm8j14uke7Apx.jpg",
              "release_date": "1978-12-14",
              "title": "Superman",
              "video": false,
              "vote_average": 7.138,
              "vote_count": 3837
          },
          {
              "adult": false,
              "backdrop_path": "/6PCprqrm0kdzYdAtZlSiFoY0Ypi.jpg",
              "genre_ids": [
                  28,
                  16,
                  12,
                  10751,
                  14,
                  878
              ],
              "id": 95414,
              "original_language": "en",
              "original_title": "Superman",
              "overview": "After The Daily Planet receives a letter from a mad scientist threatening to wreak destruction with his Electrothanasia Ray, Lois Lane heads out in the hopes of getting more information for a news story.",
              "popularity": 6.313,
              "poster_path": "/be4a0lyJF3Jo9Z1ykVR7gYUfBQt.jpg",
              "release_date": "1941-09-26",
              "title": "Superman: El Científico Loco",
              "video": false,
              "vote_average": 6.9,
              "vote_count": 98
          },
          {
              "adult": false,
              "backdrop_path": "/sfWWu2Nf6FuGinullL4FD1QldnW.jpg",
              "genre_ids": [
                  28,
                  80,
                  878
              ],
              "id": 126712,
              "original_language": "en",
              "original_title": "Superman",
              "overview": "Superman viene a la Tierra cuando era un niño y crece para convertirse en el primer superhéroe de su hogar. Su primer gran desafío es oponerse a la Dama Araña.",
              "popularity": 3.616,
              "poster_path": "/tdOGjjtpXejieTppVQQKJBW3lbN.jpg",
              "release_date": "1948-07-15",
              "title": "Superman",
              "video": false,
              "vote_average": 6.0,
              "vote_count": 28
          },
          {
              "adult": false,
              "backdrop_path": null,
              "genre_ids": [
                  28,
                  12,
                  878
              ],
              "id": 167595,
              "original_language": "hi",
              "original_title": "Superman",
              "overview": "In this Indian take on the classic superhero story, a young baby from the doomed planet Krypton is sent to Earth, where he is adopted by an elderly couple in India who name him Shekhar. After growing to an adult and learning about his origins and powers, he goes to the city in search of his school sweetheart, Gita, who has become a newpaper reporter. At the same time, Verma, Shekhar's rival for Gita's affection in their school days, has gone on to become a crime lord and general super-villain. Verma has hatched at plan to become rich by devastating part of India with natural disasters, then buying up all of the abandoned land. Will Superman/Shekhar be able to put a stop to Verma's evil plan? Will he win Gita's heart? Will he keep his double identity a secret?",
              "popularity": 3.078,
              "poster_path": "/boyt0QHBC9rbXUhV9lYbimVEKw2.jpg",
              "release_date": "1987-12-31",
              "title": "Superman",
              "video": false,
              "vote_average": 4.7,
              "vote_count": 16
          },
          {
              "adult": false,
              "backdrop_path": "/jDW24Hswd1gCHqmPUxf32E2K3yY.jpg",
              "genre_ids": [
                  28
              ],
              "id": 558077,
              "original_language": "bn",
              "original_title": "Superman",
              "overview": "A child from a dying world is sent to Earth, where his alien physiology renders him superhuman. Bengali remake of the 1978 classic.",
              "popularity": 1.664,
              "poster_path": "/deA1k1ZnenD9zdm2deoXgbnZo7n.jpg",
              "release_date": "1990-01-01",
              "title": "Superman",
              "video": false,
              "vote_average": 7.4,
              "vote_count": 6
          },
          {
              "adult": false,
              "backdrop_path": "/5fX1oSGuYdKgwWmUTAN5MNSQGzr.jpg",
              "genre_ids": [
                  28,
                  12,
                  14
              ],
              "id": 209112,
              "original_language": "en",
              "original_title": "Batman v Superman: Dawn of Justice",
              "overview": "Ante el temor de las acciones que pueda llevar a cabo Superman, el vigilante de Gotham City aparece para poner a raya al superhéroe de Metrópolis, mientras que la opinión pública debate cuál es realmente el héroe que necesitan. El hombre de acero y Batman se sumergen en una contienda territorial, pero las cosas se complican cuando una nueva y peligrosa amenaza surge rápidamente, poniendo en jaque la existencia de la humanidad.",
              "popularity": 71.175,
              "poster_path": "/mS3t9puIjLKgoex82cu9d6G0835.jpg",
              "release_date": "2016-03-23",
              "title": "Batman vs Superman: El amanecer de la justicia",
              "video": false,
              "vote_average": 5.974,
              "vote_count": 18003
          },
          {
              "adult": false,
              "backdrop_path": null,
              "genre_ids": [
                  16,
                  12,
                  878
              ],
              "id": 1410010,
              "original_language": "en",
              "original_title": "Superman",
              "overview": "A LEGO stop motion Superman film in which the titular character saves minifigures, cats, and fights Lex Luthor",
              "popularity": 2.344,
              "poster_path": null,
              "release_date": "2024-12-09",
              "title": "Superman",
              "video": false,
              "vote_average": 0.0,
              "vote_count": 0
          },
          {
              "adult": false,
              "backdrop_path": "/7bf0HqO64dbzGKpK8sKJJDnv3TE.jpg",
              "genre_ids": [
                  878,
                  12,
                  16,
                  28
              ],
              "id": 630656,
              "original_language": "en",
              "original_title": "The Death and Return of Superman",
              "overview": "La muerte y el regreso de Superman: Sea testigo de la batalla sin límites entre la Liga de la Justicia y una fuerza alienígena imparable conocida solo como Doomsday, una batalla que solo Superman puede terminar y cambiará para siempre la cara de Metrópolis.",
              "popularity": 21.162,
              "poster_path": "/ikY9kxX2XDcPamPw6RLajG3ARDE.jpg",
              "release_date": "2019-10-01",
              "title": "La Muerte y El Regreso de Superman",
              "video": true,
              "vote_average": 6.7,
              "vote_count": 1208
          },
          {
              "adult": false,
              "backdrop_path": "/8eRscFbRYl681zDfkjv1jjW1KAA.jpg",
              "genre_ids": [
                  878,
                  28,
                  12
              ],
              "id": 1452,
              "original_language": "en",
              "original_title": "Superman Returns",
              "overview": "Tras varios años de misteriosa ausencia, Supermán regresa a la Tierra, pero un viejo enemigo intenta arrebatarle sus poderes. Tratando de proteger al mundo de una destrucción masiva, Supermán emprende una aventura épica de redención que lo lleva desde las profundidades del océano a las regiones más remotas del espacio.",
              "popularity": 32.702,
              "poster_path": "/rtRlig4q4kUO1AzN7o7dzRIqzxI.jpg",
              "release_date": "2006-06-28",
              "title": "Superman Returns: el regreso",
              "video": false,
              "vote_average": 5.774,
              "vote_count": 4200
          },
      ],
      "total_pages": 10,
      "total_results": 189
    } as MovieListAPIResponse;

    
    return of(moviesSearch).pipe(
      delay(1000)
      )

  }

  getMovieDetailMock(id):Observable<any> {
    
    const movie = {
      "adult": false,
      "backdrop_path": "/yRBc6WY3r1Fz5Cjd6DhSvzqunED.jpg",
      "belongs_to_collection": null,
      "budget": 0,
      "genres": [
          {
              "id": 28,
              "name": "Action"
          },
          {
              "id": 12,
              "name": "Adventure"
          },
          {
              "id": 878,
              "name": "Science Fiction"
          }
      ],
      "homepage": "https://www.superman.com",
      "id": 1061474,
      "imdb_id": "tt5950044",
      "origin_country": [
          "US"
      ],
      "original_language": "en",
      "original_title": "Superman",
      "overview": "Superman, a cub reporter in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.",
      "popularity": 89.331,
      "poster_path": "/wPLysNDLffQLOVebZQCbXJEv6E6.jpg",
      "production_companies": [
          {
              "id": 184898,
              "logo_path": "/2Z2hiM1ERqFOWRxNxWoJZ8lTxhb.png",
              "name": "DC Studios",
              "origin_country": "US"
          }
      ],
      "production_countries": [
          {
              "iso_3166_1": "US",
              "name": "United States of America"
          }
      ],
      "release_date": "2025-07-09",
      "revenue": 0,
      "runtime": 0,
      "spoken_languages": [
          {
              "english_name": "English",
              "iso_639_1": "en",
              "name": "English"
          }
      ],
      "status": "Post Production",
      "tagline": "Look up.",
      "title": "Superman",
      "video": false,
      "vote_average": 0.0,
      "vote_count": 0
    };

    return of(movie).pipe(
      delay(1000)
      )

  }

  getMovieCastMock(id):Observable<any> {
    const cast = {
      "id": 1061474,
      "cast": [
          {
              "adult": false,
              "gender": 2,
              "id": 1785590,
              "known_for_department": "Acting",
              "name": "David Corenswet",
              "original_name": "David Corenswet",
              "popularity": 29.027,
              "profile_path": "/kPxoeGBVRb4goUVmi4Qpg0lLnYW.jpg",
              "cast_id": 16,
              "character": "Superman / Clark Kent",
              "credit_id": "649b4104b1f68d00af51ed3f",
              "order": 0
          },
          {
              "adult": false,
              "gender": 1,
              "id": 993774,
              "known_for_department": "Acting",
              "name": "Rachel Brosnahan",
              "original_name": "Rachel Brosnahan",
              "popularity": 18.928,
              "profile_path": "/1f9NK43gWrXN2uMmYMlennB7jCC.jpg",
              "cast_id": 17,
              "character": "Lois Lane",
              "credit_id": "649b412baf58cb00c5cf5329",
              "order": 1
          },
          {
              "adult": false,
              "gender": 2,
              "id": 3292,
              "known_for_department": "Acting",
              "name": "Nicholas Hoult",
              "original_name": "Nicholas Hoult",
              "popularity": 56.489,
              "profile_path": "/laeAYQVBV9U3DkJ1B4Cn1XhpT8P.jpg",
              "cast_id": 24,
              "character": "Lex Luthor",
              "credit_id": "655be91010923000ab494c5f",
              "order": 2
          },
          {
              "adult": false,
              "gender": 2,
              "id": 39391,
              "known_for_department": "Acting",
              "name": "Edi Gathegi",
              "original_name": "Edi Gathegi",
              "popularity": 15.295,
              "profile_path": "/dt8yMyycDlzxkjhmuuJJ4tXDbp4.jpg",
              "cast_id": 20,
              "character": "Michael Holt / Mister Terrific",
              "credit_id": "64adcf52e24b93011d7534f8",
              "order": 3
          },
          {
              "adult": false,
              "gender": 2,
              "id": 1180346,
              "known_for_department": "Acting",
              "name": "Anthony Carrigan",
              "original_name": "Anthony Carrigan",
              "popularity": 12.914,
              "profile_path": "/nHlu6rBHLardtTAHma3lvX27hkA.jpg",
              "cast_id": 22,
              "character": "Rex Mason / Metamorpho",
              "credit_id": "64aef9996a344800c9fd7b77",
              "order": 4
          },
          {
              "adult": false,
              "gender": 2,
              "id": 51797,
              "known_for_department": "Acting",
              "name": "Nathan Fillion",
              "original_name": "Nathan Fillion",
              "popularity": 45.006,
              "profile_path": "/6arEYF9gD9mqjwGXv1QfqmLw445.jpg",
              "cast_id": 21,
              "character": "Guy Gardner / Green Lantern",
              "credit_id": "64adcfba1cfe3a00e4c51493",
              "order": 5
          },
      ]
    }

    return of(cast).pipe(
      delay(1000)
      )
  }


    getApiEndpoint() {
      return environment.apiEndpoint;
    }

    getUsersList(nombre?):Observable<any> {
      return this.http.get(`https://api.github.com/search/users?q=${nombre}`,
        {
          observe: 'response',
          reportProgress: true,
        })
        .pipe(map(res => res.body))
    }

    getUserByName(name):Observable<any> {
      return this.http.get(`https://api.github.com/users/${name}`,
        {
          observe: 'response',
          reportProgress: true,
        })
        .pipe(map(res => res.body))
    }

    getMoviesList(search):Observable<MovieListAPIResponse> {
      return this.http.get(`${this.getApiEndpoint()}search/movie?api_key=${environment.api_key}&query=${search}&language=es-ES`,
        {
          observe: 'response',
          reportProgress: true,
        })
        .pipe(map(res => res.body as MovieListAPIResponse))
    }

    getMovieDetail(id):Observable<MovieDetailAPIResponse> {
      return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${environment.api_key}&language=es-ES`,
        {
          observe: 'response',
          reportProgress: true,
        })
        .pipe(map(res => res.body as MovieDetailAPIResponse))
    }

    getMovieCast(id):Observable<MovieCastAPIResponse> {
      return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${environment.api_key}&language=es-ES`,
        {
          observe: 'response',
          reportProgress: true,
        })
        .pipe(map(res => res.body as MovieCastAPIResponse))
    }

  }