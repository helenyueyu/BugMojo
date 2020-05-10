json.key_format! camelize: :lower 

@questions.each do |question|
    json.set! question.id do 
        json.extract! question, :id, :title, :body, :author_id, :vote_count, :created_at, :updated_at
    end 
end