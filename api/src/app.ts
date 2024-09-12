import process from "node:process";
import 'dotenv/config'
import 'source-map-support/register'
require('source-map-support').install();
require('module-alias/register')

import express from 'express';
import {AuthRoutes} from "@/controller/auth.routes";
const app = express()

app.use(express.json());
app.use(express.urlencoded());

new AuthRoutes(app).init();

app.listen(process.env.APP_PORT)
