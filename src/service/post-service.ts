import { Context } from 'koa';
import { getManager } from 'typeorm';
import Category from '../entity/category';
import user_source_info from '../entity/user_source_info';
import { rsponseSuccess, rsponseFail } from "../utils/tools";



export default class queryOneNameService {
 
  static async query(context?: Context) {
    const categoryRepository = getManager().getRepository(user_source_info);
    try {
      const createFolderParams =   await categoryRepository.find();
      return rsponseSuccess('查询成功',createFolderParams)
    } catch (error) {
      rsponseFail('查询异常'+error)
    }
  }
  static async queryFolder(context?: Context) {
    const categoryRepository = getManager().getRepository(user_source_info);
    try {
      const createFolderParams =   await categoryRepository.find({skip:2,take:3});
      return rsponseSuccess('查询成功',createFolderParams)
    } catch (error) {
      rsponseFail('查询异常'+error)
    }
  }

}

