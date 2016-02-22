##
# You can use other adapters like:

ActiveRecord::Base.configurations[:test] = {
    :adapter  => 'postgresql',
    :encoding => 'utf8',
    :database => 'test_maslov-service',
    :username => 'postgres',
    :password => '',
    :host     => 'localhost'
}

ActiveRecord::Base.configurations[:development] = {
    :adapter  => 'postgresql',
    :encoding => 'utf8',
    :database => 'maslov-service',
    :username => 'postgres',
    :password => '',
    :host     => 'localhost'
}



ActiveRecord::Base.configurations[:production] = {
    url: ENV['DATABASE_URL']
}