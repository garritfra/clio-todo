module.exports = async function(scope, builtins, file) {
    var ws_connections = [];
    await builtins.clio_require('./md5.js', [], __dirname, scope);
    for (var server in ws_connections) {
        if (ws_connections.hasOwnProperty(server)) {
            if (ws_connections[server].emitters == {}) {
                ws_connections[server].socket.close()
            }
        }
    }
    return scope;
};