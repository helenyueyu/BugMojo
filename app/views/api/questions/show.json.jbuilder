json.key_format! camelize: :lower 

json.extract! @question, :id, :title, :body, :author_id, :vote_count, :created_at, :updated_at
