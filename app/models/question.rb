class Question < ApplicationRecord
  belongs_to :interview
  has_many :student_interviews
  has_many :answers, through: :student_interviews
end