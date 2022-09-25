// import {Profile} from './components/Profile/Profile';
// import { StatList } from './components/Statistics/StatList';
import { FriendList } from './components/FriendList/FriendList';
// import user from './path/user.json';
// import stats from './path/stats.json';
import friends from './path/friends.json';

export const App = () => {
  return (
    <>
      <h1> - Task 1 - </h1>
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
      <h1> - Task 2 - </h1>
      {/* <StatList title="Upload stats" stats={stats} /> */}
      <h1> - Task 3 - </h1>
      <FriendList friends={friends} />
    </>
  );
};
