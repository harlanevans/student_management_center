class Task < ApplicationRecord
  belongs_to :student, optional: true
  belongs_to :course, optional: true
end
