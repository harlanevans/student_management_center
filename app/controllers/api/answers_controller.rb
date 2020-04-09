class Api::AnswersController < ApplicationController
  before_action :set_stu_int, only: [:index]
  before_action :set_question, only: [:question_answers]

  def index
    render json: @stu_int.answers
  end

  def question_answers
    binding.pry
    render json: @question.answers
  end

  def create
    @add_answer = Answer.new(answer_params)
    binding.pry
    if @add_answer.save
      render json: @add_answer
    else 
      render json: {message: "Cannot create Answer"}
    end
  end


  private

  def answer_params
    params.require(:answer).permit(:student_answer, :correct, :question_id, :student_interview_id)
  end

  def set_stu_int
    @stu_int = StudentInterview.find(params[:student_interview_id])
  end

  def set_question
    @question = Question.find(params[:question_id])
  end
end
