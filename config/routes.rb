Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do 
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
    end
    
  end
  get 'api/students/asc', to: 'students#student_asc', as: 'api_students_asc'
  get 'api/students/desc', to: 'students#student_desc', as: 'api_students_desc'

  get '*other', to: "static#index"
end
