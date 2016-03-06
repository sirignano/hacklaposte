class HomeController < ApplicationController
  def acceuil
  end

  def nouveau_trajet
  end

  def mes_trajets
  end


  def new
  	a = Valise.new
	a.mouvement = 0
	a.start_addr = params[:startPlace]
	a.final_addr = params[:endPlace]
	a.prix = params[:prix]#prix a calculé
	a.nbr_petit = params[:sSize].to_i
	a.nbr_moyen = params[:lSize].to_i
	a.nbr_gros = params[:xlSize].to_i
	a.state = 0
	# a.final_address_coord = params[:final_address_coord]
	# a.start_address_coord = params[:start_address_coord]
	# a.first_relai_addr = params[:first_relai_addr]
	# a.final_relai_addr = params[:first_relai_addr]
	# a.first_relai_coord = params[:first_relai_coord]
	# a.final_relai_coord = params[:final_relai_coord]
	a.numero_de_suivi = "6A08223127191"# a determiner et a renvoyer
	a.last_ping = DateTime.current
	a.depot_date = DateTime.current
	a.retrait_date = DateTime.parse("#{params[:endDate]} #{params[:endTime]}:00.000000").to_i
	a.save
	redirect_to :back and return
	#endDate endTime
  end

  def suivi
			a = Valise.where("numero_de_suivi = ?", params[:str])
			if a.empty?
				render :text => "{err1}" and return
			else
				str = "["
				b = a.first
				if b.state == 0
					str += '{"status": "true", "desc": "Pris en charge depuis : "'+b.start_addr+'", "step": "0"},{"status": "false", "desc": "Arrivée au centre de distribution de : ville", "step": "1"},{"status": "false", "desc": "En cours d\'acheminement", "step": "2"},{"status": "false", "desc": "Arrivée au centre de distribution de : ville", "step": "3"},{"status": "false", "desc": "On vous attend a : "'+b.final_addr+'" =)", "step": "4"}]'
				elsif b.state == 1
					str += '{"status": "true", "desc": "Pris en charge depuis : "'+b.start_addr+'", "step": "0"},{"status": "true", "desc": "Arrivée au centre de distribution de : ville", "step": "1"},{"status": "false", "desc": "En cours d\'acheminement", "step": "2"},{"status": "false", "desc": "Arrivée au centre de distribution de : ville", "step": "3"},{"status": "false", "desc": "On vous attend a : "'+b.final_addr+'" =)", "step": "4"}]'
				elsif b.state == 2
					str += '{"status": "true", "desc": "Pris en charge depuis : "'+b.start_addr+'", "step": "0"},{"status": "true", "desc": "Arrivée au centre de distribution de : ville", "step": "1"},{"status": "true", "desc": "En cours d\'acheminement", "step": "2"},{"status": "false", "desc": "Arrivée au centre de distribution de : ville", "step": "3"},{"status": "false", "desc": "On vous attend a : "'+b.final_addr+'" =)", "step": "4"}]'
				elsif b.state == 3
					str += '{"status": "true", "desc": "Pris en charge depuis : "'+b.start_addr+'", "step": "0"},{"status": "true", "desc": "Arrivée au centre de distribution de : ville", "step": "1"},{"status": "true", "desc": "En cours d\'acheminement", "step": "2"},{"status": "true", "desc": "Arrivée au centre de distribution de : ville", "step": "3"},{"status": "false", "desc": "On vous attend a : "'+b.final_addr+'" =)", "step": "4"}]'
				elsif b.state == 4
					str += '{"status": "true", "desc": "Pris en charge depuis : "'+b.start_addr+'", "step": "0"},{"status": "true", "desc": "Arrivée au centre de distribution de : ville", "step": "1"},{"status": "true", "desc": "En cours d\'acheminement", "step": "2"},{"status": "true", "desc": "Arrivée au centre de distribution de : ville", "step": "3"},{"status": "true", "desc": "On vous attend a : "'+b.final_addr+'" =)", "step": "4"}]'
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
