json.key_format! camelize: :lower 

@answers.each do |answer|
    json.set! answer.id do 
        json.extract! answer, :id, :body, :author_id, :question_id, :created_at, :updated_at
    end 
end