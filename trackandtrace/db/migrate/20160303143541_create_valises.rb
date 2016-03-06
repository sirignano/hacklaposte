class CreateValises < ActiveRecord::Migration
  def change
    create_table :valises do |t|
      t.references :users_id
      t.references :trajet_id
      t.integer :mouvement
      t.integer :prix
      t.integer :nbr_petit
      t.integer :nbr_moyen
      t.integer :nbr_gros
      t.integer :state
      t.text :final_address_coord
      t.text :start_address_coord
      t.text :start_addr
      t.text :final_addr
      t.text :first_relai_addr
      t.text :final_relai_addr
      t.text :first_relai_coord
      t.text :final_relai_coord
      t.text :numero_de_suivi
      t.datetime :last_ping
      t.datetime :depot_date
      t.datetime :retrait_date

      t.timestamps null: false
    end
  end
end
