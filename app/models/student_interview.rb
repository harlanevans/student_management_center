class StudentInterview < ApplicationRecord
  belongs_to :interview
  belongs_to :student
  has_many :answers, dependent: :destroy
  has_many :questions, :through => :answers
end
