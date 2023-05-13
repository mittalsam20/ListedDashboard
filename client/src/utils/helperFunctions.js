import _ from "lodash";

export const getCurrentRoute = ({ location }) => {
  return _.last(location.pathname.split("/"));
};
