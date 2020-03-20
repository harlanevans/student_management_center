class Comment < ApplicationRecord
  belongs_to :student, dependent: :destroy
  belongs_to :user
  # def as_json
    
  # end
end
