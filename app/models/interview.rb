class Interview < ApplicationRecord
  has_many :questions, dependent: :destroy
  has_many :student_interviews, dependent: :destroy
  has_many :students, :through => :student_interviews

end
