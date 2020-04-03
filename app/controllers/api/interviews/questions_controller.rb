class Api::Interviews::QuestionsController < ApplicationController
before_action :authenticate_user!
  before_action :set_interview

  before_action :set_question, only: [:update, :destroy]

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

   def update
    if @question.update(question_params)
      render json: @question
    else
      render json: @question.errors, status: 422
    end
  end


  def destroy    
    @question.destroy
    if @question.destroy
    render json: { message: "Question Deleted"}
    else
      render json: {message: "Question was not deleted"}
    end
  end


  private

  def question_params
    params.require(:question).permit(:qtype, :correct_answer, :q, :interview_id)
  end

  def set_interview
    @interview = Interview.find(params[:interview_id])
  end

  def set_question
    @question = Question.find(params[:id])
  end
end
