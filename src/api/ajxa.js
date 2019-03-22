/*
  ajxa请求默认函数
 */
import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
  return new promise(function (resolve, reject) {
    //执行异步ajax请求
    let promise
    if (type === "GET") {
      let dataStr = "";//拼接data字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
      }
      //发送get请求
      promise = axios.get(url);
    } else {
      promise = axios.post(url, data);
    }
    promise.then(function (response) {
      //成功调用resolve
      resolve(response.data)
    }).catch(function (error) {
      //失败reject
      reject(error)
    })

  })

}

/*const response=await ajax()
const  result=response.data

const  resule=await ajax()*/

