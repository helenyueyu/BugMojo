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
#

class Question < ApplicationRecord
    validates :title, presence: true 
    validates :body, presence: true 
    
    belongs_to :user, 
    class_name: :User, 
    primary_key: :id, 
    foreign_key: :author_id
end
