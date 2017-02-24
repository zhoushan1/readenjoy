/**
 * Created by zhoushan on 2017/2/22.
 */

const urlHost='http://172.16.11.14:18091/yuexiang/'; //测试地址

//图书相关接口
export const bookScan=urlHost+'book/scan';  //通过书码编号获取图书相关信息
export const bookShare=urlHost+'book/share';  //图书分享
export const bookBorrow=urlHost+'book/borrow'; //借阅图书
export const bookBack=urlHost+'book/back'; //归还图书接口
export const bookSearch=urlHost+'book/search'; //搜索获取图书列表



//用户相关接口

export const userAdd=urlHost+'user/add';  //用户注册
export const userLogin=urlHost+'access/login'; //用户登录
export const userMessage=urlHost+'user/get'; //根据用户昵称或者id获取用户信息
export const userUpdate=urlHost+'user/update'; //更新用户数据

//公司相关接口
export const companyAdd=urlHost+'organization/add';  //添加组织机构
export const companyList=urlHost+'organization/like';//获取组织结构列表



