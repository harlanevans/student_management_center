class Api::AnswersController < ApplicationController

  
  def create
    @add_answer = Answer.new(answer_params)
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

  def set_question
    @question = Question.find(params[:question_id])
  end
end
