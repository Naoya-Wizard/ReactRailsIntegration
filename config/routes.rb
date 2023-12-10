Rails.application.routes.draw do
  root 'home#index'
  get 'feedback', to: 'feedbacks#new'  # 新しいフィードバックフォームへのルート
end
