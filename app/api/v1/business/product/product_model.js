const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../../../config/database');

const Product = sequelize.define(
    'Product',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.TEXT,
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stock: DataTypes.INTEGER,
        sku: {
            type: DataTypes.STRING,
            unique: true
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        origin: {
            type: DataTypes.ENUM('MANUAL', 'DROPSHIPPING'),
            allowNull: false
        },
        integration_source: {
            type: DataTypes.STRING,
            allowNull: true
        },
        external_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        metadata: {
            type: DataTypes.JSONB,
            allowNull: true,
            comment: 'Custom integration data (size, color, supplier_price, shipping days, etc.)'
        }
    },
    {
        tableName: 'Products',
        underscored: true,
        timestamps: true
    }
);

module.exports = Product;
