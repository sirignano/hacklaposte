class HomeController < ApplicationController
  def acceuil
  end

  def nouveau_trajet
  end

  def mes_trajets
  end


  def new
  	
  end

  def suivi
		a = Valise.where("numero_de_suivi == #{params[:id]}")
		if a.empty?
			render :text => "{err}" and return
		else
			str = "{"
			b = a.first
			if b.state == 0
				str += '{"status": "true", "desc": "none"},{"status": "false", "desc": "none"},{"status": "false", "desc": "none"},{"status": "false", "desc": "none"},{"status": "false", "desc": "none"}}'
			elsif b.state == 1
				str += '{"status": "true", "desc": "none"},{"status": "true", "desc": "none"},{"status": "false", "desc": "none"},{"status": "false", "desc": "none"},{"status": "false", "desc": "none"}}'
			elsif b.state == 2
				str += '{"status": "true", "desc": "none"},{"status": "true", "desc": "none"},{"status": "true", "desc": "none"},{"status": "false", "desc": "none"},{"status": "false", "desc": "none"}}'
			elsif b.state == 3
				str += '{"status": "true", "desc": "none"},{"status": "true", "desc": "none"},{"status": "true", "desc": "none"},{"status": "true", "desc": "none"},{"status": "false", "desc": "none"}}'
			elsif b.state == 4
				str += '{"status": "true", "desc": "none"},{"status": "true", "desc": "none"},{"status": "true", "desc": "none"},{"status": "true", "desc": "none"},{"status": "true", "desc": "none"}}'
			end
			render :text => str and return
		end

	render :text => "{err}" and return
  end
end
