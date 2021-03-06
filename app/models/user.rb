# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    attr_reader :password 

    validates :username, :email, :password_digest, :session_token, presence: true 
    validates :username, :email, :session_token, uniqueness: true 
    validates :password, length: { minimum: 8 }, format: {with: /\A(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)\z/, message: 'must have 1 letter and 1 number'}, allow_nil: true 

    after_initialize :ensure_session_token, :ensure_username  

    has_many :questions, 
        class_name: :Question, 
        primary_key: :id, 
        foreign_key: :author_id, 
        dependent: :destroy 

    has_many :answers, 
        class_name: :Answer, 
        primary_key: :id, 
        foreign_key: :author_id, 
        dependent: :destroy 

    has_many :upvoted_questions, 
        through: :questions, 
        source: :votes, 
        dependent: :destroy 

    has_many :upvoted_answers, 
        through: :answers, 
        source: :votes, 
        dependent: :destroy 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email) 
        user && user.is_password?(password) ? user : nil 
    end 

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save! 
        self.session_token 
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    # going to shorten this to 5 digits but it might be not unique for very large userbase
    def ensure_username
        if self.username != ""
            self.username 
        else
            self.username = "user#{((self.email).hash).to_s[0,6]}"
        end
    end
end
