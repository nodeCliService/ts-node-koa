import 'reflect-metadata';
import * as Koa from 'koa';
const logger = require('koa-logger')
const ip = require("ip");
import { createConnection } from 'typeorm';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import AppRoutes from './routes';




createConnection()
  .then(async connection => {
    // create koa app
    const app = new Koa();

    const router = new Router();
    const port = process.env.PORT || 4000;
    const address = ip.address(); // 启动服务的IP地址
    // register all application routes
    AppRoutes.forEach(route => router[route.method](route.path, route.action));

    app.use(logger())
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(port);

    // logger
    app.use(async (ctx, next) => {
      const start: number = Number(new Date())
      await next()
      const ms: any = Number(new Date()) - Number(start)
      console.log(` ${ctx.method} ${ctx.url} - ${ms}ms`)
    })

    console.log(`应用启动成功 端口:${port}`);
    console.log("启动服务的IP地址", "http://" + address + ":" + port);
    console.log("启动服务的IP地址", "https://" + address + ":" + port);
  })
  .catch(error => console.log('TypeORM 链接失败: ', error));
