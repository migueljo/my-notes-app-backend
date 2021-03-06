const { DataTypes, Model } = require('sequelize')

const TAG_TABLE = 'tags'

const TagSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}

class Tag extends Model {
  static associate (models) {
    this.belongsToMany(models.Notes, { through: 'notes_tags', as: 'notes' })
  }
}

module.exports = { TAG_TABLE, Tag, TagSchema }
