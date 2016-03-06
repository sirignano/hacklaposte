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
			a = Valise.where("numero_de_suivi = ?", params[:str])
			if a.empty?
				render :text => "{err1}" and return
			else
				str = "["
				b = a.first
				if b.state == 0
					str += '{"status": "true", "desc": "adresse_de_depart"},{"status": "false", "desc": "ville"},{"status": "false", "desc": ""},{"status": "false", "desc": "ville"},{"status": "false", "desc": "adresse_de_arrive"}]'
				elsif b.state == 1
					str += '{"status": "true", "desc": "adresse_de_depart"},{"status": "true", "desc": "ville"},{"status": "false", "desc": ""},{"status": "false", "desc": "ville"},{"status": "false", "desc": "adresse_de_arrive"}]'
				elsif b.state == 2
					str += '{"status": "true", "desc": "adresse_de_depart"},{"status": "true", "desc": "ville"},{"status": "true", "desc": ""},{"status": "false", "desc": "ville"},{"status": "false", "desc": "adresse_de_arrive"}]'
				elsif b.state == 3
					str += '{"status": "true", "desc": "adresse_de_depart"},{"status": "true", "desc": "ville"},{"status": "true", "desc": ""},{"status": "true", "desc": "ville"},{"status": "false", "desc": "adresse_de_arrive"}]'
				elsif b.state == 4
					str += '{"status": "true", "desc": "adresse_de_depart"},{"status": "true", "desc": "ville"},{"status": "true", "desc": ""},{"status": "true", "desc": "ville"},{"status": "true", "desc": "adresse_de_arrive"}]'
				end
				render :text => str and return
			end
			# 0
			# adresse_de_depart 
			# 1
			# ville only
			# 2
			# rien
			# 3
			# ville
			# 4
			# adresse d'arrivée

  end
end
