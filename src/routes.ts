import HomeController from './controller/home-controller';
import PostQueryController from './controller/post-controller';
export default [
  {
    path: '/api/query',
    method: 'post',// 便与测试 实际为post
    action: PostQueryController.queryFolder,
    description:'查询用户权限列表信息'
  },
  {
    path: '/api/queryFolder',
    method: 'post',
    action: PostQueryController.queryFolder,
    description:'查询用户权限列表信息-分页信息'
  },

  
  // {
  //   path: '/',
  //   method: 'get',
  //   action: HomeController.hello,
  //   description:'首页功能demo查询'
  // },
  // {
  //   path: '/get/query2',
  //   method: 'get',
  //   action: PostQueryController.queryOneName2,
  //   description:'首页功能demo查询2'
  // },{
  //   path: '/get/query3',
  //   method: 'get',
  //   action: PostQueryController.queryOneName3,
  //   description:'首页功能demo查询3'
  // }
];
