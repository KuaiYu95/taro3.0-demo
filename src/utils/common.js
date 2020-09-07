import Taro from '@tarojs/taro';

const common = {
  isEnvH5: () => process.env.TARO_ENV === 'h5',
  isEnvWeapp: () => process.env.TARO_ENV === 'weapp',
}

export default common
