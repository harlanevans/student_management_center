class Api::Schools::CoursesController < ApplicationController
    before_action :authenticate_user!

  before_action :set_school, only: [:index, :create, :destroy]
  before_action :set_course, only: [:update, :destroy]

  def index
    render json: @school.courses.all
  end

  def show
    render json: Course.find(params[:id])
  end

  def create
    course = @school.courses.new(course_params)
    if course.save
      render json: course
    else
      render json: {message: "Course Created"}
    end
  end

  def update
    if @course.update(course_params)
      render json: @course
    else
      render json: @course.errors, status: 422
    end
  end

  def destroy
    @course.destroy
    render json: { message: "Course Deleted"}
  end

  private

  def set_course
    @course = Course.find(params[:id])
  end

  def course_params
    params.require(:course).permit(:title, :school_id)
  end

  def set_school
    @school = School.find(params[:school_id])
  end
end
