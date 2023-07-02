import { createSelector } from "reselect";
const NavInfoModulesActivityLogDomain = (state) => state.navReducer;

const makeSelectPublicLanguage = () =>
    createSelector(NavInfoModulesActivityLogDomain, (substate) =>
    substate.get("publicLanguage"));

export{
    NavInfoModulesActivityLogDomain,
    makeSelectPublicLanguage
}
