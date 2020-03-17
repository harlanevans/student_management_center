class Student < ApplicationRecord
  belongs_to :course
  has_many :comments, dependent: :destroy
  has_many :checkins, dependent: :destroy
  has_many :tasks, dependent: :destroy
end
