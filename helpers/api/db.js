import getConfig from "next/config";
import mysql from "mysql2/promise";
import { Sequelize, Model, DataTypes } from "sequelize";

const { serverRuntimeConfig } = getConfig();

export const db = {
  initialized: false,
  initialize,
};

// initialize db and models, called on first api request from /helpers/api/api-handler.js
async function initialize() {
  // create db if it doesn't already exist
  const { host, port, user, password, database } = serverRuntimeConfig.dbConfig;
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
    //socketPath:'/var/run/mysqld/mysqld.sock',
    // pool: {
    //   max: 5,
    //   min: 0,
    //   idle: 10000,
    // },
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to db
  const sequelize = new Sequelize(database, user, password, {
    dialect: "mysql",
    logging: true,
    //ssl: true,
  });

  // init models and add them to the exported db object
  db.User = userModel(sequelize);
  db.Category = categoryModel(sequelize);
  db.SubCategory = subCategoryModel(sequelize);
  db.Attribute = attributesModel(sequelize);
  db.Product = productModel(sequelize);
  db.ProductAttribute = productAttributeModel(sequelize);
  db.ProductImage = imageModel(sequelize);
  db.Rating = ratingModel(sequelize);
  db.Brand = brandModel(sequelize);

  db.User.hasMany(db.Rating);
  db.Rating.belongsTo(db.User);

  db.Category.hasMany(db.Product);
  db.Product.belongsTo(db.Category);

  db.SubCategory.hasMany(db.Product);
  db.Product.belongsTo(db.SubCategory);

  db.Product.hasMany(db.ProductAttribute);
  db.ProductAttribute.belongsTo(db.Product);

  db.Attribute.hasMany(db.ProductAttribute);
  db.ProductAttribute.belongsTo(db.Attribute);

  db.Product.hasMany(db.ProductImage);
  db.ProductImage.belongsTo(db.Product);

  db.Attribute.hasMany(db.ProductImage);
  db.ProductImage.belongsTo(db.Attribute);

  db.Product.hasMany(db.Rating);
  db.Rating.belongsTo(db.Product);

  db.Brand.hasMany(db.Product);
  db.Product.belongsTo(db.Brand);

  // sync all models with database
  await sequelize.sync({ alter: false });

  db.initialized = true;
}

// sequelize models with schema definitions

function userModel(sequelize) {
  const attributes = {
    username: { type: DataTypes.STRING, allowNull: false },
    hash: { type: DataTypes.STRING, allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
  };

  const options = {
    defaultScope: {
      // exclude password hash by default
      attributes: { exclude: ["hash"] },
    },
    scopes: {
      // include hash with this scope
      withHash: { attributes: {} },
    },
  };

  return sequelize.define("User", attributes, options);
}

function categoryModel(sequelize) {
  const attributes = {
    category_name: { type: DataTypes.STRING, allowNull: true },
    parent_id: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    url: { type: DataTypes.STRING, allowNull: true },
  };

  return sequelize.define("Category", attributes, {
    timestamps: true,
    paranoid: true,
  });
}

function subCategoryModel(sequelize) {
  const attributes = {
    sub_category_name: { type: DataTypes.STRING, allowNull: true },
    sub_category_unit: { type: DataTypes.STRING, allowNull: true },
    sub_category_value_type: { type: DataTypes.STRING, allowNull: true },
  };

  return sequelize.define("SubCategory", attributes, {
    timestamps: true,
    paranoid: true,
  });
}

function productModel(sequelize) {
  const attributes = {
    brand: { type: DataTypes.STRING, allowNull: true },
    sku: { type: DataTypes.STRING, allowNull: true },
    title: { type: DataTypes.STRING, allowNull: true },
    short_description: { type: DataTypes.TEXT, allowNull: true },
    long_description: { type: DataTypes.TEXT, allowNull: true },
    unit_price: { type: DataTypes.DECIMAL, allowNull: true },
    discount_amount: { type: DataTypes.DECIMAL, allowNull: true },
    qty_in_stock: { type: DataTypes.INTEGER, allowNull: true },
    warranty: { type: DataTypes.TEXT, allowNull: true },
    packaging_delivery: { type: DataTypes.TEXT, allowNull: true },
    featured: { type: DataTypes.BOOLEAN, defaultValue: false },
    thumbnail: { type: DataTypes.STRING, allowNull: true },
    sub_category_value: { type: DataTypes.STRING, allowNull: true },
    sub_category_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  };

  return sequelize.define("Product", attributes, {
    timestamps: true,
    paranoid: true,
  });
}

function attributesModel(sequelize) {
  const attributes = {
    attribute_name: { type: DataTypes.STRING, allowNull: true },
  };

  return sequelize.define("Attribute", attributes, {
    timestamps: true,
    paranoid: true,
  });
}

function productAttributeModel(sequelize) {
  const attributes = {
    attribute_value: { type: DataTypes.STRING, allowNull: true },
    attribute_value_type: { type: DataTypes.STRING, allowNull: true },
    attribute_value_unit: { type: DataTypes.STRING, allowNull: true },
  };

  return sequelize.define("ProductAttribute", attributes, {
    timestamps: true,
    paranoid: true,
  });
}

function imageModel(sequelize) {
  const attributes = {
    image_path: { type: DataTypes.STRING, allowNull: true },
    image_type: {
      type: DataTypes.ENUM("Gallery", "Thumbnail", "Large"),
      allowNull: true,
    },
  };
  return sequelize.define("ProductImage", attributes, {
    timestamps: true,
    paranoid: true,
  });
}

function ratingModel(sequelize) {
  const attributes = {
    rating_value: { type: DataTypes.INTEGER, allowNull: true },
  };
  return sequelize.define("Rating", attributes, {
    timestamps: true,
    paranoid: true,
  });
}

function brandModel(sequelize) {
  const attributes = {
    brand_name: { type: DataTypes.STRING, allowNull: true },
    brand_code: { type: DataTypes.STRING, allowNull: true },
  };
  return sequelize.define("Rating", attributes, {
    timestamps: true,
    paranoid: true,
  });
}
