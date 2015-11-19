class CreateItems < ActiveRecord::Migration
  def self.up
    create_table :items do |t|
      t.string :title
      t.string :price
      t.belongs_to :category, index: true
      t.timestamps
    end
  end

  def self.down
    drop_table :items
  end
end
