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
	if params[:id].to_i.to_s == params[:id]
		a = Valise.where("numero_de_suivi == #{params[:id]}")
		if a.empty?
			render :text => "{err}"
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
			render :text => str
		end

	end
	render :text => "{err}"
  end
end
