class Interview < ApplicationRecord
  has_many :questions
  has_many :students, through: :student_interviews

end
