'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
		enabled: { type: Boolean, default: true },
		name: { type: String },
		product: { type: global.database.mongodb.mongoose.Schema.Types.ObjectId, ref: 'products' },
	}, {
		timestamps: true
	});
}