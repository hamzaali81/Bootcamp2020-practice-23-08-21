import { gql } from '@apollo/client';

export const QUERY_LAUNCH = gql`
  query Launches {
    launches {
      flight_number
      mission_name
      launch_year
      launch_success
    }
  }
`;