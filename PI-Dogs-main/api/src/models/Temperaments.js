const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define(
        'Temperament',
        {
            // Automaticamente se genera un ID unico
            // id: {                
            //     type: DataTypes.UUID,
            //     defaultValue: DataTypes.UUIDV4,
            //     allowNull: false,
            //     primaryKey: true,
            //   },

              nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {timestamps: false}
    );
}