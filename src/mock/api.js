import Mock from 'mockjs'
Mock.mock('/login', {
    "status": 0,
    "data": {
        "id": 12,
        "username": "@cname"
    }
})