class Api::Students::TasksController < ApplicationController
    

  before_action :set_student

  def index
    render json: @student.tasks
  end

  def create
    task = @student.tasks.new(task_params)
    if task.save
      render json: task
    else
      render json: {message: "Unable to create Tasks"}
    end
  end


  private

  def set_student
    @student = Student.find(params[:student_id])
  end

  def task_params
    params.require(:task).permit(:name, :staff, :complete, :student_id, :user_id)
  end
end
