class Course < ApplicationRecord
  belongs_to :school
  has_many :students, dependent: :destroy
end
