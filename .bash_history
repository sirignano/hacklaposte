clear
apt-get update
curl -L https://get.rvm.io | bash -s stable --rails
apt-get install -y curl
curl -L https://get.rvm.io | bash -s stable --rails
 gpg2 --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
curl -L https://get.rvm.io | bash -s stable --rails
source ~/.rvm/scripts/rvm
find / -name "rvm"
source /usr/local/rvm/scripts/rvm
rvm info
ls
rails new trackandtrace
nano Gemfile
cd trackandtrace/
nano Gemfile
nano Gemfile
rm Gemfile.lock 
gem install
bundle install
nano Gemfile
bundle install
man ascii
bundle install --without production
ls
nano app/assets/stylesheets/
nano app/assets/stylesheets/application.css 
mv  app/assets/stylesheets/application.css app/assets/stylesheets/application.css.scss
nano app/assets/javascripts/application.js 
nano Gemfile
bundle install --without production
nano app/assets/javascripts/application.js 
ls
cd ..
ls
cp -r trackandtrace/ trackandtrace_serv
cd trackandtrace_serv/
ls
nano config/application.rb 
nano config/boot.rb 
nano config/application.rb 
nano config/initializers/session_store.rb
config/environment.rb
nano config/environment.rb
grep -rin "trackandtrace" .
cd ..
git init
apt-get install git
git init
git add -A
git commit -m "first commit"
git remote add origin https://github.com/sirignano/hacklaposte.git
git push origin master
git config --global user.email "lsirigna@student.42.fr"
git config --global user.name "Your Name"
git commit -m "first commit"
git push origin master
cd trackandtrace
rails g devise:install
rails g devise:views
nano config/environments/development.rb 
nano app/views/layouts/application.html.erb
rails g devise user
nano app/controllers/application_controller.rb 
nano db/migrate/20160303131525_devise_create_users.rb 
rake db:migrate
rm db/development.sqlite3 
rake db:migrate
nano db/migrate/20160303131525_devise_create_users.rb 
nano db/migrate/20160303131525_devise_create_users.rb 
rake db:migrate
rails s
rails s -p 80
rails s -p 80 -h http://198.211.105.132/
rails s -p 80 -b 198.211.105.132
nano config/routes.rb 
rails s -p 80 -b 198.211.105.132
rails g controller home acceuil nouveau_trajet mes_trajets
rails s -p 80 -b 198.211.105.132 -d
nano Gemfile
nano ../trackandtrace_serv/Gemfile
bundle install
fg
ls
ps ax
kill -9 5091
rails s -p 80 -b 198.211.105.132 -d
cd ../trackandtrace_serv/
bundle install
cd ../trackandtrace
nano app/views/devise/confirmations/new.html.erb 
nano app/views/devise/registrations/edit.html.erb 
nano app/views/devise/registrations/edit.html.erb 
nano app/views/devise/registrations/new.html.erb 
nano app/views/devise/sessions/new.html.erb 
nano app/views/devise/sessions/new.html.erb 
nano app/views/devise/registrations/new.html.erb 
nano app/views/devise/registrations/edit.html.erb 
nano app/views/layouts/application.html.erb 
nano app/views/layouts/application.html.erb 
nano app/controllers/home_controller.rb 
cd ..
ls
git add -A
git commit -m "devise"
git push origin master
rails g model  ressources:client_id integer:mouvement ressource:trajet_id datetime:last_ping integer:prix text:last_address  text:final_address  text:start_address  text:final_address_coord  text:start_address_coord   text:start_relai_addr  text:final_relai_addr text:start_relai_coord  text:final_relai_coord datetime:depot_date datetime:retrait_date 
ls
cd trackandtrace
rails g model  ressources:client_id integer:mouvement ressource:trajet_id datetime:last_ping integer:prix text:last_address  text:final_address  text:start_address  text:final_address_coord  text:start_address_coord   text:start_relai_addr  text:final_relai_addr text:start_relai_coord  text:final_relai_coord datetime:depot_date datetime:retrait_date 
rails g model  ressources:users_id integer:mouvement ressource:trajet_id datetime:last_ping integer:prix text:last_address  text:final_address  text:start_address  text:final_address_coord  text:start_address_coord   text:start_relai_addr  text:final_relai_addr text:start_relai_coord  text:final_relai_coord datetime:depot_date datetime:retrait_date 
rails g model  ressources:user_id integer:mouvement ressource:trajet_id datetime:last_ping integer:prix text:last_address  text:final_address  text:start_address  text:final_address_coord  text:start_address_coord   text:start_relai_addr  text:final_relai_addr text:start_relai_coord  text:final_relai_coord datetime:depot_date datetime:retrait_date 
rails g model  ressources:User_id integer:mouvement ressource:trajet_id datetime:last_ping integer:prix text:last_address  text:final_address  text:start_address  text:final_address_coord  text:start_address_coord   text:start_relai_addr  text:final_relai_addr text:start_relai_coord  text:final_relai_coord datetime:depot_date datetime:retrait_date 
rails g model  ressources:users_id integer:mouvement ressource:trajet_id datetime:last_ping integer:prix text:last_address  text:final_address  text:start_address  text:final_address_coord  text:start_address_coord   text:start_relai_addr  text:final_relai_addr text:start_relai_coord  text:final_relai_coord datetime:depot_date datetime:retrait_date 
rails g model  integer:users_id integer:mouvement integer:trajet_id datetime:last_ping integer:prix text:last_address  text:final_address  text:start_address  text:final_address_coord  text:start_address_coord   text:start_relai_addr  text:final_relai_addr text:start_relai_coord  text:final_relai_coord datetime:depot_date datetime:retrait_date 
rails g model  users_id:integer integer:mouvement integer:trajet_id datetime:last_ping integer:prix text:last_address  text:final_address  text:start_address  text:final_address_coord  text:start_address_coord   text:start_relai_addr  text:final_relai_addr text:start_relai_coord  text:final_relai_coord datetime:depot_date datetime:retrait_date 
rails g model  int:users_id integer:mouvement integer:trajet_id datetime:last_ping integer:prix text:last_address  text:final_address  text:start_address  text:final_address_coord  text:start_address_coord   text:start_relai_addr  text:final_relai_addr text:start_relai_coord  text:final_relai_coord datetime:depot_date datetime:retrait_date 
rails g model  valise users_id:resources mouvement:integer trajet_id:resources last_ping:datetime prix:integer  last_address:text   final_address:text   start_address:text   final_address_coord:text   start_address_coord:text    start_relai_addr:text   final_relai_addr:text  start_relai_coord:text   final_relai_coord:text depot_date:datetime retrait_date:datetime
nano db/migrate/20160303143541_create_valises.rb 
rake db:migrate
nano db/migrate/20160303143541_create_valises.rb 
rails g model  trajet free_space:integer start_addr:text start_coord:text final_addr:text final_coord:text max_offset:integer
rake db:migrate
cat db/migrate/20160303131525_devise_create_users.rb 
nano app/views/devise/registrations/edit.html.erb 
rails g controller registration
nano app/controllers/registration_controller.rb 
ps ax
ps ax | grep rails
kill -9 5290
rails s -p 80 -b 198.211.105.132 -d
nano config/routes.rb 
ps ax | grep rails
kill -9 5689
rails s -p 80 -b 198.211.105.132 -d
nano app/controllers/registration_controller.rb 
mv app/controllers/registration_controller.rb app/controllers/registrations_controller.rb
nano app/views/devise/registrations/edit.html.erb 
nano app/views/devise/registrations/new.html.erb 
cd ..
git add -A
git commit -m "sanitize + dbupdate"
git push origin master
nano app/views/devise/registrations/edit.html.erb 
cd trackandtrace
nano app/views/devise/registrations/edit.html.erb 
nano app/views/home/acceuil.html.erb 
nano app/assets/javascripts/home.js 
nano app/views/layouts/application.html.erb 
nano app/assets/javascripts/home.js 
nano app/assets/stylesheets/home.scss 
nano app/assets/javascripts/home.js 
cat app/assets/javascripts/home.js 
nano app/assets/javascripts/home.js 
nano app/assets/javascripts/home.js 
nano app/assets/javascripts/home.js 
nano app/views/home/acceuil.html.erb 
nano app/assets/javascripts/application.js 
nano app/assets/javascripts/home.js 
nano app/assets/javascripts/application.js 
nano app/views/home/acceuil.html.erb 
nano app/views/home/acceuil.html.erb 
nano app/views/layouts/application.html.erb 
ps ax | grep rails
kill -9 5708
rails s -p 80 -b 198.211.105.132 -d
nano app/assets/stylesheets/home.scss 
nano app/assets/stylesheets/application.css.scss 
nano app/views/home/acceuil.html.erb 
nano app/views/home/acceuil.html.erb 
nano app/assets/javascripts/home.js 
nano app/assets/javascripts/home.js 
nano app/views/home/acceuil.html.erb 
nano app/views/home/acceuil.html.erb 
nano app/views/home/acceuil.html.erb 
nano app/views/home/acceuil.html.erb 
nano app/views/home/acceuil.html.erb 
cat app/views/home/acceuil.html.erb 
nano app/assets/javascripts/home.js 
nano app/views/home/acceuil.html.erb 
nano app/assets/javascripts/home.js 
nano app/views/home/acceuil.html.erb 
nano app/assets/javascripts/home.js 
nano app/assets/javascripts/home.js 
nano app/views/home/acceuil.html.erb 
nano app/assets/javascripts/home.js 
nano app/views/home/acceuil.html.erb 
nano app/assets/stylesheets/application.css.scss 
nano app/views/home/acceuil.html.erb 
nano app/views/home/acceuil.html.erb 
nano app/assets/javascripts/home.js 
nano app/assets/javascripts/home.js 
nano app/views/home/acceuil.html.erb 
nano app/assets/javascripts/home.js 
nano app/views/home/acceuil.html.erb 
nano app/assets/javascripts/home.js 
nano app/views/home/acceuil.html.erb 
nano app/assets/javascripts/home.js 
nano app/views/home/acceuil.html.erb 
nano app/views/home/acceuil.html.erb 
nano app/assets/javascripts/home.js 
nano app/views/home/acceuil.html.erb 
nano app/assets/javascripts/home.js 
nano app/assets/javascripts/home.js 
nano app/assets/javascripts/home.js 
cd ..
git add -A
git commit -m "lol"
git push origin master
man cut
cut -d /etc/passwd -k7 -k1 
cut -d /etc/passwd -k7 -k1 
cut /etc/passwd -k7 -k1 
cut /etc/passwd 
cut -f 1,7 -d: /etc/passwd
cut -f 1,5 -d: /etc/passwd
cut -f 1,6 -d: /etc/passwd
cut -f 1,2,6 -d: /etc/passwd
cut -f 1,3,6 -d: /etc/passwd
ls
cd app/
vim server.js 
mkdir app
cd app/
ls
vim ../server.js 
cd ..
ls
cd app
cd ..
ls
cd ..
ls
cd trackandtrace
ls
vim Gemfile/
vim Gemfile
ls
cd ../app/
ls
git clone https://github.com/nsavry/portailBeagop.git
mv portailBeagop/app/lib app/
ls
cd app/
ls
cd ..
ls
ls
mv portailBeagop/app/index.html app/
ls
rm -rf portailBeagop/
cd app/
vim index.html 
cd ..
ls
mv portailBeagop/app/index.html app/
git clone https://github.com/nsavry/portailBeagop.git
mv portailBeagop/app/js app/
rm -rf portailBeagop/
ls
cd app/
ls
cd js
ls
rm admin.js 
cd ..
ls
vim index.html 
cd ..
ls
cd app/
git clone https://github.com/nsavry/portailBeagop.git
mv portailBeagop/app/css ./
rm -rf portailBeagop/
vim index.html 
vim js/app.js 
vim ../server.js 
ls
curl -sL https://deb.nodesource.com/setup_5.x | bash -
apt-get install --yes nodejs
apt-get install --yes build-essential
ls
cd trackandtrace
ls
cd ..
ls
cd trackandtrace_serv/
ls
cd ..
ls
cd ..
ls
cd -
mkdir app
cd app/
ls
vim 
apt-get install vim
ls
vim server.js
vim ~/.vimrc
vim ~/.vimrc
vim server.js
node server.js 
npm install mime
node server.js 
npm install express
node server.js 
npm install randomstring
node server.js 
npm install mongodb
node server.js ;
npm install morgan ; node server.js 
npm install serve-favicon ; node server.js 
npm install body-parser ; node server.js 
ls
npm install supervisor
supervisor server.js 
ls
supervisor
node
supervisor
./node_modules/supervisor/test/sampleApp/server.js 
./node_modules/supervisor/lib/cli-wrapper.js 
./node_modules/supervisor/lib/cli-wrapper.js server.js 
clear
l
git pull
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
bundle install --without-production
bundle install
ls
cd trackandtrace
ls
bundle install --without=production
cd ..
ps ax
kill -9  6111
rails s -p 80 -b 198.211.105.132 -d
cd trackandtrace
rails s -p 80 -b 198.211.105.132 -d
cd ..
./pull.sh 
./pull.sh 
./pull.sh 
./pull.sh 
./pull.sh 
ls
ls app/
ls
ls
cd trackandtrace
nano Gemfile
bundle install --without=production
rails generate backbone:install
ps ax
kill -9 13400
rails s -p 80 -b 198.211.105.132 -d
git add -A
git commit -m "o"
git push origin master
grep -rin "hello from backbone"
grep -rin "hello from backbone" .
git add -A 
git commit -m "backbone test"
cd ..
./pull.sh 
cd trackandtrace
nano Gemfile
bundle install --without=production
nano app/assets/javascripts/application.js 
ps ax
kill -9 15451
rails s -p 80 -b 198.211.105.132 -d
cd trackandtrace
ls
git pull
git pull origin master
nano ./app/assets/javascripts/home.js 
git pull
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
git pull origin master
ls
mysql
mkdir database
cd database/
apt-get install mysql-server mysql-client libmysqlclient15-dev mysql-common
vi /etc/mysql/my.cnf
mysql GroomAddict
mysql root
$ mysqld --skip-grant-tables
mysql -u root mysql
mysql -skip-grant-tables
mysql
apt-get install mysql-server
mysql -u root -p
mysql -u root -p
mysql -u root -p
ifconfig
mysql -u root -p
ifconfig
ls
ls
ls && ls
cd app/
ls
ps ax
kill -9 15807
node server.js 
ls
ls
cd ..
mkdir old
mv trackandtrace* old/
ls
./push.sh 
ls
cd aa
cd app/
ls
ls
ls
pwd
ls
find .
ls
ls
cd ..
ls
cd app/
node server.js 
npm install passport
