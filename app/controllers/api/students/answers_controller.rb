class Api::Students::AnswersController < ApplicationController
  before_action :set_student, only: [:index]
  before_action :answer, only: [:update]

  def index
    render json: @student.answers
  end

  def create
    @add_answer = Answer.new(answer_params)
    if @add_answer.save
      render json: @add_answer
    else 
      render json: {message: "Cannot create Answer"}
    end
  end

   def update
    if @answer.update(answer_params)
      render json: @answer
    else
      render json: @answer.errors, status: 422
    end
  end


  private

  def answer_params
    params.require(:answer).permit(:student_answer, :correct, :question_id, :student_id)
  end

  def set_question
    @question = Question.find(params[:question_id])
  end

  def answer
    @answer = Answer.find(params[:id])
  end

  def set_student
    @student = Student.find(params[:student_id])
  end
end
