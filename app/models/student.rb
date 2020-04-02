class Student < ApplicationRecord
  belongs_to :course
  has_many :comments, dependent: :destroy
  has_many :checkins, dependent: :destroy
  has_many :tasks, dependent: :destroy
  has_many :student_interviews, dependent: :destroy
  has_many :interviews, :through => :student_interviews
end
