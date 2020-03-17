class Api::Interviews::QuestionsController < ApplicationController

  before_action :set_interview

  def index
    render json: @interview.questions
  end

  def create
    @question = @interview.questions.new(question_params)
    if @question.save
      render json: @question
    else
      render json: {message: "Unable to create Question"}
    end
  end

  private

  def question_params
    params.require(:question).permit(:qtype, :answer, :q, :interview_id)
  end

  def set_interview
    @interview = Interview.find(params[:interview_id])
  end
end
