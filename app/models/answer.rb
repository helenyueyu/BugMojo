# == Schema Information
#
# Table name: answers
#
#  id          :bigint           not null, primary key
#  body        :text             not null
#  author_id   :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord
    validates :body, presence: true 

    belongs_to :question, 
        class_name: :Question, 
        primary_key: :id, 
        foreign_key: :question_id 

    belongs_to :user, 
        class_name: :User, 
        primary_key: :id, 
        foreign_key: :author_id 

    has_many :votes, 
        as: :voteable, 
        dependent: :destroy,  
end
