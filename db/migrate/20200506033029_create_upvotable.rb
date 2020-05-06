class CreateUpvotable < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :value
      t.integer :user_id, null: false 
      t.integer :voteable_id
      t.string :voteable_type
    end

    add_index :votes, [:voteable_id, :voteable_type, :user_id], unique: true 
  end
end
