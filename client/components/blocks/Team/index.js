import Header from '../../shared/Header';
import MemberCards from './member-cards';

const Team = ({ header, members }) => {
  return (
    <div className="p-8 bg-white rounded-lg">
      <Header {...header} />
      <MemberCards members={members} />
    </div>
  );
};

Team.defaultProps = {};

export default Team;
