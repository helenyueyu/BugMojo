# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null


class Question < ApplicationRecord
    is_impressionable 

    def impressionist_count
        impressions.size
    end

    attr_accessor :vote_count 
    attr_accessor :view_count
    attr_accessor :answer_count 

    validates :title, presence: true 
    validates :body, presence: true 
    
    belongs_to :user, 
        class_name: :User, 
        primary_key: :id, 
        foreign_key: :author_id

    has_many :answers, 
        class_name: :Answer, 
        primary_key: :id, 
        foreign_key: :question_id, 
        dependent: :destroy 

    has_many :votes, 
        as: :voteable, 
        dependent: :destroy 

    def get_vote_count 
        votes.where(value: 1).count - votes.where(value: -1).count 
    end
end
