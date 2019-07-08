export const getDefaultQuestions = () => (
    $.ajax({
        method: 'GET',
        url: '/api/questions'
    })
)