import "./App.css";

function App() {
  return (
    <div className="container">
      <Avatar />
      <Description />
    </div>
  );
}

function Avatar() {
  return <img src="naser-avatar.jpeg" className="avatar" alt="avatar" />;
}
function Description() {
  return (
    <div className="description">
      <h1>Naser Ahadi</h1>
      <p className="description-text">
        Detail-oriented Front-End Developer with over 4 years of experience
        specializing in JavaScript and the Vue.js Ecosystem. Demonstrated
        expertise in developing and maintaining complex web applications,
        implementing UI/UX designs, and ensuring clean, efficient code. Proven
        track record of enhancing application performance, refactoring
        codebases, and leading front-end initiatives. Strong communicator and
        team player committed to continuous learning and contributing to team
        success.
      </p>
      <SkillsList />
    </div>
  );
}

function SkillsList() {
  return (
    <div className="skills-list">
      <Skill color="blue" skill="HTML+CSS" emoji="🤓" />
      <Skill color="yellow" skill="JavaScript" emoji="🙌" />
      <Skill color="red" skill="Git and Github" emoji="👌" />
      <Skill color="cadetblue" skill="React" emoji="👍" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span style={{ marginRight: "4px" }}>{props.skill}</span>{" "}
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
