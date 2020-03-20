class Course < ApplicationRecord
  belongs_to :school
  has_many :students, dependent: :destroy
  has_many :tasks, dependent: :destroy
end
