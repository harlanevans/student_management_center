class Api::StudentsController < ApplicationController

  before_action :set_student, only: [:show]

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

  private

  def set_student
    @student = Student.find(params[:id])
  end
end
