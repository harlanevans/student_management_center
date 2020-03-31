Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do 
    resources :users
    resources :students
    resources :comments
    resources :courses
    
    resources :interviews do
      resources :questions, module: 'interviews'
    end

    resources :schools do
      resources :courses, module: "schools"
    end


    
    resources :courses do
      resources :students, module: "courses"
    end

    resources :students do
      resources :comments, module: 'students'
      resources :checkins, module: 'students'
      resources :tasks, module: 'students'
      resources :student_interviews
    end
    
    get '/students/asc', to: 'students#student_asc', as: 'students_asc'
    get '/students/desc', to: 'students#student_desc', as: 'students_desc'
    
    # Student_interviews Routes

    get '/get_interviews/', to: 'student_interviews#get_interviews', as: 'get_all_interviews'
    
  end

  get '*other', to: "static#index"
end
