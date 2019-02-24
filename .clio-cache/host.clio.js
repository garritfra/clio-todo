module.exports = async function(scope, builtins, file) {
    var ws_connections = [];
    await builtins.clio_require('rethinkdb-2.3.3/rethinkdb', ['rethinkdb'], __dirname, scope);
    await builtins.clio_require('uuid4-3.3.2/uuid4', ['uuid4'], __dirname, scope);
    await (async function(__data) {
        var fn = async function(__data) {
            return (await builtins.update_vars(scope, ['connection'], await builtins.funcall([...__data], ['localhost', builtins.Decimal('28015')], await builtins.funcall(['connect'], [scope], builtins.get_symbol, file, {
                index: 98,
                fn: '<get-symbol>'
            }), file, {
                index: 98,
                fn: 'connect'
            })))
        }
        if (__data[0].is_reactive) {
            return __data[0].set_listener(function(n) {
                return fn([n, ...__data.slice(1)])
            })
        } else {
            return await fn(__data)
        }
    })([await builtins.funcall(['rethinkdb'], [scope], builtins.get_symbol, file, {
        index: 85,
        fn: '<get-symbol>'
    })]);
    await (async function(__data) {
        var fn = async function(__data) {
            return (await builtins.update_vars(scope, ['todos'], await builtins.funcall([(await builtins.update_vars(scope, ['database'], await builtins.funcall([...__data], ['clio'], await builtins.funcall(['db'], [scope], builtins.get_symbol, file, {
                index: 150,
                fn: '<get-symbol>'
            }), file, {
                index: 150,
                fn: 'db'
            })))], ['todos'], await builtins.funcall(['table'], [scope], builtins.get_symbol, file, {
                index: 174,
                fn: '<get-symbol>'
            }), file, {
                index: 174,
                fn: 'table'
            })))
        }
        if (__data[0].is_reactive) {
            return __data[0].set_listener(function(n) {
                return fn([n, ...__data.slice(1)])
            })
        } else {
            return await fn(__data)
        }
    })([await builtins.funcall(['rethinkdb'], [scope], builtins.get_symbol, file, {
        index: 137,
        fn: '<get-symbol>'
    })]);
    builtins.define_function((function(scope) {
        var func = builtins.lazy(async function(id, title, body, checked) {
            var scope = Object.assign({}, func.frozenscope);
            var args_obj = {};
            var _arguments = arguments;
            ['id', 'title', 'body', 'checked'].forEach(function(arg, index) {
                scope[arg] = _arguments[index]
            });
            return await (async function(__data) {
                var fn = async function(__data) {
                    return await builtins.funcall([await builtins.funcall([await builtins.funcall([...__data], [await builtins.funcall(['id'], [scope], builtins.get_symbol, file, {
                        index: 262,
                        fn: '<get-symbol>'
                    })], await builtins.funcall(['get'], [scope], builtins.get_symbol, file, {
                        index: 258,
                        fn: '<get-symbol>'
                    }), file, {
                        index: 258,
                        fn: 'get'
                    })], [{
                        'title': await builtins.funcall(['title'], [scope], builtins.get_symbol, file, {
                            index: 288,
                            fn: '<get-symbol>'
                        }),
                        'body': await builtins.funcall(['body'], [scope], builtins.get_symbol, file, {
                            index: 300,
                            fn: '<get-symbol>'
                        }),
                        'checked': await builtins.funcall(['checked'], [scope], builtins.get_symbol, file, {
                            index: 314,
                            fn: '<get-symbol>'
                        })
                    }], await builtins.funcall(['update'], [scope], builtins.get_symbol, file, {
                        index: 273,
                        fn: '<get-symbol>'
                    }), file, {
                        index: 273,
                        fn: 'update'
                    })], [await builtins.funcall(['connection'], [scope], builtins.get_symbol, file, {
                        index: 335,
                        fn: '<get-symbol>'
                    })], await builtins.funcall(['run'], [scope], builtins.get_symbol, file, {
                        index: 331,
                        fn: '<get-symbol>'
                    }), file, {
                        index: 331,
                        fn: 'run'
                    })
                }
                if (__data[0].is_reactive) {
                    return __data[0].set_listener(function(n) {
                        return fn([n, ...__data.slice(1)])
                    })
                } else {
                    return await fn(__data)
                }
            })([await builtins.funcall(['todos'], [scope], builtins.get_symbol, file, {
                index: 244,
                fn: '<get-symbol>'
            })])
        }, true);
        func.frozenscope = Object.assign({}, scope);
        func.frozenscope['update_todo'] = func;
        func.frozenscope['recall'] = func;
        return func;
    })(scope), 'update_todo', scope);
    builtins.decorate_function(await builtins.funcall(['eager'], [scope], builtins.get_symbol, file, {
        index: 198,
        fn: '<get-symbol>'
    }), [], 'update_todo', 'default', scope);
    builtins.define_function((function(scope) {
        var func = builtins.lazy(async function(title, body) {
            var scope = Object.assign({}, func.frozenscope);
            var args_obj = {};
            var _arguments = arguments;
            ['title', 'body'].forEach(function(arg, index) {
                scope[arg] = _arguments[index]
            });
            return await (async function(__data) {
                var fn = async function(__data) {
                    return await builtins.funcall([await builtins.funcall([...__data], [{
                        'title': await builtins.funcall(['title'], [scope], builtins.get_symbol, file, {
                            index: 409,
                            fn: '<get-symbol>'
                        }),
                        'body': await builtins.funcall(['body'], [scope], builtins.get_symbol, file, {
                            index: 421,
                            fn: '<get-symbol>'
                        }),
                        'checked': false
                    }], await builtins.funcall(['insert'], [scope], builtins.get_symbol, file, {
                        index: 394,
                        fn: '<get-symbol>'
                    }), file, {
                        index: 394,
                        fn: 'insert'
                    })], [await builtins.funcall(['connection'], [scope], builtins.get_symbol, file, {
                        index: 454,
                        fn: '<get-symbol>'
                    })], await builtins.funcall(['run'], [scope], builtins.get_symbol, file, {
                        index: 450,
                        fn: '<get-symbol>'
                    }), file, {
                        index: 450,
                        fn: 'run'
                    })
                }
                if (__data[0].is_reactive) {
                    return __data[0].set_listener(function(n) {
                        return fn([n, ...__data.slice(1)])
                    })
                } else {
                    return await fn(__data)
                }
            })([await builtins.funcall(['todos'], [scope], builtins.get_symbol, file, {
                index: 380,
                fn: '<get-symbol>'
            })])
        }, true);
        func.frozenscope = Object.assign({}, scope);
        func.frozenscope['add_todo'] = func;
        func.frozenscope['recall'] = func;
        return func;
    })(scope), 'add_todo', scope);
    builtins.decorate_function(await builtins.funcall(['eager'], [scope], builtins.get_symbol, file, {
        index: 348,
        fn: '<get-symbol>'
    }), [], 'add_todo', 'default', scope);
    builtins.define_function((function(scope) {
        var func = builtins.lazy(async function(id) {
            var scope = Object.assign({}, func.frozenscope);
            var args_obj = {};
            var _arguments = arguments;
            ['id'].forEach(function(arg, index) {
                scope[arg] = _arguments[index]
            });
            return await (async function(__data) {
                var fn = async function(__data) {
                    return await builtins.funcall([await builtins.funcall([await builtins.funcall([...__data], [await builtins.funcall(['id'], [scope], builtins.get_symbol, file, {
                        index: 512,
                        fn: '<get-symbol>'
                    })], await builtins.funcall(['get'], [scope], builtins.get_symbol, file, {
                        index: 508,
                        fn: '<get-symbol>'
                    }), file, {
                        index: 508,
                        fn: 'get'
                    })], [], await builtins.funcall(['delete'], [scope], builtins.get_symbol, file, {
                        index: 523,
                        fn: '<get-symbol>'
                    }), file, {
                        index: 523,
                        fn: 'delete'
                    })], [await builtins.funcall(['connection'], [scope], builtins.get_symbol, file, {
                        index: 542,
                        fn: '<get-symbol>'
                    })], await builtins.funcall(['run'], [scope], builtins.get_symbol, file, {
                        index: 538,
                        fn: '<get-symbol>'
                    }), file, {
                        index: 538,
                        fn: 'run'
                    })
                }
                if (__data[0].is_reactive) {
                    return __data[0].set_listener(function(n) {
                        return fn([n, ...__data.slice(1)])
                    })
                } else {
                    return await fn(__data)
                }
            })([await builtins.funcall(['todos'], [scope], builtins.get_symbol, file, {
                index: 494,
                fn: '<get-symbol>'
            })])
        }, true);
        func.frozenscope = Object.assign({}, scope);
        func.frozenscope['remove_todo'] = func;
        func.frozenscope['recall'] = func;
        return func;
    })(scope), 'remove_todo', scope);
    builtins.decorate_function(await builtins.funcall(['eager'], [scope], builtins.get_symbol, file, {
        index: 467,
        fn: '<get-symbol>'
    }), [], 'remove_todo', 'default', scope);
    builtins.define_function((function(scope) {
        var func = builtins.lazy(async function(timestamp) {
            var scope = Object.assign({}, func.frozenscope);
            var args_obj = {};
            var _arguments = arguments;
            ['timestamp'].forEach(function(arg, index) {
                scope[arg] = _arguments[index]
            });
            return await (async function(__data) {
                var fn = async function(__data) {
                    return await builtins.funcall([await builtins.funcall([...__data], [await builtins.funcall(['connection'], [scope], builtins.get_symbol, file, {
                        index: 605,
                        fn: '<get-symbol>'
                    })], await builtins.funcall(['run'], [scope], builtins.get_symbol, file, {
                        index: 601,
                        fn: '<get-symbol>'
                    }), file, {
                        index: 601,
                        fn: 'run'
                    })], [], await builtins.funcall(['toArray'], [scope], builtins.get_symbol, file, {
                        index: 624,
                        fn: '<get-symbol>'
                    }), file, {
                        index: 624,
                        fn: 'toArray'
                    })
                }
                if (__data[0].is_reactive) {
                    return __data[0].set_listener(function(n) {
                        return fn([n, ...__data.slice(1)])
                    })
                } else {
                    return await fn(__data)
                }
            })([await builtins.funcall(['todos'], [scope], builtins.get_symbol, file, {
                index: 587,
                fn: '<get-symbol>'
            })])
        }, true);
        func.frozenscope = Object.assign({}, scope);
        func.frozenscope['get_todos'] = func;
        func.frozenscope['recall'] = func;
        return func;
    })(scope), 'get_todos', scope);
    builtins.decorate_function(await builtins.funcall(['eager'], [scope], builtins.get_symbol, file, {
        index: 555,
        fn: '<get-symbol>'
    }), [], 'get_todos', 'default', scope);
    await (async function(__data) {
        var fn = async function(__data) {
            return (await builtins.update_vars(scope, ['todo_emitter'], await builtins.funcall([...__data], [], await builtins.funcall(['emitter'], [scope], builtins.get_symbol, file, {
                index: 643,
                fn: '<get-symbol>'
            }), file, {
                index: 643,
                fn: 'emitter'
            })))
        }
        if (__data[0].is_reactive) {
            return __data[0].set_listener(function(n) {
                return fn([n, ...__data.slice(1)])
            })
        } else {
            return await fn(__data)
        }
    })(['todos']);
    builtins.define_function((function(scope) {
        var func = builtins.lazy(async function(data) {
            var scope = Object.assign({}, func.frozenscope);
            var args_obj = {};
            var _arguments = arguments;
            ['data'].forEach(function(arg, index) {
                scope[arg] = _arguments[index]
            });
            return await (async function(__data) {
                var fn = async function(__data) {
                    return await builtins.funcall([...__data], ['change', await builtins.funcall(['data'], [scope], builtins.get_symbol, file, {
                        index: 725,
                        fn: '<get-symbol>'
                    })], await builtins.funcall(['emit'], [scope], builtins.get_symbol, file, {
                        index: 712,
                        fn: '<get-symbol>'
                    }), file, {
                        index: 712,
                        fn: 'emit'
                    })
                }
                if (__data[0].is_reactive) {
                    return __data[0].set_listener(function(n) {
                        return fn([n, ...__data.slice(1)])
                    })
                } else {
                    return await fn(__data)
                }
            })([await builtins.funcall(['todo_emitter'], [scope], builtins.get_symbol, file, {
                index: 696,
                fn: '<get-symbol>'
            })])
        }, true);
        func.frozenscope = Object.assign({}, scope);
        func.frozenscope['emit_data'] = func;
        func.frozenscope['recall'] = func;
        return func;
    })(scope), 'emit_data', scope);
    builtins.decorate_function(await builtins.funcall(['eager'], [scope], builtins.get_symbol, file, {
        index: 669,
        fn: '<get-symbol>'
    }), [], 'emit_data', 'default', scope);
    await (async function(__data) {
        var fn = async function(__data) {
            return await builtins.funcall([await builtins.funcall([await builtins.funcall([...__data], [], await builtins.funcall(['changes'], [scope], builtins.get_symbol, file, {
                index: 743,
                fn: '<get-symbol>'
            }), file, {
                index: 743,
                fn: 'changes'
            })], [await builtins.funcall(['connection'], [scope], builtins.get_symbol, file, {
                index: 761,
                fn: '<get-symbol>'
            })], await builtins.funcall(['run'], [scope], builtins.get_symbol, file, {
                index: 757,
                fn: '<get-symbol>'
            }), file, {
                index: 757,
                fn: 'run'
            })], [`data`, await builtins.funcall(['emit_data'], [scope], builtins.get_symbol, file, {
                index: 788,
                fn: '<get-symbol>'
            })], await builtins.funcall(['on'], [scope], builtins.get_symbol, file, {
                index: 778,
                fn: '<get-symbol>'
            }), file, {
                index: 778,
                fn: 'on'
            })
        }
        if (__data[0].is_reactive) {
            return __data[0].set_listener(function(n) {
                return fn([n, ...__data.slice(1)])
            })
        } else {
            return await fn(__data)
        }
    })([await builtins.funcall(['todos'], [scope], builtins.get_symbol, file, {
        index: 731,
        fn: '<get-symbol>'
    })]);
    await (async function(__data) {
        var fn = async function(__data) {
            return (await builtins.update_vars(scope, ['host'], ...__data))
        }
        if (__data[0].is_reactive) {
            return __data[0].set_listener(function(n) {
                return fn([n, ...__data.slice(1)])
            })
        } else {
            return await fn(__data)
        }
    })([{
        'port': builtins.Decimal('3000'),
        'exports': new builtins.Generator(
            (i, self) => self.data[i],
            ['get_todos', 'update_todo', 'add_todo', 'todo_emitter', 'remove_todo'],
            self => self.data.length,
        )
    }]);
    for (var server in ws_connections) {
        if (ws_connections.hasOwnProperty(server)) {
            if (ws_connections[server].emitters == {}) {
                ws_connections[server].socket.close()
            }
        }
    }
    return scope;
};