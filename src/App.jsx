// import {Profile} from './components/Profile/Profile';
import { StatItem } from './components/Statistics/StatItem';

// import user from './path/user.json';
import stats from './path/stats';
console.log(stats)
export const App = () => {
  return (
    <>
      <StatItem 
      label={stats.label} 
      percentage={stats.percentage} 
      />
{/* 
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    /> */}
    </>
  );
};
