'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
        picture: {type: },
		enabled: { type: Boolean, default: true },
		name: { type: String },
		price: {type : Number},
        categorie: { type: global.database.mongodb.mongoose.Schema.Types.ObjectId, ref: 'categories' },
        stock: {type: Number},
        description: {type: String}
	}, {
		timestamps: true
	});

	module.schema.post('validate', function (doc) {

		console.log(doc.roles);
		if (!doc.roles.length) doc.roles.push('administrator');
		console.log(doc.roles);

		const token = module.lib.jsonwebtoken.sign({ roles: doc.roles, id: doc._id }, module.settings.token.refresh);

		doc.refreshToken = global.helpers.security.encrypt(doc._id, 'refreshToken', token);
	});
};
