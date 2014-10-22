
var JTrader = function(obj) {
    this.__typeInfo = 'Trader';

    this.j_version = function() { return MinBin.parseIntOrNan(this.version, 'int' ); };
    this.j_email = function() { return this.email; };
    this.j_recordKey = function() { return this.recordKey; };
    this.j_markets = function() { return MinBin.jarray(this.markets); };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JInvocationCallback = function(obj) {
    this.__typeInfo = 'InvocationCallback';

    this.j_sequence = function() { return MinBin.parseIntOrNan(this.sequence, 'int' ); };
    this.j_result = function() { return MinBin.obj('Object',this.result); };
    this.j_cbId = function() { return this.cbId; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JSession = function(obj) {
    this.__typeInfo = 'Session';

    this.j_bcasts = function() { return MinBin.parseIntOrNan(this.bcasts, 'int' ); };
    this.j_requests = function() { return MinBin.parseIntOrNan(this.requests, 'int' ); };
    this.j_subscriptions = function() { return MinBin.parseIntOrNan(this.subscriptions, 'int' ); };
    this.j_version = function() { return MinBin.parseIntOrNan(this.version, 'int' ); };
    this.j_lastPing = function() { return MinBin.parseIntOrNan(this.lastPing, 'int' ); };
    this.j_loginTime = function() { return this.loginTime; };
    this.j_recordKey = function() { return this.recordKey; };
    this.j_traderKey = function() { return this.traderKey; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JRecordChange = function(obj) {
    this.__typeInfo = 'RecordChange';

    this.j_originator = function() { return MinBin.parseIntOrNan(this.originator, 'int' ); };
    this.j_recordId = function() { return MinBin.obj('Object',this.recordId); };
    this.j_newVal = function() { return MinBin.jarray(this.newVal); };
    this.j_oldVals = function() { return MinBin.jarray(this.oldVals); };
    this.j_tableId = function() { return this.tableId; };
    this.j_fieldIndex = function() { return MinBin.i32(this.fieldIndex); };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JSysTable = function(obj) {
    this.__typeInfo = 'SysTable';

    this.j_freeMB = function() { return MinBin.parseIntOrNan(this.freeMB, 'int' ); };
    this.j_numElems = function() { return MinBin.parseIntOrNan(this.numElems, 'int' ); };
    this.j_sizeMB = function() { return MinBin.parseIntOrNan(this.sizeMB, 'int' ); };
    this.j_version = function() { return MinBin.parseIntOrNan(this.version, 'int' ); };
    this.j_description = function() { return this.description; };
    this.j_recordKey = function() { return this.recordKey; };
    this.j_tableName = function() { return this.tableName; };
    this.j_meta = function() { return MinBin.obj('TableMeta',this.meta); };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JTrade = function(obj) {
    this.__typeInfo = 'Trade';

    this.j_isBuy = function() { return this.isBuy?1:0; };
    this.j_tradePrice = function() { return MinBin.parseIntOrNan(this.tradePrice, 'int' ); };
    this.j_tradeQty = function() { return MinBin.parseIntOrNan(this.tradeQty, 'int' ); };
    this.j_version = function() { return MinBin.parseIntOrNan(this.version, 'int' ); };
    this.j_tradeTimeStamp = function() { return MinBin.parseIntOrNan(this.tradeTimeStamp, 'int' ); };
    this.j_buyOrderId = function() { return this.buyOrderId; };
    this.j_buyTraderKey = function() { return this.buyTraderKey; };
    this.j_instrumentKey = function() { return this.instrumentKey; };
    this.j_recordKey = function() { return this.recordKey; };
    this.j_sellOrderId = function() { return this.sellOrderId; };
    this.j_sellTraderKey = function() { return this.sellTraderKey; };
    this.j_tradeTime = function() { return this.tradeTime; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JPosition = function(obj) {
    this.__typeInfo = 'Position';

    this.j_avgPrice = function() { return MinBin.parseIntOrNan(this.avgPrice, 'int' ); };
    this.j_qty = function() { return MinBin.parseIntOrNan(this.qty, 'int' ); };
    this.j_sumPrice = function() { return MinBin.parseIntOrNan(this.sumPrice, 'int' ); };
    this.j_version = function() { return MinBin.parseIntOrNan(this.version, 'int' ); };
    this.j_instrKey = function() { return this.instrKey; };
    this.j_recordKey = function() { return this.recordKey; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JTableMeta = function(obj) {
    this.__typeInfo = 'TableMeta';

    this.j_columns = function() { return MinBin.jmap(this.columns); };
    this.j_customMeta = function() { return this.customMeta; };
    this.j_description = function() { return this.description; };
    this.j_displayName = function() { return this.displayName; };
    this.j_name = function() { return this.name; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JMarket = function(obj) {
    this.__typeInfo = 'Market';

    this.j_ask = function() { return MinBin.parseIntOrNan(this.ask, 'int' ); };
    this.j_askQty = function() { return MinBin.parseIntOrNan(this.askQty, 'int' ); };
    this.j_bid = function() { return MinBin.parseIntOrNan(this.bid, 'int' ); };
    this.j_bidQty = function() { return MinBin.parseIntOrNan(this.bidQty, 'int' ); };
    this.j_lastPrc = function() { return MinBin.parseIntOrNan(this.lastPrc, 'int' ); };
    this.j_lastQty = function() { return MinBin.parseIntOrNan(this.lastQty, 'int' ); };
    this.j_version = function() { return MinBin.parseIntOrNan(this.version, 'int' ); };
    this.j_lastMatch = function() { return MinBin.parseIntOrNan(this.lastMatch, 'int' ); };
    this.j_lastMatchTimeUTC = function() { return this.lastMatchTimeUTC; };
    this.j_recordKey = function() { return this.recordKey; };
    this.j_state = function() { return this.state; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JMetadata = function(obj) {
    this.__typeInfo = 'Metadata';

    this.j_tables = function() { return MinBin.jmap(this.tables); };
    this.j_name = function() { return this.name; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JQueryTuple = function(obj) {
    this.__typeInfo = 'QueryTuple';

    this.j_querySource = function() { return this.querySource; };
    this.j_tableName = function() { return this.tableName; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JOrder = function(obj) {
    this.__typeInfo = 'Order';

    this.j_buy = function() { return this.buy?1:0; };
    this.j_limitPrice = function() { return MinBin.parseIntOrNan(this.limitPrice, 'int' ); };
    this.j_qty = function() { return MinBin.parseIntOrNan(this.qty, 'int' ); };
    this.j_version = function() { return MinBin.parseIntOrNan(this.version, 'int' ); };
    this.j_creationTime = function() { return MinBin.parseIntOrNan(this.creationTime, 'int' ); };
    this.j_creationTimeString = function() { return this.creationTimeString; };
    this.j_instrumentKey = function() { return this.instrumentKey; };
    this.j_recordKey = function() { return this.recordKey; };
    this.j_text = function() { return this.text; };
    this.j_traderKey = function() { return this.traderKey; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JAsset = function(obj) {
    this.__typeInfo = 'Asset';

    this.j_margined = function() { return MinBin.parseIntOrNan(this.margined, 'int' ); };
    this.j_openBuyQty = function() { return MinBin.parseIntOrNan(this.openBuyQty, 'int' ); };
    this.j_openSellQty = function() { return MinBin.parseIntOrNan(this.openSellQty, 'int' ); };
    this.j_qty = function() { return MinBin.parseIntOrNan(this.qty, 'int' ); };
    this.j_version = function() { return MinBin.parseIntOrNan(this.version, 'int' ); };
    this.j_recordKey = function() { return this.recordKey; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JInvocation = function(obj) {
    this.__typeInfo = 'Invocation';

    this.j_argument = function() { return MinBin.obj('Object',this.argument); };
    this.j_cbId = function() { return this.cbId; };
    this.j_name = function() { return this.name; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JInstrument = function(obj) {
    this.__typeInfo = 'Instrument';

    this.j_contractsTraded = function() { return MinBin.parseIntOrNan(this.contractsTraded, 'int' ); };
    this.j_version = function() { return MinBin.parseIntOrNan(this.version, 'int' ); };
    this.j_volumeTraded = function() { return MinBin.parseIntOrNan(this.volumeTraded, 'int' ); };
    this.j_expiryDate = function() { return MinBin.parseIntOrNan(this.expiryDate, 'int' ); };
    this.j_description = function() { return this.description; };
    this.j_expiryDateString = function() { return this.expiryDateString; };
    this.j_instrumentName = function() { return this.instrumentName; };
    this.j_marketPlace = function() { return this.marketPlace; };
    this.j_recordKey = function() { return this.recordKey; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JChangeBroadcast = function(obj) {
    this.__typeInfo = 'ChangeBroadcast';

    this.j_originator = function() { return MinBin.parseIntOrNan(this.originator, 'int' ); };
    this.j_type = function() { return MinBin.parseIntOrNan(this.type, 'int' ); };
    this.j_error = function() { return MinBin.obj('Object',this.error); };
    this.j_newRecord = function() { return MinBin.obj('Record',this.newRecord); };
    this.j_appliedChange = function() { return MinBin.obj('RecordChange',this.appliedChange); };
    this.j_recordKey = function() { return this.recordKey; };
    this.j_tableId = function() { return this.tableId; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JMarketPlace = function(obj) {
    this.__typeInfo = 'MarketPlace';

    this.j_version = function() { return MinBin.parseIntOrNan(this.version, 'int' ); };
    this.j_admin = function() { return this.admin; };
    this.j_marketPlaceName = function() { return this.marketPlaceName; };
    this.j_recordKey = function() { return this.recordKey; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};


var JColumnMeta = function(obj) {
    this.__typeInfo = 'ColumnMeta';

    this.j_hidden = function() { return this.hidden?1:0; };
    this.j_fieldId = function() { return MinBin.parseIntOrNan(this.fieldId, 'int' ); };
    this.j_order = function() { return MinBin.parseIntOrNan(this.order, 'int' ); };
    this.j_align = function() { return this.align; };
    this.j_bgColor = function() { return this.bgColor; };
    this.j_customMeta = function() { return this.customMeta; };
    this.j_description = function() { return this.description; };
    this.j_displayName = function() { return this.displayName; };
    this.j_displayWidth = function() { return this.displayWidth; };
    this.j_javaType = function() { return this.javaType; };
    this.j_name = function() { return this.name; };
    this.j_renderStyle = function() { return this.renderStyle; };
    this.j_textColor = function() { return this.textColor; };


    this.fromObj = function(obj) {
        for ( var key in obj ) {
            var setter = 'j_'.concat(key);
            if ( this.hasOwnProperty(setter) ) {
                this[key] = obj[key];
            }
        }
        return this;
    };
    if ( obj != null ) {
        this.fromObj(obj);
    }

};



var mbfactory = function(clzname,jsObjOrRefId) {
    switch (clzname) {
        case 'Trader': return new JTrader(jsObjOrRefId);
        case 'InvocationCallback': return new JInvocationCallback(jsObjOrRefId);
        case 'Session': return new JSession(jsObjOrRefId);
        case 'RecordChange': return new JRecordChange(jsObjOrRefId);
        case 'SysTable': return new JSysTable(jsObjOrRefId);
        case 'Trade': return new JTrade(jsObjOrRefId);
        case 'Position': return new JPosition(jsObjOrRefId);
        case 'TableMeta': return new JTableMeta(jsObjOrRefId);
        case 'Market': return new JMarket(jsObjOrRefId);
        case 'Metadata': return new JMetadata(jsObjOrRefId);
        case 'QueryTuple': return new JQueryTuple(jsObjOrRefId);
        case 'Order': return new JOrder(jsObjOrRefId);
        case 'Asset': return new JAsset(jsObjOrRefId);
        case 'Invocation': return new JInvocation(jsObjOrRefId);
        case 'Instrument': return new JInstrument(jsObjOrRefId);
        case 'ChangeBroadcast': return new JChangeBroadcast(jsObjOrRefId);
        case 'MarketPlace': return new JMarketPlace(jsObjOrRefId);
        case 'ColumnMeta': return new JColumnMeta(jsObjOrRefId);
        default: if (!jsObjOrRefId) return { __typeInfo: clzname }; else { jsObjOrRefId.__typeInfo = clzname; return jsObjOrRefId; }
    }
};

MinBin.installFactory(mbfactory);
