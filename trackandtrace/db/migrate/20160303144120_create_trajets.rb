class CreateTrajets < ActiveRecord::Migration
  def change
    create_table :trajets do |t|
      t.integer :free_space
      t.text :start_addr
      t.text :start_coord
      t.text :final_addr
      t.text :final_coord
      t.integer :max_offset

      t.timestamps null: false
    end
  end
end
