class Api::CoursesController < ApplicationController
    before_action :authenticate_user!


  def index
    render json: Course.all
  end

  def show
    render json: Course.find(params[:id])
  end
end
