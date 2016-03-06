class HomeController < ApplicationController
  def acceuil
  end

  def nouveau_trajet
  end

  def mes_trajets
  end

  def get
  			a = Valise.where("numero_de_suivi = ?", params[:str])
			if a.empty?
				render :text => "{err not found}" and return
			else
				b = a.first
				render :text => "[{
				'start_addr': '"+b.start_addr+"',
				'final_addr': '"+b.final_addr+"',
				'prix': '"+b.prix+"',
				'nbr_petit': '"+b.nbr_petit+"',
				'nbr_moyen': '"+b.nbr_moyen+"',
				'nbr_gros': '"+b.nbr_gros+"',
				'state': '"+b.state+"',
				'numero_de_suivi': '"+b.numero_de_suivi+"',
				'last_ping': '"+b.last_ping+"',
				'depot_date': '"+b.depot_date+"',
				'retrait_date': '"+b.retrait_date+"',
				'final_address_coord': '"+b.final_address_coord+"',
				'start_address_coord': '"+b.start_address_coord+"',
				'first_relai_addr': '"+b.first_relai_addr+"',
				'final_relai_addr': '"+b.final_relai_addr+"',
				'first_relai_coord': '"+b.first_relai_coord+"',
				'final_relai_coord': '"+b.final_relai_coord+"',

				}]" and return
			end
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
				render :text => "{err not found}" and return
			else
				str = "["
				b = a.first
				if b.state == 0
					str += '{"status": "true", "desc": "Pris en charge depuis : '+b.start_addr+'", "step": "0"},{"status": "", "desc": "Arrivée au centre de distribution de : ville", "step": "1"},{"status": "", "desc": "En cours d\'acheminement", "step": "2"},{"status": "", "desc": "Arrivée au centre de distribution de : ville", "step": "3"},{"status": "", "desc": "On vous attend a : '+b.final_addr+' =)", "step": "4"}]'
				elsif b.state == 1
					str += '{"status": "true", "desc": "Pris en charge depuis : '+b.start_addr+'", "step": "0"},{"status": "true", "desc": "Arrivée au centre de distribution de : ville", "step": "1"},{"status": "", "desc": "En cours d\'acheminement", "step": "2"},{"status": "", "desc": "Arrivée au centre de distribution de : ville", "step": "3"},{"status": "", "desc": "On vous attend a : '+b.final_addr+' =)", "step": "4"}]'
				elsif b.state == 2
					str += '{"status": "true", "desc": "Pris en charge depuis : '+b.start_addr+'", "step": "0"},{"status": "true", "desc": "Arrivée au centre de distribution de : ville", "step": "1"},{"status": "true", "desc": "En cours d\'acheminement", "step": "2"},{"status": "", "desc": "Arrivée au centre de distribution de : ville", "step": "3"},{"status": "", "desc": "On vous attend a : '+b.final_addr+' =)", "step": "4"}]'
				elsif b.state == 3
					str += '{"status": "true", "desc": "Pris en charge depuis : '+b.start_addr+'", "step": "0"},{"status": "true", "desc": "Arrivée au centre de distribution de : ville", "step": "1"},{"status": "true", "desc": "En cours d\'acheminement", "step": "2"},{"status": "true", "desc": "Arrivée au centre de distribution de : ville", "step": "3"},{"status": "", "desc": "On vous attend a : '+b.final_addr+' =)", "step": "4"}]'
				elsif b.state == 4
					str += '{"status": "true", "desc": "Pris en charge depuis : '+b.start_addr+'", "step": "0"},{"status": "true", "desc": "Arrivée au centre de distribution de : ville", "step": "1"},{"status": "true", "desc": "En cours d\'acheminement", "step": "2"},{"status": "true", "desc": "Arrivée au centre de distribution de : ville", "step": "3"},{"status": "true", "desc": "On vous attend a : '+b.final_addr+' =)", "step": "4"}]'
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
