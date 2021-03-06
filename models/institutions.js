
module.exports = (sequelize, DataTypes) => {
    const Institutions = sequelize.define("Institutions", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Institutions.associate = models => {
        Institutions.hasMany(models.Opportunities, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Institutions;
};