class Question < ApplicationRecord
  belongs_to :interview
  has_many :answers
  has_many :students, through: :answers
end