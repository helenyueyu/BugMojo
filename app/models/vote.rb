# == Schema Information
#
# Table name: votes
#
#  id            :bigint           not null, primary key
#  value         :integer
#  user_id       :integer          not null
#  voteable_id   :integer
#  voteable_type :string
#

class Vote < ApplicationRecord
    validates :value, inclusion: {in: [1, -1]}
    validates :user_id, presence: true 
    
    belongs_to :voteable, polymorphic: true 

    belongs_to :user 
end
