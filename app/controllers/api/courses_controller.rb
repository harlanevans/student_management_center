class Api::CoursesController < ApplicationController
  before_action :set_course, only: [:update, :destroy]

  def index
    render json: Course.all
  end

  def show
    render json: Course.find(params[:id])
  end

  def create
    course = Course.new(course_params)
    if course.save
      render json: course
    else
      render json: {}
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
    params.require(:course).permit(:title)
  end
end
