class Comment < ApplicationRecord
  belongs_to :student, dependent: :destroy

  # def as_json
    
  # end
end
