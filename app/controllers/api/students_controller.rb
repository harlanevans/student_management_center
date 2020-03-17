class Api::StudentsController < ApplicationController

  before_action :set_student, only: [:show, :update]

  def index
    render json: Student.all
  end
  
  def student_asc
    render json: Student.all.order('last_name ASC')
  end

  def student_desc
    render json: Student.all.order('last_name DESC')
  end

  def show
    render json: @student
  end

  def update
    if @student.update(student_params)
      render json: @student
    else
      render json: @student.errors, status: 422
    end
  end

  private

  def set_student
    @student = Student.find(params[:id])
  end

  def student_params
    params.require(:student).permit(:first_name, :last_name, :technical, :effort, :social, :times_helped, :course_id)
  end
end
