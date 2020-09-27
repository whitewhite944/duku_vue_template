import Mock from 'mockjs'
import dataAPI from './data'

Mock.setup({
    timeout: '200-600'
})

Mock.mock(/\/dataAPI\/getData/, 'get', dataAPI.getData)