import queryOneNameService from '../service/post-service';

export default class PostQueryController {

  static async queryFolder(ctx) {
    ctx.body = await queryOneNameService.queryFolder(ctx);
  }
  static async query(ctx) {
    ctx.body = await queryOneNameService.query(ctx);
  }
  
}


