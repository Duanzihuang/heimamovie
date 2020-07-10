import request from '@/utils/request'

export const getInTheaters = ({ start = 0, count = 5 }) => {
    return request({
        url: `in_theaters?start=${start}&count=${count}`
    })
}
