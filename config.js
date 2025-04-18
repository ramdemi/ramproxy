exports.port = process.env.PORT || 3000;
exports.enable_logging = true;
exports.fetch_regex = /^\/fetch\?remurl\=(.*)$/; // The URL to look for when parsing the request.
exports.proxy_request_timeout_ms = 10000; // The lenght of time we'll wait for a proxy server to respond before timing out.
exports.max_request_length = 100000; // The maximum length of characters allowed for a request or a response.
exports.enable_rate_limiting = true;
exports.max_requests_per_second = 15; // The maximum number of requests per second to allow from a given IP.
exports.blacklist_hostname_regex = /^(10\.|192\.|127\.|localhost$)/i; // Good for limiting access to internal IP addresses and hosts.
exports.cluster_process_count = Number(process.env.CLUSTER_PROCESS_COUNT) || require("os").cpus().length;
