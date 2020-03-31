class Interview < ApplicationRecord
  has_many :questions
  has_many :student_interviews
  has_many :students, :through => :student_interviews

end
