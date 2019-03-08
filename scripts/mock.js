let mockData = require('../src/model/mockdata')
let MockJs = require('mockjs')
for (let key in mockData) {
  MockJs.mock(RegExp('.*?' + key + '.*?'), mockData[key].response)
}