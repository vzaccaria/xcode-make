


_module = () => {
	
	var Liquid = require("liquid-node")
	var engine = new Liquid.Engine

	fillWithData = (template, data) => {
		return engine.parseAndRender(template, data);
	}

	return {
		fillWithData: fillWithData
	}
}