class Api::SchoolsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: School.all
  end

  def show
    render json: School.find(params[:id])
  end
end
