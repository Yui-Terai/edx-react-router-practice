import React from "react";
import { Link, Switch, Route } from "react-router-dom";

const Projects = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={match.url + "/game_project"}>Game Project</Link>
        </li>
        <li>
          <Link to={match.url + "/react_project"}>React Project</Link>
        </li>
        <li>
          <Link to={match.url + "/database_project"}>Database Project</Link>
        </li>
        <Link to={match.url + "/machine_learning_project"}>
          Machine Learning Project
        </Link>
      </ul>
      <Switch>
        <Route
          path={match.url + "/:projectName"}
          render={({ match }) => <div>{match.params.projectName}</div>}
        />
        <Route
          exact
          path={match.url}
          render={() => <h1>Pick a project to view!</h1>}
        />
      </Switch>
    </div>
  );
};

export default Projects;
