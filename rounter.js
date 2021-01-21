import express from "express";

export const userRounter = express.Router();

userRounter.get("/", (req,res) => res.send('user index'));
userRounter.get("/edit", (req,res) => res.send('user edit'));
userRounter.get("/password", (req,res) => res.send('user password'));

