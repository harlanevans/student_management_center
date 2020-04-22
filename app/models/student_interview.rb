class StudentInterview < ApplicationRecord
  belongs_to :interview
  belongs_to :student
  
end
