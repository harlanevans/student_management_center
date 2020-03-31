class Api::Students::CheckinsController < ApplicationController
    before_action :authenticate_user!

  before_action :set_student
  before_action :set_checkin, only: [:destroy, :update]

  def index
    render json: @student.checkins.all.order('id ASC')
  end

  #  def student_asc
  #   render json: Student.all.order('last_name ASC')
  # end

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

  def update
  
    if @checkin.update(checkin_params)
      render json: @checkin
    else
      render json: @checkin.errors, status: 422
    end
  end

  def destroy
    @checkin.destroy
    if @checkin.destroy
      render json: {message: "Check In Deleted"}
    else
       render  json: {message: "Check In Not Deleted"}
    end
  end


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
