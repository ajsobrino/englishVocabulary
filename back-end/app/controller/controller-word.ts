import Word from "../model/word";
import WordCriteria from "./criteria/word-criteria";
import WordService from "../services/word-service";
import { Request, response, Response } from "express";
import { buildCriteria } from "./criteria/word-criteria";

const wordService = WordService.getInstance();

let searchByCriteria = async (req: Request, resp: Response) => {
  let criteria = buildCriteria(req.query);
  let words = await wordService.searchByCriteria(criteria);
  resp.json({ words }).status(200).send();
};

let deleteWord = async (req: Request, resp: Response) => {
  console.log(req);
  await wordService.delete("jsdhjsh");
  resp.status(204);
};

let update = async (req: Request, resp: Response) => {
    console.log(req.params);
  resp.status(204).send();
};

module.exports = { searchByCriteria, deleteWord, update };
