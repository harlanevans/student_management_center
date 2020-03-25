class Api::Students::CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_student, except: [:get_users]
  before_action :set_comment, only: [:destroy]

  def index
    render json: @student.comments
  end

  def create
    comment = @student.comments.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: {message: "Unable to create comment."}
    end
  end

  # def update
  
  #   if @student.update(student_params)
  #     render json: @student
  #   else
  #     render json: @student.errors, status: 422
  #   end
  # end

  def destroy
    @comment.destroy
    if @comment.destroy
    render json: { message: "Comment Deleted"}
    else
      render json: {message: "Comment was not deleted"}
    end
  end

    private

    def set_student
      @student = Student.find(params[:student_id])
    end

    def comment_params
      params.require(:comment).permit(:body, :author, :tag, :student_id, :user_id)
    end

    def set_comment 
      @comment = Comment.find(params[:id])
    end

end
