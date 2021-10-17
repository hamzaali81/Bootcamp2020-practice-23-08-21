import * as React from 'react';
import { LaunchesQuery } from '../../generated/graphql';


interface Props {
  data: LaunchesQuery;
}


const Launch: React.FC<Props> = ({ data }) => (
  <div >
    <h3>Launches</h3>
    <ol >
      {!!data.launches &&
        data.launches.map(
          (launch, i) =>
            !!launch && (
              <li key={i}>
                {launch.mission_name} ({launch.launch_year})
              </li>
            ),
        )}
    </ol>
  </div>
);

export default Launch;