class Api::Students::CheckinsController < ApplicationController
  before_action :set_student
  # before_action :set_comment, only: [:destroy]

  def index
    render json: @student.checkins
  end

  def create
    checkin = @student.checkins.new(checkin_params)
    if checkin.save
      render json: checkin
    else 
      render json: {message: "Unable to create checkin."}
    end
  end
  # def create
  #   comment = @student.comments.new(comment_params)
  #   if comment.save
  #     render json: comment
      
  #   else
  #     render json: {message: "Unable to create comment."}
  #   end
  # end

  # # def update
  
  # #   if @student.update(student_params)
  # #     render json: @student
  # #   else
  # #     render json: @student.errors, status: 422
  # #   end
  # # end

  # def destroy
  #   @comment.destroy
  #   if @comment.destroy
  #   render json: { message: "Comment Deleted"}
  #   else
  #     render json: {message: "Comment was not deleted"}
  #   end
  # end

    private

    def set_student
      @student = Student.find(params[:student_id])
    end

    def checkin_params
      params.require(:checkin).permit(:technical, :feeling, :groups, :qcs, :feedback, :time_spent, :status)
    end

    def set_checkin 
      @checkin = Checkin.find(params[:id])
    end

end
