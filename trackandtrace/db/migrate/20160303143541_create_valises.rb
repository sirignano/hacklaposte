class CreateValises < ActiveRecord::Migration
  def change
    create_table :valises do |t|
      t.references :users_id
      t.references :trajet_id
      t.integer :mouvement
      t.integer :prix
      t.text :last_address
      t.text :final_address
      t.text :start_address
      t.text :final_address_coord
      t.text :start_address_coord
      t.text :start_relai_addr
      t.text :final_relai_addr
      t.text :start_relai_coord
      t.text :final_relai_coord
      t.datetime :last_ping
      t.datetime :depot_date
      t.datetime :retrait_date

      t.timestamps null: false
    end
  end
end
