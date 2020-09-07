import Taro from '@tarojs/taro';

const util = {
  query: () => {
    let obj = {}
    let search = location.search
    if (search === '') return obj
    let arr = search.slice(1).split('&')
    arr.forEach(item => {
      let key = item.split('=')[0]
      let value = item.split('=')[1] || ''
      obj[key] = value
    })
    return obj
  },
  setTitle: title => document.title = title,
}

export default util
