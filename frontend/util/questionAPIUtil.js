export const getUsers = () => (
    $.ajax({
        method: 'GET', 
        url: '/api/users'
    })
)

export const getDefaultQuestions = () => (
    $.ajax({
        method: 'GET',
        url: '/api/questions'
    })
)

export const getQuestion = id => (
    $.ajax({
        method: 'GET', 
        url: `/api/questions/${id}`
    })
)

