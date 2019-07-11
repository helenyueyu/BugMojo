export const getAnswers = id => (
    $.ajax({
        method: 'GET', 
        url: `/api/questions/${id}/answers`
    })
)