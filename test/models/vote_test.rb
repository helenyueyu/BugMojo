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

require 'test_helper'

class VoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
