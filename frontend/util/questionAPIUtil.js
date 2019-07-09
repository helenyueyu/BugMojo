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

export const createQuestion = question => (
    $.ajax({
        method: 'POST', 
        url: '/api/questions', 
        data: { question }
    })
)

export const updateQuestion = question => (
    $.ajax({
        method: 'PATCH',
        url: `/api/questions/${question.id}`, 
        data: { question }
    })
)

