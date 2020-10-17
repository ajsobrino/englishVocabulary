import GeneralCriteria from "./general-criteria";
import { numerPerPage } from "../../config/config";
export default interface WordCriteria extends GeneralCriteria {}

export function buildCriteria(params) {
  let criteria = {} as WordCriteria;
  console.log(params);
  if (params["page"] && params["page"] > 0) {
    criteria.page = +params["page"];
  } else {
    criteria.page = 1;
  }
  if (params["elementPerPage"] && params["elementPerPage"] > 0) {
    criteria.numberPerPage = params["elementPerPage"];
  } else {
    criteria.numberPerPage = numerPerPage;
  }

  return criteria;
}
