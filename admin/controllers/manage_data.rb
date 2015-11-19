require 'fileutils'

Compass::Admin.controllers :manage_data do

  get "/dashboard", :map => '/manage_data/index' do
    render "manage_data/index"
  end



  get '/download/:filename', :map => '/download/:filename' do |filename|
    file_download(filename)
  end


  post "/upload", :map => '/upload' do

    if  params['file'].nil? || params['file'].empty?
      flash[:warning] = "Неудача! Файл - отсутствует"
      redirect '/admin/dashboard'

    elsif file_upload(params['file'][:filename])
      flash[:notice] = "Успех! Файл: #{params['file'][:filename]} добавлен."
      redirect '/admin/dashboard'
    else
      flash[:warning] = "Неудача! Файл: #{params['file'][:filename]} назван с ощибкой."
      redirect '/admin/dashboard'
    end



end


end
