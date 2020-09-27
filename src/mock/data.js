import Mock from 'mockjs'

export default {
    getData: () => {
        return {
            code: 20000,
            data: {
                WebData: [{
                        name: 'Django',
                        value: Mock.Random.float(100, 1000, 0, 3)
                    },
                    {
                        name: 'Flask',
                        value: Mock.Random.float(100, 1000, 0, 3)
                    },
                    {
                        name: 'Tornado',
                        value: Mock.Random.float(100, 1000, 0, 3)
                    },
                    {
                        name: 'Sanic',
                        value: Mock.Random.float(100, 1000, 0, 3)
                    },
                    {
                        name: 'FastAPI',
                        value: Mock.Random.float(100, 1000, 0, 3)
                    },
                ]
            }
        }
    }
}