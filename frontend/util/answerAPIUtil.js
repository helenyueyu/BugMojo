export const getAnswers = id => (
    $.ajax({
        method: 'GET', 
        url: `/api/questions/${id}/answers`
    })
)

export const createAnswer = answer => (
    $.ajax({
        method: 'POST', 
        url: '/api/answers', 
        data: { answer }
    })
)