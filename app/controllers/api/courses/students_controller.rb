class Api::Courses::StudentsController < ApplicationController
  before_action :authenticate_user!

  before_action :set_course
  before_action :set_student, only: [:update, :destroy]

  def index
    render json: @course.students
  end

  def create
    student = @course.students.new(student_params)
    if student.save
      render json: student
    else 
      render json: {message: "Did not work"}
    end
  end

  def update
  
    if @student.update(student_params)
      render json: @student
    else
      render json: @student.errors, status: 422
    end
  end


  def destroy    
    @student.destroy
    if @student.destroy
    render json: { message: "Student Deleted"}
    else
      render json: {message: "Student was not deleted"}
    end
  end

  #! Student ordering select 
   def student_asc
    render json: Student.all.order('last_name ASC')
  end

  def student_desc
    render json: Student.all.order('last_name DESC')
  end

  private

  def set_course
    @course = Course.find(params[:course_id])
  end

  def student_params
    params.require(:student).permit(:first_name, :last_name, :technical, :effort, :social, :course_id)
  end

  def set_student
    @student = Student.find(params[:id])
  end
end
