Rails.application.routes.draw do
  namespace :api do 
    resources :students
    resources :comments
    resources :courses
    resources :interviews

    resources :schools do
      resources :courses, module: "schools"
    end


    
    resources :courses do
      resources :students, module: "courses"
    end

    resources :students do
      resources :comments, module: 'students'
      resources :checkins, module: 'students'
    end
    
  end
  get 'api/students/asc', to: 'students#student_asc', as: 'api_students_asc'
  get 'api/students/desc', to: 'students#student_desc', as: 'api_students_desc'

  get '*other', to: "static#index"
end
