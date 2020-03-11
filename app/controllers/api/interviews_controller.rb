class Api::InterviewsController < ApplicationController

  def index
    render json: Interview.all
  end

  def show
    render json: Interview.find(params[:id])
  end

  def create
    
    @interview = Interview.new(interview_params)
    if @interview.save
      render json: @interview
    else
      render error: {message: "Interview Unable to Be Created"}
    end
  end

  private

  def interview_params
    params.require(:interview).permit(:name)
  end

end
