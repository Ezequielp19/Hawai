'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
		emailAddress: { type: String, required: true, unique: true },
		enabled: { type: Boolean, default: true },
		firstName: { type: String },
		lastName: { type: String },
		password: { type: String, required: true },
		recoverPasswordID: { type: String },
		recoverPasswordDateTime: { type: String },
		refreshToken: { type: String },
		status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
		roles: [{ type: String, allowNull: false, enum: ['administrator', 'manager'] }],
		username: { type: String, required: true, unique: true },
		disabledAt: { type: Date, default: Date.now },
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
