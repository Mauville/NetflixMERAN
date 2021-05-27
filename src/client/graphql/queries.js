import { gql } from 'graphql-tag';

export const MEDIA_INFO = gql`
  query mediaInfo($title: String!) {
    mediaInfo(title: $title) {
      director
      cast
      country
      release_year
    }
  }
`;

export const ACTOR_MOVIES = gql`
  query actorMovies($actor: String!) {
    actorMovies(actor: $actor) {
      mediatype
      title
      showID
      release_year
      rating
      listed_in
      duration
      director
      description
      date_added
      country
      cast
    }
  }
`;

export const MEDIA_COUNT = gql`
  query mediaCount {
    mediaCount
  }
`;

export const MOVIES_PER_COUNTRY = gql`
  query moviesPerCountry($country: String!) {
    moviesPerCountry(country: $country)
  }
`;

export const MOVIES_PER_YEAR = gql`
  query moviesPerCountry($year: Int!) {
    moviesPerYear(year: $year)
  }
`;
