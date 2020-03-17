class Api::Students::TasksController < ApplicationController
  before_action :set_student

  def index
    render json: @student.tasks
  end


  private

  def set_student
    @student = Student.find(params[:student_id])
  end
end
