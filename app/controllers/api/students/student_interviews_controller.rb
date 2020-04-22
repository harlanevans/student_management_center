class Api::Students::StudentInterviewsController < ApplicationController
  before_action :set_student, only: [:index]
  before_action :set_stu_int, only: [:show]


  def index
    render json: @student.student_interviews
  end

  def show
    render json: @stu_int
  end

  def get_interviews
    render json: Interview.all
  end

  
  def create
    @stu_int = StudentInterview.new(stu_int_params)
    if @stu_int.save
      render json: @stu_int
    else
      render json: {message: "Cannot create StudentInterview"}
    end
  end

  #  def create
  #   @interview = Interview.new(interview_params)
  #   if @interview.save
  #     render json: @interview
  #   else
  #     render error: {message: "Interview Unable to Be Created"}
  #   end
  # end

  private

  def set_student
    @student = Student.find(params[:student_id])
  end

  def set_interview
    @interview = Interview.find(params[:interview_id])
  end

  def set_stu_int
    @stu_int = StudentInterview.find(params[:id])
  end

  def stu_int_params
    params.require(:student_interview).permit(:student_id, :interview_id)
  end
end
