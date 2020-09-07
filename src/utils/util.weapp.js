import Taro from '@tarojs/taro';

const util = {
  query: () => Taro.getCurrentInstance().router.params,
  setTitle: title => Taro.setNavigationBarTitle({ title }),
}

export default util
