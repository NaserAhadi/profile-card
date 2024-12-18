import "./App.css";

const skills = [
  {
    skill: "JavaScript",
    level: "upper-intermediate",
    color: "yellow",
  },
  {
    skill: "Vue.js",
    level: "upper-intermediate",
    color: "green",
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "React",
    level: "beginner",
    color: "cadetblue",
  },
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "blue",
  },
];

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
  let calEmoji = function (level) {
    switch (level) {
      case "advanced":
        return "👌";
      case "upper-intermediate":
        return "👍";
      case "intermediate":
        return "🙌";
      case "beginner":
        return "🤓";
      default:
        break;
    }
  };
  return (
    <div className="skills-list">
      {skills.map((item) => (
        <Skill
          skill={item.skill}
          color={item.color}
          emoji={calEmoji(item.level)}
        />
      ))}
    </div>
  );
}
function Skill({ skill, color, emoji }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span style={{ marginRight: "4px" }}>{skill}</span> <span>{emoji}</span>
    </div>
  );
}

export default App;
