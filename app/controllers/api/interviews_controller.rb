class Api::InterviewsController < ApplicationController

  before_action :set_interview, only: [:show, :update, :destroy]

  def index
    render json: Interview.all
  end

  def show
    render json: @interview
  end

  def create
    @interview = Interview.new(interview_params)
    if @interview.save
      render json: @interview
    else
      render error: {message: "Interview Unable to Be Created"}
    end
  end

  def update
    if @interview.update(interview_params)
      render json: @interview
    else
     render json: @interview.errors, status: 422
    end
  end
  
  def destroy
    @interview.destroy
    render json: { message: "Interview Deleted"}
  end

  private

  def interview_params
    params.require(:interview).permit(:name)
  end

  def set_interview
    @interview = Interview.find(params[:id])
  end

end
