import { proxy, useSnapshot } from "valtio";

const ValtioAppState = proxy({
  session: { accessToken: "", refreshToken: "", isAuth: false },
  courses: {},
  badges: {},
  account: { isActive: false },
});

export default ValtioAppState;
