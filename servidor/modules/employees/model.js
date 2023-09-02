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
		name: { type: String },
		lastName: { type: String },
		refreshToken: { type: String },
        salary: { type: Number },
        period_work: {type: String},
        phoneNumber: { type: String },
        address: { type: String } 
	}, {
		timestamps: true
	});
}