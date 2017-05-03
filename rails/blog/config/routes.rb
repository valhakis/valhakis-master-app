Rails.application.routes.draw do
   get 'welcome/index'

   resources :articles do
      resources :comments
   end

   root 'welcome#index'

   get 'book/list'
   get 'book/new'
   post 'book/create'
   patch 'book/update'
   get 'book/edit'
   get 'book/delete'
   get 'book/update'

   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
