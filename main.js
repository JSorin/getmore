var dns = require('dns');

dns.lookup('www.github.com','6',function onLookup(err, address, family) {
	console.log('ip 地址:', address);
	console.log('family',family);
	dns.reverse(address, function (err, hostnames) {
		if (err) {
			console.log(err.stack);
		}

		console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
	});
});
