class Question < ApplicationRecord
  belongs_to :interview
  has_many :answers
  has_many :answers, :through => :students
end