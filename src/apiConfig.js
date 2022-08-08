export const API_URL = `http://${window.location.hostname}:8000`;

export const GET_USER_URL = API_URL + "/user";
export const CONTESTS_LIST_URL = API_URL + "/contests/list";
export const CONTESTS_NEW_URL = API_URL + "/contests/new";
export const deleteContestURL = contestID => API_URL + `/contests/${contestID}/delete`;
export const showContestURL = contestID => API_URL + `/contests/${contestID}/show`;

export const newContenderURL = contestID => API_URL + `/contests/${contestID}/new_contender`;
export const deleteContenderURL = (contestID, contenderName) => API_URL + `/contests/${contestID}/delete_contender/${contenderName}`;
export const getContendersURL = contestID => API_URL + `/contests/${contestID}/contenders`;

export const UPDATE_POINTS_URL = API_URL + "/contests/update_points"

export const REGISTER_URL = API_URL + "/register";
export const LOGIN_URL = API_URL + "/login";