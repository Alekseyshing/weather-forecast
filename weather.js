#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";

const initCli = () => {
  const args = getArgs(process.argv)
  console.log(args);
  if(args.h){
    //вывод help
  }
  if(args.s){
    //сохранить город
  }
  if(args.t){
    //вывод token
  }
  //Вывести погоду
};

initCli()