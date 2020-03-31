class Api::UsersController < ApplicationController
    before_action :authenticate_user!

  def index
    render json: User.all
  end

  def update
    @user = User.find(params[:id])
    @user.name = params[:name] ? params[:name] : @user.name
    @user.email = params[:email] ? params[:email] : @user.email
    
    @file = params[:file]
    
    if @file
      cloudinary
    end
      
    if @user.save
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end 
  end

  def cloudinary
    if @file === ''
      puts "File too large"
    else 
    ext = File.extname(@file.tempfile)
    cloud_image = Cloudinary::Uploader.upload(@file, public_id: @file.original_filename, secure: true)
    @user.image = cloud_image['secure_url']
    end
  end

end
